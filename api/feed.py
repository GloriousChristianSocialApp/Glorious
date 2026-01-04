from flask import Blueprint, request, jsonify
from datetime import datetime
from bson.objectid import ObjectId
from client.mongo_client import  users_collection , friend_requests_collection , posts_collection , comments_collection
from client.cloudinary_client import config_cloudinary
import cloudinary
import cloudinary.uploader
import os 

default_profile_picture = os.environ.get("DEFAULT_PROFILE_IMAGE")

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
        posts = list(posts_collection.find({})
                     .sort("createdAt", -1)
                     .skip(skip)
                     .limit(limit))
    else:
        # CUSTOM FEED: Only show friends + user (paginated)
        ids = friend_ids + [user_id]
        posts = list(posts_collection.find({"userId": {"$in": ids}})
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

    result = posts_collection.insert_one(post_doc)
    post_doc["_id"] = result.inserted_id

    return jsonify(post_to_json(post_doc)), 201

@feed_bp.route("/posts/<user_id>", methods=["GET"])
def get_user_posts(user_id):
    posts = list(posts_collection.find({"userId": user_id}).sort("createdAt", -1))
    posts_json = [post_to_json(post) for post in posts]
    return jsonify(posts_json)


@feed_bp.route("/posts/<post_id>", methods=["DELETE"])
def delete_post(post_id):
    posts_collection.delete_one({"_id": ObjectId(post_id)})
    
    comments_collection.delete_many({"post_id": post_id})
    return jsonify({"success": True})

@feed_bp.route("/posts/all", methods=["GET"])
def get_all_posts():
    posts = list(posts_collection.find({}).sort("createdAt", -1))
    posts_json = [post_to_json(post) for post in posts]
    return jsonify(posts_json)


@feed_bp.route("/posts/post_likes/<post_id>", methods=["POST"])
def like_post(post_id):
    try:
        # Validate comment_id
        if not ObjectId.is_valid(post_id):
            return jsonify({"error": "Invalid post ID"}), 400
        
        # Increment the likes count for the comment
        result = posts_collection.update_one(
            {"_id": ObjectId(post_id)},
            {"$inc": {"likesCount": 1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found"}), 404
        
        # Get updated comment to return new like count
        updated_post = posts_collection.find_one(
            {"_id": ObjectId(post_id)},
            {"likes": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Comment liked successfully",
            "likes": updated_post.get("likesCount", 0)
        }), 200
    
    except Exception as e:
        print(f"Error liking comment: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Route for disliking a comment
@feed_bp.route("/posts/post_dislikes/<post_id>", methods=["POST"])
def dislike_post(post_id):
    try:
        # Validate comment_id
        if not ObjectId.is_valid(post_id):
            return jsonify({"error": "Invalid Post ID"}), 400
        
        # Increment the dislikes count for the comment
        result = posts_collection.update_one(
            {"_id": ObjectId(post_id)},
            {"$inc": {"dislikesCount": 1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found"}), 404
        
        # Get updated comment to return new dislike count
        updated_post = posts_collection.find_one(
            {"_id": ObjectId(post_id)},
            {"dislikesCount": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Comment disliked successfully",
            "dislikes": updated_post.get("dislikesCount", 0)
        }), 200
    
    except Exception as e:
        print(f"Error disliking comment: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Route to remove a like (undo like)
@feed_bp.route("/posts/post_likes/<post_id>", methods=["DELETE"])
def unlike_post(post_id):
    try:
        if not ObjectId.is_valid(post_id):
            return jsonify({"error": "Invalid Post ID"}), 400
        
        # Decrement likes, but don't go below 0
        result = posts_collection.update_one(
            {"_id": ObjectId(post_id), "likesCount": {"$gt": 0}},
            {"$inc": {"likes": -1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found or likes already at 0"}), 404
        
        updated_post = posts_collection.find_one(
            {"_id": ObjectId(post_id)},
            {"likesCount": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Like removed successfully",
            "likes": updated_post.get("likesCount", 0)
        }), 200
    
    except Exception as e:
        print(f"Error removing like: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Route to remove a dislike (undo dislike)
@feed_bp.route("/posts/post_dislikes/<post_id>", methods=["DELETE"])
def remove_dislike_post(post_id):
    try:
        if not ObjectId.is_valid(post_id):
            return jsonify({"error": "Invalid Post ID"}), 400
        
        # Decrement dislikes, but don't go below 0
        result = posts_collection.update_one(
            {"_id": ObjectId(post_id), "dislikesCount": {"$gt": 0}},
            {"$inc": {"dislikesCount": -1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found or dislikes already at 0"}), 404
        
        updated_post = posts_collection.find_one(
            {"_id": ObjectId(post_id)},
            {"dislikes": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Dislike removed successfully",
            "dislikes": updated_post.get("dislikesCount", 0)
        }), 200
    
    except Exception as e:
        print(f"Error removing dislike: {str(e)}")
        return jsonify({"erroPsr": str(e)}), 500

@feed_bp.route("/posts/comment/<post_id>", methods=["POST"])
def add_comment(post_id):
    data = request.get_json()
    
    comment = {
        "post_id": ObjectId(post_id),
        "commentor_id": ObjectId(data["commentor_id"]),
        "message": data["comment_message"],
        "created_at": datetime.utcnow(),
        "likes": 0,
        "dislikes": 0,
        "recomments": 0
    }
    
    # Insert comment into comments collection
    comments_collection.insert_one(comment)
    
    # Update comment count in posts collection
    result = posts_collection.update_one(
        {"_id": ObjectId(post_id)},
        {"$inc": {"commentsCount": 1}}
    )
    
    if result.matched_count == 0:
        return jsonify({"error": "Post not found"}), 404
    
    return jsonify({"message": "Comment added successfully"}), 201

@feed_bp.route('/posts/get-comments-for/<post_id>', methods=["GET"])
def get_posts(post_id):
   

    print(users_collection.find_one({"_id": ObjectId('6947324c78d3ad5760dc02cf')}))

    try:
        # Validate post_id
        if not ObjectId.is_valid(post_id):
            return jsonify({"error": "Invalid post ID"}), 400

        # Fetch comments for the post
        comments_cursor = comments_collection.find({"post_id": ObjectId(post_id)})
        comments_list = []

        comments_data = []
        commentor_ids = []

        # Collect comments and unique commentor_ids
        for c in comments_cursor:
            comments_data.append(c)
            commentor_id = c.get("commentor_id")
            

            if commentor_id:
                commentor_ids.append(commentor_id)
                

        # Fetch all users at once
        users_cursor = users_collection.find({"_id": {"$in": list(commentor_ids)}})
        users_map = {user["_id"]: user for user in users_cursor}
        

        
        # Build comments response
        for c in comments_data:
            commentor_id = c.get("commentor_id")
            commentor_id_str = str(commentor_id) if commentor_id else None
            username = users_map.get(ObjectId(commentor_id))
            

            comments_list.append({
                "comment_id": str(c["_id"]),
                "post_id": str(c["post_id"]),
                "commentor_id": commentor_id_str,
                "commentor_name": username.get("username") if username else "Unknown",
                "commentor_pfp": username.get("profileImage") if username and username.get("profileImage") else default_profile_picture,
                "message": c.get("message", ""),
                "created_at": c["created_at"].isoformat() if c.get("created_at") else None,
                "likes": c.get("likes", 0),
                "dislikes": c.get("dislikes", 0),
                "recomments": c.get("recomments", 0)
            })

        return jsonify({"comments": comments_list})

    except Exception as e:
        import traceback
        traceback_str = traceback.format_exc()
        print(traceback_str)
        return jsonify({"error": "Internal server error", "trace": traceback_str}), 500

@feed_bp.route("/posts/comment_likes/<comment_id>", methods=["POST"])
def like_comment(comment_id):
    try:
        # Validate comment_id
        if not ObjectId.is_valid(comment_id):
            return jsonify({"error": "Invalid comment ID"}), 400
        
        # Increment the likes count for the comment
        result = comments_collection.update_one(
            {"_id": ObjectId(comment_id)},
            {"$inc": {"likes": 1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found"}), 404
        
        # Get updated comment to return new like count
        updated_comment = comments_collection.find_one(
            {"_id": ObjectId(comment_id)},
            {"likes": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Comment liked successfully",
            "likes": updated_comment.get("likes", 0)
        }), 200
    
    except Exception as e:
        print(f"Error liking comment: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Route for disliking a comment
@feed_bp.route("/posts/comment_dislikes/<comment_id>", methods=["POST"])
def dislike_comment(comment_id):
    try:
        # Validate comment_id
        if not ObjectId.is_valid(comment_id):
            return jsonify({"error": "Invalid comment ID"}), 400
        
        # Increment the dislikes count for the comment
        result = comments_collection.update_one(
            {"_id": ObjectId(comment_id)},
            {"$inc": {"dislikes": 1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found"}), 404
        
        # Get updated comment to return new dislike count
        updated_comment = comments_collection.find_one(
            {"_id": ObjectId(comment_id)},
            {"dislikes": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Comment disliked successfully",
            "dislikes": updated_comment.get("dislikes", 0)
        }), 200
    
    except Exception as e:
        print(f"Error disliking comment: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Route to remove a like (undo like)
@feed_bp.route("/posts/comment_likes/<comment_id>", methods=["DELETE"])
def unlike_comment(comment_id):
    try:
        if not ObjectId.is_valid(comment_id):
            return jsonify({"error": "Invalid comment ID"}), 400
        
        # Decrement likes, but don't go below 0
        result = comments_collection.update_one(
            {"_id": ObjectId(comment_id), "likes": {"$gt": 0}},
            {"$inc": {"likes": -1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found or likes already at 0"}), 404
        
        updated_comment = comments_collection.find_one(
            {"_id": ObjectId(comment_id)},
            {"likes": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Like removed successfully",
            "likes": updated_comment.get("likes", 0)
        }), 200
    
    except Exception as e:
        print(f"Error removing like: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Route to remove a dislike (undo dislike)
@feed_bp.route("/posts/comment_dislikes/<comment_id>", methods=["DELETE"])
def remove_dislike_comment(comment_id):
    try:
        if not ObjectId.is_valid(comment_id):
            return jsonify({"error": "Invalid comment ID"}), 400
        
        # Decrement dislikes, but don't go below 0
        result = comments_collection.update_one(
            {"_id": ObjectId(comment_id), "dislikes": {"$gt": 0}},
            {"$inc": {"dislikes": -1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found or dislikes already at 0"}), 404
        
        updated_comment = comments_collection.find_one(
            {"_id": ObjectId(comment_id)},
            {"dislikes": 1, "_id": 0}
        )
        
        return jsonify({
            "message": "Dislike removed successfully",
            "dislikes": updated_comment.get("dislikes", 0)
        }), 200
    
    except Exception as e:
        print(f"Error removing dislike: {str(e)}")
        return jsonify({"error": str(e)}), 500

