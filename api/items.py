from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from client.mongo_client import db

items_bp = Blueprint('items', __name__)

items_collection = db.items # Collection for items



@items_bp.route('/items', methods=['POST'])
def create_item():
    data = request.get_json()
    if not data or 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400
    
    result = items_collection.insert_one(data)
    return jsonify({'message': 'Item created', 'id': str(result.inserted_id)}), 201

@items_bp.route('/items', methods=['GET'])
def get_items():
    items = []
    for item in items_collection.find():
        item['_id'] = str(item['_id']) # Convert ObjectId to string
        items.append(item)
    return jsonify(items), 200

@items_bp.route('/items/<item_id>', methods=['GET'])
def get_item(item_id):
    try:
        item = items_collection.find_one({'_id': ObjectId(item_id)})
        if item:
            item['_id'] = str(item['_id'])
            return jsonify(item), 200
        return jsonify({'error': 'Item not found'}), 404
    except Exception:
        return jsonify({'error': 'Invalid Item ID'}), 400

@items_bp.route('/items/<item_id>', methods=['PUT'])
def update_item(item_id):
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    try:
        result = items_collection.update_one({'_id': ObjectId(item_id)}, {'$set': data})
        if result.matched_count:
            return jsonify({'message': 'Item updated'}), 200
        return jsonify({'error': 'Item not found'}), 404
    except Exception:
        return jsonify({'error': 'Invalid Item ID'}), 400

@items_bp.route('/items/<item_id>', methods=['DELETE'])
def delete_item(item_id):
    try:
        result = items_collection.delete_one({'_id': ObjectId(item_id)})
        if result.deleted_count:
            return jsonify({'message': 'Item deleted'}), 200
        return jsonify({'error': 'Item not found'}), 404
    except Exception:
        return jsonify({'error': 'Invalid Item ID'}), 400
