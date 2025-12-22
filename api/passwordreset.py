from flask import Blueprint, request, jsonify
from client.mongo_client import (
    OTP_collection,
    users_collection,
    notifications_collection
)
from bson.objectid import ObjectId
from client.smptlib_client import send_email
from pymongo import ASCENDING
import random
import string
import datetime
import hashlib
import bcrypt


passreset_bp = Blueprint('passreset', __name__)

# Create TTL index ONCE (OTP expires automatically)
OTP_collection.create_index(
    [("date_of_creation", ASCENDING)],
    expireAfterSeconds=3600  # 1 hour (recommend 10–15 min in prod)
)


# --------------------------------------------------
# SEND OTP
# --------------------------------------------------
@passreset_bp.route('/get_code', methods=['POST'])
def get_code():
    data = request.get_json()
    username = data.get('username')

    if not username:
        return jsonify({"message": "username required"}), 400

    user_data = users_collection.find_one({"username": username})
    if not user_data:
        return jsonify({"message": "User not found"}), 404
    user_id = users_collection["username"]
    # Generate OTP
    chars = string.ascii_letters + string.digits
    otp = ''.join(random.choice(chars) for _ in range(6))

    # Hash OTP
    otp_hash = bcrypt.hashpw(otp.encode(), bcrypt.gensalt())

    # Send OTP email
    send_email(
        targrt_username=user_data["username"],
        recipient=user_data["email"],
        otp=otp
    )

    # Remove old OTPs
    OTP_collection.delete_many({"user_id": user_id})

    # Store OTP
    OTP_collection.insert_one({
        "user_id": user_id,
        "otp_hash": otp_hash,
        "date_of_creation": datetime.datetime.utcnow()
    })

    return jsonify({"email": user_data["email"]}), 200


# --------------------------------------------------
# VERIFY OTP
# --------------------------------------------------
@passreset_bp.route('/verify', methods=['POST'])
def verify_password():
    data = request.get_json()
    user_id = data.get('user_id')
    otp = data.get('otp')

    if not user_id or not otp:
        return jsonify({"message": "Invalid request"}), 400

    record = OTP_collection.find_one({"user_id": user_id})
    if not record:
        return jsonify({"message": "OTP expired or invalid"}), 403

    if not bcrypt.checkpw(otp.encode(), record["otp_hash"]):
        return jsonify({"message": "Invalid OTP"}), 401

    # Generate reset token
    token = hashlib.sha384(
        f"{user_id}{otp}{datetime.datetime.utcnow()}".encode()
    ).hexdigest()

    OTP_collection.update_one(
        {"user_id": user_id},
        {"$set": {"token": token}}
    )

    return jsonify({
        "message": "success",
        "token": token
    }), 200


# --------------------------------------------------
# SET NEW PASSWORD
# --------------------------------------------------
@passreset_bp.route('/new_password/<user_id>/<token>', methods=['POST'])
def new_pass_setter(user_id, token):
    data = request.get_json()
    new_password = data.get('new_password')

    if not new_password:
        return jsonify({"message": "Password required"}), 400

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
        {"_id": ObjectId(user_id)},
        {"$set": {"password": hashed_password}}
    )

    # Delete OTP (one-time use)
    OTP_collection.delete_many({"user_id": user_id})

    # Notify user
    notifications_collection.insert_one({
        "userId": user_id,
        "title": "Password Changed",
        "message": "Your password has been changed successfully.",
        "timestamp": datetime.datetime.utcnow(),
        "isRead": False
    })

    return jsonify({"status": "success"}), 200
