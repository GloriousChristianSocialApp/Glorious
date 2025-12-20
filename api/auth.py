from flask import Blueprint, request, jsonify, current_app
from pymongo import MongoClient
from bson.objectid import ObjectId
from pymongo.errors import ConnectionFailure
import bcrypt
import jwt
import datetime
import smtplib
import random
import string
from client.mongo_client import notifications_collection , client
from werkzeug.utils import secure_filename
import os
import cloudinary
import cloudinary.uploader




auth_bp = Blueprint('auth', __name__)

# This should ideally be passed from the main app or configured globally

default_profile_picture = os.environ.get("DEFAULT_PROFILE_IMAGE")
db = client.followerdatabase # Using a specific database for cu_app
dbnotes = client.followerdatabase # Using a specific database for cu_app
users_collection = db.users # Collection for users
verification_codes_collection = db.verification_codes # Collection for verification codes

# Secret key for JWT. In a real app, this should be a strong, random key loaded from environment variables.
SECRET_KEY = os.environ.get("JWT_TOKEN")



@auth_bp.route('/update-profile', methods=['POST'])
def update_profile():
    data = request.form
    username = data.get('username')
    user_id = data.get('user_id')

    if not user_id:
        return jsonify({'message': 'User ID is required'}), 400

    try:
        print("Update profile request received.")
        print(f"User ID: {user_id}, Username: {username}")

        user = users_collection.find_one({'_id': ObjectId(user_id)})
        if not user:
            print("User not found.")
            return jsonify({'message': 'User not found'}), 404
        print(f"User found: {user}")

        if username:
            users_collection.update_one({'_id': ObjectId(user_id)}, {'$set': {'username': username}})
            print(f"Username updated to: {username}")

        if 'profile_picture' in request.files:
            file = request.files['profile_picture']
            print(f"Profile picture file received: {file.filename}")
            if file:
                upload_result = cloudinary.uploader.upload(file)
                print(f"Cloudinary upload result: {upload_result}")
                users_collection.update_one({'_id': ObjectId(user_id)}, {'$set': {'profileImage': upload_result['secure_url']}})
                print(f"Profile image updated to: {upload_result['secure_url']}")

        updated_user = users_collection.find_one({'_id': ObjectId(user_id)})
        print(f"Updated user: {updated_user}")
        return jsonify({
            'message': 'Profile updated successfully',
            'user': {
                'username': updated_user.get('username'),
                'profileImage': updated_user.get('profileImage')
            }
        }), 200

    except Exception as e:
        print(f"Error updating profile: {e}")
        return jsonify({'message': f'Error updating profile: {str(e)}'}), 500

@auth_bp.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    if users_collection.find_one({'username': username}):
        return jsonify({'message': 'Username already exists'}), 409

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    users_collection.insert_one({'username': username, 'email':email , 'password': hashed_password, 'profileImage': 'https://res.cloudinary.com/dkj0tdmls/image/upload/v1766263629/default_pfp.jpg'})

    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    try:
        # Find user by username
        user = users_collection.find_one({'username': username})
        if not user:
            return jsonify({'message': 'Invalid username or password'}), 401
        
        # Verify password
        if not bcrypt.checkpw(password.encode('utf-8'), user['password']):
            return jsonify({'message': 'Invalid username or password'}), 401

        # Generate JWT token (expires in 24 hours)
        token = jwt.encode({
            'username': username,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }, SECRET_KEY, algorithm='HS256')

        # Return token and user info
        return jsonify({
            'token': token,
            'user_id': str(user['_id']),
            'username': user['username'],
            'profileImage': user.get('profileImage', '')
        }), 200
    
    except Exception as e:
        return jsonify({'message': f'Error during login: {str(e)}'}), 500

@auth_bp.route('/change-password', methods=['POST'])
def change_password():
    data = request.get_json()
    username = data.get('username')
    old_password = data.get('old_password')
    new_password = data.get('new_password')

    if not username or not old_password or not new_password:
        return jsonify({'message': 'Username, old password, and new password are required'}), 400

    try:
        user = users_collection.find_one({'username': username})
        if not user:
            return jsonify({'message': 'User not found'}), 404

        if not bcrypt.checkpw(old_password.encode('utf-8'), user['password']):
            return jsonify({'message': 'Invalid old password'}), 401

        hashed_password = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())
        users_collection.update_one({'username': username}, {'$set': {'password': hashed_password}})

        notifications_collection.insert_one({
            'userId': str(user['_id']),
            'title': 'Password Changed',
            'message': 'Your password has been changed successfully.',
            'timestamp': datetime.datetime.utcnow(),
            'isRead': False
        })

        return jsonify({'message': 'Password changed successfully'}), 200

    except Exception as e:
        return jsonify({'message': f'Error changing password: {str(e)}'}), 500
""

@auth_bp.route('/users/<user_id>', methods=['GET'])
def get_user_details(user_id):
    try:
        user = users_collection.find_one({'_id': ObjectId(user_id)}, {'password': 0}) # Exclude password
        if user:
            user_data = {
                'id': str(user['_id']),
                'name': user.get('username', ''), # Using username as name for now
                'email': user.get('email', ''),
                'profileImage': user.get('profileImage', 'https://example.com/default_profile.png'), # Default image
                'joinDate': user.get('joinDate', datetime.datetime.utcnow()).isoformat(),
                'friendIds': user.get('friends', []),
                'postsCount': user.get('postsCount', 0),
                'notesCount': user.get('notesCount', 0),
            }
            return jsonify(user_data), 200
        return jsonify({'message': 'User not found'}), 404
    except Exception as e:
        return jsonify({'message': f'Error getting user details: {e}'}), 500

@auth_bp.route('/users/<user_id>/activity', methods=['GET'])
def get_user_activity(user_id):
    try:
        activities = []
        
        # Fetch recent notes
        notes_cursor = dbnotes.notes.find({'userId': user_id}).sort('createdAt', -1).limit(5)
        for note in notes_cursor:
            activities.append({
                'type': 'noteCreated',
                'title': 'Created a new note',
                'subtitle': note.get('title', ''),
                'timestamp': note.get('createdAt').isoformat()
            })

        # Fetch recent posts (assuming a 'posts' collection exists)
        # posts_cursor = db.posts.find({'userId': user_id}).sort('createdAt', -1).limit(5)
        # for post in posts_cursor:
        #     activities.append({
        #         'type': 'postCreated',
        #         'title': 'Shared a post',
        #         'subtitle': post.get('content', ''),
        #         'timestamp': post.get('createdAt').isoformat()
        #     })

        # Fetch recent friend acceptances (where user is either from or to, and status is accepted)
        # friend_acceptances_cursor = db.friend_requests.find({
        #     '$or': [{'fromUserId': user_id}, {'toUserId': user_id}],
        #     'status': 'accepted'
        # }).sort('acceptedAt', -1).limit(5)
        # for req in friend_acceptances_cursor:
        #     other_user_id = req['toUserId'] if req['fromUserId'] == user_id else req['fromUserId']
        #     other_user = users_collection.find_one({'_id': ObjectId(other_user_id)}, {'username': 1})
        #     activities.append({
        #         'type': 'friendAdded',
        #         'title': f'Connected with {other_user.get('username', 'someone')}',
        #         'subtitle': 'You are now friends',
        #         'timestamp': req.get('acceptedAt').isoformat()
        #     })

        # Sort all activities by timestamp (most recent first)
        activities.sort(key=lambda x: x['timestamp'], reverse=True)

        return jsonify(activities), 200
    except Exception as e:
        return jsonify({'message': f'Error getting user activity: {e}'}), 500
    
