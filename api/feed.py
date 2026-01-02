from flask import Blueprint, request, jsonify
from datetime import datetime
from bson.objectid import ObjectId
from client.mongo_client import db , users_collection , friend_requests_collection
from client.cloudinary_client import config_cloudinary
import cloudinary
import cloudinary.uploader
import cloudinary.api


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
# Configure Cloudinary
config_cloudinary()

feed_bp = Blueprint('feed_bp', __name__)

def post_to_json(post):
    created_at = post.get("createdAt")
    if isinstance(created_at, datetime):
        created_at_str = created_at.isoformat()
    else:
        created_at_str = str(created_at)

    media_url = post.get("mediaUrl") or post.get("imageUrl")

    return {
        "id": str(post["_id"]),
        "userId": post.get("userId"),
        "userName": post.get("userName", ""),
        "userProfileImage": post.get("userProfileImage", ""),
        "content": post.get("content", ""),
        "mediaType": post.get("mediaType"),
        "mediaUrl": media_url,
        "createdAt": created_at_str,
        "likesCount": post.get("likesCount", 0),
        "dislikesCount": post.get("dislikesCount" , 0),
        "commentsCount": post.get("commentsCount", 0),
        "verseReference": post.get("verseReference"),
    }


@feed_bp.route("/posts/feed/<user_id>", methods=["GET"])
def get_feed_posts(user_id):
    # Get pagination params from URL: ?page=1&limit=10
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 10))
    skip = (page - 1) * limit

    user_obj_id = _to_objectid_if_possible(user_id)
    user = users_collection.find_one({'_id': user_obj_id}, {'friends': 1})
    
    # Safely get friend list
    friend_ids = user.get('friends', []) if user else []

    if not friend_ids:
        # FALLBACK: If no friends, show everything in the DB (paginated)
        posts = list(db.posts.find({})
                     .sort("createdAt", -1)
                     .skip(skip)
                     .limit(limit))
    else:
        # CUSTOM FEED: Only show friends + user (paginated)
        ids = friend_ids + [user_id]
        posts = list(db.posts.find({"userId": {"$in": ids}})
                     .sort("createdAt", -1)
                     .skip(skip)
                     .limit(limit))

    posts_json = [post_to_json(post) for post in posts]
    return jsonify(posts_json)

@feed_bp.route("/upload", methods=["POST"])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    try:
        # Upload to Cloudinary
        result = cloudinary.uploader.upload(file, folder="posts")
        return jsonify({"url": result['secure_url']})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@feed_bp.route("/posts", methods=["POST"])
def create_post():
    data = request.get_json(force=True)

    media_url = data.get("mediaUrl")
    media_type = data.get("mediaType")

    post_doc = {
        "userId": data.get("userId"),
        "userName": data.get("userName", ""),
        "userProfileImage": data.get("userProfileImage", ""),
        "content": data.get("content", ""),
        "mediaType": media_type,
        "mediaUrl": media_url,
        "createdAt": datetime.utcnow(),
        "likesCount": 0,
        "dislikesCount":0,
        "commentsCount": 0,
        "verseReference": data.get("verseReference"),
    }

    result = db.posts.insert_one(post_doc)
    post_doc["_id"] = result.inserted_id

    return jsonify(post_to_json(post_doc)), 201

@feed_bp.route("/posts/<user_id>", methods=["GET"])
def get_user_posts(user_id):
    posts = list(db.posts.find({"userId": user_id}).sort("createdAt", -1))
    posts_json = [post_to_json(post) for post in posts]
    return jsonify(posts_json)


@feed_bp.route("/posts/<post_id>", methods=["DELETE"])
def delete_post(post_id):
    db.posts.delete_one({"_id": ObjectId(post_id)})
    db.likes.delete_many({"postId": post_id})
    db.comments.delete_many({"postId": post_id})
    return jsonify({"success": True})

@feed_bp.route("/posts/all", methods=["GET"])
def get_all_posts():
    posts = list(db.posts.find({}).sort("createdAt", -1))
    posts_json = [post_to_json(post) for post in posts]
    return jsonify(posts_json)

from client.mongo_client import comments_collection

@feed_bp.route("/posts/comment/<post_id>", methods=["POST"])
def add_comment(post_id):
    data = request.get_json()

    comment = {
        "commentor_id": ObjectId(data["commentor_id"]),
        "message": data["comment_message"],
        "created_at": datetime.now(),
        "likes": 0,
        "dislikes": 0,
        "recomments": 0
    }

    result = comments_collection.update_one(
        {"post_id": ObjectId(post_id)},
        {"$push": {"comments": comment}}
    )
    previouscommentscount = db.posts.find_one({"_id": ObjectId(post_id)})['commentsCount']

    db.posts.update_one(
        {'_id': ObjectId(post_id)},
        {"$set":{"commentsCount" : (previouscommentscount + 1)}}
    )

    if result.matched_count == 0:
        return jsonify({"error": "Post not found"}), 404

    return jsonify({"message": "Comment added successfully"}), 201

@feed_bp.route('/posts/get-comments-for/<post_id>', methods=["GET"])
def get_posts(post_id):
    comments_cursor = comments_collection.find(
        {"post_id": ObjectId(post_id)},
        {"_id": 0}
    )

    comments = []

    for single_comment in comments_cursor:
        user = users_collection.find_one(
            {"_id": ObjectId(single_comment["commentor_id"])},
            {"profile_pic": 1, "_id": 0}
        )

        single_comment["commentor_pfp"] = (
            user.get("profile_pic")
            if user and "profile_pic" in user
            else "https://res.cloudinary.com/dkj0tdmls/image/upload/v1766263629/default_pfp.jpg"
        )

        comments.append(single_comment)

    return jsonify({
        "comments": comments
    })

