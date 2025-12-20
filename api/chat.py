from flask import Blueprint, request, jsonify
from flask_socketio import emit, join_room, leave_room
from client.mongo_client import client
from bson.objectid import ObjectId
import datetime

chat_bp = Blueprint('chat_bp', __name__)

socketio_instance = None
online_users = set()

def set_socketio(sio):
    global socketio_instance
    socketio_instance = sio

    @sio.on('connect')
    def handle_connect():
        print(f"[Server] Client connected: {request.sid}")

    @sio.on('disconnect')
    def handle_disconnect():
        print(f"[Server] Client disconnected: {request.sid}")

    @sio.on('join')
    def handle_join(user_id):
        print(f"[Server] User {user_id} joined room {user_id}")
        join_room(user_id)
        online_users.add(user_id)
        emit('joined', {'room': user_id})

    @sio.on('leave')
    def handle_leave(user_id):
        print(f"[Server] User {user_id} left room {user_id}")
        leave_room(user_id)
        online_users.discard(user_id)
        emit('left', {'room': user_id})

@chat_bp.route('/is_online/<user_id>', methods=['GET'])
def is_online(user_id):
    print(f"[Server] is_online for {user_id}: {'online' if user_id in online_users else 'offline'}")
    return jsonify({'online': user_id in online_users})

@chat_bp.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    sender_id = data.get("sender_id")
    recipient_id = data.get("recipient_id")
    text = data.get("text")
    timestamp = datetime.datetime.utcnow().isoformat()
    message_doc = {
        "sender_id": sender_id,
        "recipient_id": recipient_id,
        "text": text,
        "timestamp": timestamp,
        "read": False,
    }
    db = client.followerdatabase
    result = db.messages.insert_one(message_doc)
    message_doc["_id"] = str(result.inserted_id)
    # Emit to both recipient and sender for instant feedback
    if socketio_instance:
        socketio_instance.emit('new_message', message_doc, room=recipient_id)
        socketio_instance.emit('new_message', message_doc, room=sender_id)
    return jsonify({'success': True, 'message': message_doc})

@chat_bp.route('/get_messages', methods=['GET'])
def get_messages():
    user1_id = request.args.get('user1_id')
    user2_id = request.args.get('user2_id')

    if not user1_id or not user2_id:
        return jsonify({"error": "Missing user IDs"}), 400

    db = client.followerdatabase
    messages = list(db.messages.find({
        "$or": [
            {"sender_id": user1_id, "recipient_id": user2_id},
            {"sender_id": user2_id, "recipient_id": user1_id}
        ]
    }).sort("timestamp", -1))

    for msg in messages:
        msg["_id"] = str(msg["_id"])

    return jsonify(messages)

@chat_bp.route('/mark_messages_read/<friend_id>/<user_id>', methods=['POST'])
def mark_messages_read(friend_id, user_id):
    db = client.followerdatabase
    db.messages.update_many(
        {"sender_id": friend_id, "recipient_id": user_id, "read": False},
        {"$set": {"read": True}}
    )
    return jsonify({'success': True})
