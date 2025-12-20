from flask import Blueprint, request, jsonify
from datetime import datetime
from bson.objectid import ObjectId
from client.mongo_client import db , users_collection , friend_requests_collection
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
cloudinary.config( 
    cloud_name = "do6w3vaa8", 
    api_key = "319295354757898", 
    api_secret = "x7_CYEwzbvLxjfIxwn17KH_2Lz8", # Click 'View API Keys' above to copy your API secret
    secure=True
)

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
        "commentsCount": post.get("commentsCount", 0),
        "isLiked": post.get("isLiked", False),
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
        "commentsCount": 0,
        "isLiked": False,
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

@feed_bp.route("/posts/<post_id>/like", methods=["POST"])
def like_post(post_id):
    user_id = request.json.get("userId")
    post = db.posts.find_one({"_id": ObjectId(post_id)})
    if not post:
        return jsonify({"error": "Post not found"}), 404
    liked = db.likes.find_one({"postId": post_id, "userId": user_id})
    if liked:
        db.likes.delete_one({"postId": post_id, "userId": user_id})
        db.posts.update_one({"_id": ObjectId(post_id)}, {"$inc": {"likesCount": -1}})
        db.posts.update_one({"_id": ObjectId(post_id)}, {"$set": {"isLiked": False}})
    else:
        db.likes.insert_one({"postId": post_id, "userId": user_id, "createdAt": datetime.utcnow()})
        db.posts.update_one({"_id": ObjectId(post_id)}, {"$inc": {"likesCount": 1}})
        db.posts.update_one({"_id": ObjectId(post_id)}, {"$set": {"isLiked": True}})
    post = db.posts.find_one({"_id": ObjectId(post_id)})
    return jsonify(post_to_json(post))

@feed_bp.route("/posts/<post_id>/comment", methods=["POST"])
def comment_post(post_id):
    data = request.json
    comment_doc = {
        "postId": post_id,
        "userId": data["userId"],
        "userName": data.get("userName", ""),
        "userProfileImage": data.get("userProfileImage", ""),
        "content": data["content"],
        "createdAt": datetime.utcnow(),
    }
    db.comments.insert_one(comment_doc)
    db.posts.update_one({"_id": ObjectId(post_id)}, {"$inc": {"commentsCount": 1}})
    return jsonify({"success": True, "comment": comment_doc})

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

