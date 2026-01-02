from flask import Blueprint, request, jsonify
from client.mongo_client import (
    OTP_collection,
    users_collection,
    notifications_collection
)
from bson.objectid import ObjectId
from client.emailjs_client import send_email_emailjs
from pymongo import ASCENDING
import random
import string
import datetime
import hashlib
import bcrypt

passreset_bp = Blueprint('passreset', __name__)

# --------------------------------------------------
# TTL index (OTP auto-expires)
# --------------------------------------------------
def ensure_ttl_index():
    """Ensure TTL index exists with correct expireAfterSeconds value"""
    try:
        existing_indexes = OTP_collection.index_information()
        
        if "created_at_1" in existing_indexes:
            existing_ttl = existing_indexes["created_at_1"].get("expireAfterSeconds")
            if existing_ttl != 900:
                # Drop and recreate with correct TTL
                OTP_collection.drop_index("created_at_1")
                OTP_collection.create_index(
                    [("created_at", ASCENDING)],
                    expireAfterSeconds=900
                )
        else:
            # Create new index
            OTP_collection.create_index(
                [("created_at", ASCENDING)],
                expireAfterSeconds=900
            )
    except Exception as e:
        print(f"Warning: Could not ensure TTL index: {e}")

ensure_ttl_index()

# --------------------------------------------------
# SEND OTP
# --------------------------------------------------
@passreset_bp.route('/get_code', methods=['POST'])
def get_code():
    data = request.get_json() or {}
    username = data.get('username')

    if not username:
        return jsonify({"message": "username required"}), 400

    user = users_collection.find_one({"username": username})
    if not user:
        return jsonify({"message": "User not found"}), 404

    user_id = user["_id"]

    # Generate OTP
    otp = ''.join(
        random.choices(string.ascii_letters + string.digits, k=6)
    )

    # Hash OTP
    otp_hash = bcrypt.hashpw(otp.encode(), bcrypt.gensalt())

    # Remove old OTPs
    OTP_collection.delete_many({"user_id": user_id})

    # Store OTP
    OTP_collection.insert_one({
        "user_id": user_id,
        "otp_hash": otp_hash,
        "created_at": datetime.datetime.utcnow()
    })

    # Send OTP email
    send_email_emailjs(
        target_username=user["username"],
        recipient_email=user["email"],
        otp=otp
    )

    return jsonify({
        "message": "OTP sent",
        "user_id": str(user_id)
    }), 200


# --------------------------------------------------
# VERIFY OTP
# --------------------------------------------------
@passreset_bp.route('/verify', methods=['POST'])
def verify_password():
    data = request.get_json() or {}
    user_id = data.get('user_id')
    otp = data.get('otp')

    if not user_id or not otp:
        return jsonify({"message": "Invalid request"}), 400

    try:
        user_id = ObjectId(user_id)
    except Exception:
        return jsonify({"message": "Invalid user ID"}), 400

    record = OTP_collection.find_one({"user_id": user_id})
    if not record:
        return jsonify({"message": "OTP expired or invalid"}), 403

    if not bcrypt.checkpw(otp.encode(), record["otp_hash"]):
        return jsonify({"message": "Invalid OTP"}), 401

    # Generate secure reset token
    token = hashlib.sha384(
        f"{user_id}{otp}{datetime.datetime.utcnow()}".encode()
    ).hexdigest()

    OTP_collection.update_one(
        {"user_id": user_id},
        {"$set": {"token": token}}
    )

    return jsonify({
        "message": "OTP verified",
        "token": token
    }), 200


# --------------------------------------------------
# SET NEW PASSWORD
# --------------------------------------------------
@passreset_bp.route('/new_password/<user_id>/<token>', methods=['POST'])
def new_pass_setter(user_id, token):
    data = request.get_json() or {}
    new_password = data.get('new_password')

    if not new_password:
        return jsonify({"message": "Password required"}), 400

    try:
        user_id = ObjectId(user_id)
    except Exception:
        return jsonify({"message": "Invalid user ID"}), 400

    record = OTP_collection.find_one({"user_id": user_id})
    if not record or record.get("token") != token:
        return jsonify({"message": "Invalid or expired token"}), 403

    # Hash new password
    hashed_password = bcrypt.hashpw(
        new_password.encode(),
        bcrypt.gensalt()
    )

    # Update password
    users_collection.update_one(
        {"_id": user_id},
        {"$set": {"password": hashed_password}}
    )

    # Delete OTP (one-time use)
    OTP_collection.delete_many({"user_id": user_id})

    # Notify user
    notifications_collection.insert_one({
        "userId": str(user_id),
        "title": "Password Changed",
        "message": "Your password has been changed successfully.",
        "timestamp": datetime.datetime.utcnow(),
        "isRead": False
    })

    return jsonify({"status": "success"}), 200