# Add these routes to your feed_bp Blueprint (feed.py)

from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
from client.mongo_client import comments_collection

feed_bp = Blueprint('feed', __name__)

# Route for liking a comment
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


# Optional: Route to remove a like (undo like)
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


# Optional: Route to remove a dislike (undo dislike)
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


# Alternative: Single endpoint for both like and dislike with action parameter
@feed_bp.route("/posts/comment_reaction/<comment_id>", methods=["POST"])
def update_comment_reaction(comment_id):
    try:
        if not ObjectId.is_valid(comment_id):
            return jsonify({"error": "Invalid comment ID"}), 400
        
        data = request.get_json()
        reaction_type = data.get("reaction")  # "like" or "dislike"
        
        if reaction_type not in ["like", "dislike"]:
            return jsonify({"error": "Invalid reaction type. Use 'like' or 'dislike'"}), 400
        
        # Update the appropriate field
        field_to_update = "likes" if reaction_type == "like" else "dislikes"
        
        result = comments_collection.update_one(
            {"_id": ObjectId(comment_id)},
            {"$inc": {field_to_update: 1}}
        )
        
        if result.matched_count == 0:
            return jsonify({"error": "Comment not found"}), 404
        
        updated_comment = comments_collection.find_one(
            {"_id": ObjectId(comment_id)},
            {"likes": 1, "dislikes": 1, "_id": 0}
        )
        
        return jsonify({
            "message": f"Comment {reaction_type}d successfully",
            "likes": updated_comment.get("likes", 0),
            "dislikes": updated_comment.get("dislikes", 0)
        }), 200
    
    except Exception as e:
        print(f"Error updating comment reaction: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Optional: Get comment statistics
@feed_bp.route("/posts/comment_stats/<comment_id>", methods=["GET"])
def get_comment_stats(comment_id):
    try:
        if not ObjectId.is_valid(comment_id):
            return jsonify({"error": "Invalid comment ID"}), 400
        
        comment = comments_collection.find_one(
            {"_id": ObjectId(comment_id)},
            {"likes": 1, "dislikes": 1, "recomments": 1, "_id": 0}
        )
        
        if not comment:
            return jsonify({"error": "Comment not found"}), 404
        
        return jsonify({
            "likes": comment.get("likes", 0),
            "dislikes": comment.get("dislikes", 0),
            "recomments": comment.get("recomments", 0)
        }), 200
    
    except Exception as e:
        print(f"Error fetching comment stats: {str(e)}")
        return jsonify({"error": str(e)}), 500