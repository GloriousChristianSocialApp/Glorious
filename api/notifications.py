from flask import Blueprint, jsonify, request
from client.mongo_client import notifications_collection
from bson.objectid import ObjectId
import datetime

notifications_bp = Blueprint('notifications_bp', __name__)

@notifications_bp.route('/notifications/<user_id>', methods=['GET'])
def get_notifications(user_id):
    try:
        notifications = []
        cursor = notifications_collection.find({'userId': user_id}).sort('timestamp', -1)
        for notification in cursor:
            notification['_id'] = str(notification['_id'])
            notification['timestamp'] = notification['timestamp'].isoformat()
            notifications.append(notification)
        return jsonify(notifications)
    except Exception as e:
        return jsonify({'message': f'Error getting notifications: {e}'}), 500

@notifications_bp.route('/notifications/mark-as-read', methods=['POST'])
def mark_as_read():
    data = request.get_json()
    notification_id = data.get('notification_id')

    if not notification_id:
        return jsonify({'message': 'Missing notification_id'}), 400

    try:
        notifications_collection.update_one(
            {'_id': ObjectId(notification_id)},
            {'$set': {'isRead': True}}
        )
        return jsonify({'message': 'Notification marked as read'}), 200
    except Exception as e:
        return jsonify({'message': f'Error marking notification as read: {e}'}), 500
