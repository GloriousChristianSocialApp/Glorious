from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
import datetime
from client.mongo_client import db

notes_bp = Blueprint('notes', __name__)

notes_collection = db.notes # Collection for notes



@notes_bp.route('/notes/user/<user_id>', methods=['GET'])
def get_user_notes(user_id):
    try:
        notes = []
        cursor = notes_collection.find({'userId': user_id}).sort('createdAt', -1)
        for note_doc in cursor:
            note = {
                'id': str(note_doc['_id']),
                'title': note_doc['title'],
                'content': note_doc['content'],
                'userId': note_doc['userId'],
                'createdAt': note_doc['createdAt'].isoformat(),
                'updatedAt': note_doc['updatedAt'].isoformat() if 'updatedAt' in note_doc else None,
                'verseReference': note_doc.get('verseReference'),
                'tags': note_doc.get('tags', [])
            }
            notes.append(note)
        return jsonify(notes), 200
    except Exception as e:
        return jsonify({'message': f'Error getting notes: {e}'}), 500

@notes_bp.route('/notes', methods=['POST'])
def create_note():
    data = request.get_json()
    if not data or 'userId' not in data or 'title' not in data or 'content' not in data:
        return jsonify({'message': 'userId, title, and content are required'}), 400
    
    note_data = {
        'userId': data['userId'],
        'title': data['title'],
        'content': data['content'],
        'createdAt': datetime.datetime.utcnow(),
        'verseReference': data.get('verseReference'),
        'tags': data.get('tags', [])
    }
    result = notes_collection.insert_one(note_data)
    
    # Create a response object that is JSON serializable
    created_note = {
        'id': str(result.inserted_id),
        'userId': note_data['userId'],
        'title': note_data['title'],
        'content': note_data['content'],
        'createdAt': note_data['createdAt'].isoformat(),
        'verseReference': note_data['verseReference'],
        'tags': note_data['tags']
    }
    
    return jsonify(created_note), 201

@notes_bp.route('/notes/<note_id>', methods=['DELETE'])
def delete_note(note_id):
    try:
        result = notes_collection.delete_one({'_id': ObjectId(note_id)})
        if result.deleted_count:
            return jsonify({'message': 'Note deleted'}), 200
        return jsonify({'message': 'Note not found'}), 404
    except Exception as e:
        return jsonify({'message': f'Error deleting note: {e}'}), 500
