from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
from datetime import datetime
from client.mongo_client import users_collection, friend_requests_collection, notifications_collection, messages_collection, db

friends_bp = Blueprint('friends', __name__)

def _to_objectid_if_possible(uid):
    """
    Try to convert uid to ObjectId. If it fails, return the original uid (string).
    This lets us handle cases where IDs are stored as ObjectId OR as plain strings.
    """
    try:
        return ObjectId(uid)
    except Exception:
        return uid

def _find_request_by_id_maybe_string(request_id):
    """
    Try to find a request by _id where the stored _id could be an ObjectId or a string.
    Returns the request document or None.
    """
    # try ObjectId first
    try:
        req_obj = ObjectId(request_id)
        res = friend_requests_collection.find_one({'_id': req_obj, 'status': 'pending'})
        if res:
            return res
    except Exception:
        pass
    # fallback: match by raw string _id
    return friend_requests_collection.find_one({'_id': request_id, 'status': 'pending'})

def _find_user_by_id(uid):
    """
    Attempt to find a user by _id either as ObjectId or as string.
    """
    try:
        return users_collection.find_one({'_id': ObjectId(uid)})
    except Exception:
        return users_collection.find_one({'_id': uid})

@friends_bp.route('/friend-requests', methods=['POST'])
def send_friend_request():
    data = request.get_json()
    from_user_id = data.get('fromUserId')
    to_user_id = data.get('toUserId')

    if not from_user_id or not to_user_id:
        return jsonify({'message': 'Missing fromUserId or toUserId'}), 400

    if from_user_id == to_user_id:
        return jsonify({'message': 'Cannot send friend request to self'}), 400

    try:
        # Check if request already exists
        existing_request = friend_requests_collection.find_one({
            'fromUserId': from_user_id,  # Store as string for consistency
            'toUserId': to_user_id,      # Store as string for consistency
            'status': 'pending'
        })
        if existing_request:
            return jsonify({'message': 'Friend request already sent'}), 409

        # Check if they are already friends
        from_user = _find_user_by_id(from_user_id)
        if from_user and to_user_id in from_user.get('friends', []):
            return jsonify({'message': 'Already friends'}), 409

        # Create new friend request
        friend_requests_collection.insert_one({
            'fromUserId': from_user_id,  # Store as string
            'toUserId': to_user_id,      # Store as string
            'status': 'pending',
            'timestamp': datetime.utcnow()
        })
        return jsonify({'message': 'Friend request sent successfully'}), 201
    except Exception as e:
        return jsonify({'message': f'Error sending friend request: {e}'}), 500

@friends_bp.route('/friend-requests/accept', methods=['POST'])
def accept_friend_request():
    data = request.get_json()
    request_id = data.get('requestId')

    if not request_id:
        return jsonify({'message': 'Missing requestId'}), 400

    try:
        # Find the friend request (supporting _id as ObjectId or string)
        friend_request = _find_request_by_id_maybe_string(request_id)
        if not friend_request:
            return jsonify({'message': 'Friend request not found or not pending'}), 404

        from_user_id = friend_request['fromUserId']
        to_user_id = friend_request['toUserId']

        # Convert to proper lookups for users collection (ObjectId if possible)
        from_user_obj_id = _to_objectid_if_possible(from_user_id)
        to_user_obj_id = _to_objectid_if_possible(to_user_id)

        # Add each other to friends list (store friend IDs as strings for consistency)
        users_collection.update_one(
            {'_id': from_user_obj_id},
            {'$addToSet': {'friends': to_user_id}}
        )
        users_collection.update_one(
            {'_id': to_user_obj_id},
            {'$addToSet': {'friends': from_user_id}}
        )

        # Update request status to accepted (update by the original matched key)
        # Try updating by ObjectId first, then fallback to string _id if needed
        try:
            friend_requests_collection.update_one(
                {'_id': ObjectId(request_id)},
                {'$set': {'status': 'accepted', 'acceptedAt': datetime.utcnow()}}
            )
        except Exception:
            friend_requests_collection.update_one(
                {'_id': request_id},
                {'$set': {'status': 'accepted', 'acceptedAt': datetime.utcnow()}}
            )

        # Create notification for the user who sent the request
        to_user = _find_user_by_id(to_user_id)
        to_username = to_user.get("username", "Someone") if to_user else "Someone"
        notifications_collection.insert_one({
            'userId': from_user_id,
            'title': 'Friend Request Accepted',
            'message': f'{to_username} accepted your friend request.',
            'timestamp': datetime.utcnow(),
            'isRead': False
        })

        return jsonify({'message': 'Friend request accepted successfully'}), 200
    except Exception as e:
        return jsonify({'message': f'Error accepting friend request: {e}'}), 500

@friends_bp.route('/friend-requests/decline', methods=['POST'])
def decline_friend_request():
    data = request.get_json()
    request_id = data.get('requestId')

    if not request_id:
        return jsonify({'message': 'Missing requestId'}), 400

    try:
        # Find the friend request (supporting _id as ObjectId or string)
        friend_request = _find_request_by_id_maybe_string(request_id)
        if not friend_request:
            return jsonify({'message': 'Friend request not found or not pending'}), 404

        # Update request status to declined
        try:
            friend_requests_collection.update_one(
                {'_id': ObjectId(request_id)},
                {'$set': {'status': 'declined', 'declinedAt': datetime.utcnow()}}
            )
        except Exception:
            friend_requests_collection.update_one(
                {'_id': request_id},
                {'$set': {'status': 'declined', 'declinedAt': datetime.utcnow()}}
            )

        return jsonify({'message': 'Friend request declined successfully'}), 200
    except Exception as e:
        return jsonify({'message': f'Error declining friend request: {e}'}), 500

@friends_bp.route('/friend-requests/<user_id>', methods=['GET'])
def get_user_friend_requests(user_id):
    try:
        requests = []
        cursor = friend_requests_collection.find({'toUserId': user_id, 'status': 'pending'})
        for req in cursor:
            # Normalize _id to string (works for both ObjectId and string)
            req['_id'] = str(req.get('_id'))
            # Convert timestamp if present
            if 'timestamp' in req and hasattr(req['timestamp'], 'isoformat'):
                req['timestamp'] = req['timestamp'].isoformat()
            # Get fromUser details for the request
            from_user = _find_user_by_id(req['fromUserId'])
            if from_user:
                req['fromUserName'] = from_user.get('username', 'Unknown User')
                req['fromUserProfileImage'] = from_user.get('profileImage', '')
            requests.append(req)
        return jsonify(requests), 200
    except Exception as e:
        return jsonify({'message': f'Error getting friend requests: {e}'}), 500

@friends_bp.route('/friend-requests/sent/<user_id>', methods=['GET'])
def get_sent_friend_requests(user_id):
    try:
        requests = []
        cursor = friend_requests_collection.find({'fromUserId': user_id, 'status': 'pending'})
        for req in cursor:
            req['_id'] = str(req.get('_id'))
            if 'timestamp' in req and hasattr(req['timestamp'], 'isoformat'):
                req['timestamp'] = req['timestamp'].isoformat()
            # Get toUser details for the request
            to_user = _find_user_by_id(req['toUserId'])
            if to_user:
                req['toUserName'] = to_user.get('username', 'Unknown User')
                req['toUserProfileImage'] = to_user.get('profileImage', '')
            requests.append(req)
        return jsonify(requests), 200
    except Exception as e:
        return jsonify({'message': f'Error getting sent friend requests: {e}'}), 500

@friends_bp.route('/friends/<user_id>', methods=['GET'])
def list_friends(user_id):
    try:
        user_obj_id = _to_objectid_if_possible(user_id)
        user = users_collection.find_one({'_id': user_obj_id}, {'friends': 1})
        if not user:
            return jsonify({'message': 'User not found'}), 404

        friend_ids = user.get('friends', [])
        friends = []
        for friend_id in friend_ids:
            try:
                # Try to get friend document by ObjectId or string
                friend_data = _find_user_by_id(friend_id)
                if friend_data:
                    # Normalize id to string for the response
                    friend_data['_id'] = str(friend_data['_id'])
                    friend_data['name'] = friend_data.get('username')

                    # Check for unread messages -- messages collection stores sender_id/recipient_id as strings
                    unread_count = messages_collection.count_documents({
                        "sender_id": friend_id,
                        "recipient_id": user_id,
                        "read": False
                    })
                    friend_data['hasUnreadMessages'] = unread_count > 0

                    friends.append({
                        'id': friend_data['_id'],
                        'name': friend_data['name'],
                        'profileImage': friend_data.get('profileImage'),
                        'hasUnreadMessages': friend_data['hasUnreadMessages']
                    })
            except Exception as e:
                print(f"Error processing friend_id {friend_id}: {e}")
                continue
        return jsonify(friends), 200
    except Exception as e:
        return jsonify({'message': f'Error listing friends: {e}'}), 500

@friends_bp.route('/friends/<user_id>/<friend_id>', methods=['DELETE'])
def remove_friend(user_id, friend_id):
    try:
        # Remove friend_id from user_id's friends list (friends stored as strings)
        users_collection.update_one(
            {'_id': _to_objectid_if_possible(user_id)},
            {'$pull': {'friends': friend_id}}
        )
        # Remove user_id from friend_id's friends list
        users_collection.update_one(
            {'_id': _to_objectid_if_possible(friend_id)},
            {'$pull': {'friends': user_id}}
        )
        return jsonify({'message': 'Friend removed successfully'}), 200
    except Exception as e:
        return jsonify({'message': f'Error removing friend: {e}'}), 500

@friends_bp.route('/users/all', methods=['GET'])
def get_all_users():
    try:
        users = []
        cursor = users_collection.find({}, {'username': 1, 'email': 1, 'profileImage': 1})
        for user in cursor:
            user['_id'] = str(user['_id'])
            users.append(user)
        return jsonify(users), 200
    except Exception as e:
        return jsonify({'message': f'Error getting all users: {e}'}), 500

@friends_bp.route('/users/count', methods=['GET'])
def get_users_count():
    try:
        count = users_collection.count_documents({})
        print(f"Users collection count: {count}")
        return jsonify({'count': count}), 200
    except Exception as e:
        print(f"Error getting users count: {e}")
        return jsonify({'message': f'Error getting users count: {e}'}), 500

@friends_bp.route('/users/search', methods=['GET'])
def search_users():
    query = request.args.get('query', '')
    print(f"Received search query: {query}")
    if not query:
        print("Query is empty, returning empty list.")
        return jsonify([]), 200

    try:
        users = []
        cursor = db.users.find({
            '$or': [
                {'username': {'$regex': f'.*{query}.*', '$options': 'i'}},
                {'email': {'$regex': f'.*{query}.*', '$options': 'i'}}
            ]
        }, {'username': 1, 'email': 1, 'profileImage': 1})

        for user in cursor:
            user['_id'] = str(user['_id'])
            users.append(user)
        print(f"Found {len(users)} users for query '{query}': {users}")
        return jsonify(users), 200
    except Exception as e:
        print(f"Error during user search: {e}")
        return jsonify({'message': f'Error searching users: {e}'}), 500
