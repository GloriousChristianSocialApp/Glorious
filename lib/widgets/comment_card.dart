import 'package:flutter/material.dart';
import 'package:Glorious/services/api_service.dart';

class CommentCard extends StatefulWidget {
  final String comment_id;
  final String comment;
  final String commentor;
  final String commentor_pfp;
  final String dateofcomment;
  final int numberoflikes;
  final int numberofdislikes;
  final int numberofrecomments;

  const CommentCard({
    required this.comment_id,
    required this.comment,
    required this.commentor,
    required this.commentor_pfp,
    required this.dateofcomment,
    required this.numberoflikes,
    required this.numberofdislikes,
    required this.numberofrecomments,
    super.key,
  });

  @override
  State<CommentCard> createState() => _CommentCardState();
}

class _CommentCardState extends State<CommentCard> {
  late int currentLikes;
  late int currentDislikes;
  bool isLiking = false;
  bool isDisliking = false;

  // Track user's reaction state
  bool hasLiked = false;
  bool hasDisliked = false;

  @override
  void initState() {
    super.initState();
    currentLikes = widget.numberoflikes;
    currentDislikes = widget.numberofdislikes;
  }

  Future<void> handleLike() async {
    if (isLiking || hasLiked) return;

    // If user has disliked, remove dislike first
    if (hasDisliked) {
      setState(() {
        currentDislikes--;
        hasDisliked = false;
      });
    }

    setState(() {
      isLiking = true;
      currentLikes++;
      hasLiked = true;
    });

    try {
      await ApiService().updateCommentLike(widget.comment_id, true);
    } catch (e) {
      // Revert on error
      setState(() {
        currentLikes--;
        hasLiked = false;
        // Restore dislike if it was removed
        if (!hasDisliked && currentDislikes < widget.numberofdislikes) {
          currentDislikes++;
          hasDisliked = true;
        }
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to like comment')),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          isLiking = false;
        });
      }
    }
  }

  Future<void> handleDislike() async {
    if (isDisliking || hasDisliked) return;

    // If user has liked, remove like first
    if (hasLiked) {
      setState(() {
        currentLikes--;
        hasLiked = false;
      });
    }

    setState(() {
      isDisliking = true;
      currentDislikes++;
      hasDisliked = true;
    });

    try {
      await ApiService().updateCommentLike(widget.comment_id, false);
    } catch (e) {
      // Revert on error
      setState(() {
        currentDislikes--;
        hasDisliked = false;
        // Restore like if it was removed
        if (!hasLiked && currentLikes < widget.numberoflikes) {
          currentLikes++;
          hasLiked = true;
        }
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to dislike comment')),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          isDisliking = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 150,
      width: double.infinity,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(25),
                child: Image.network(
                  widget.commentor_pfp,
                  height: 50,
                  width: 50,
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) {
                    return Container(
                      height: 50,
                      width: 50,
                      color: Colors.grey[300],
                      child: const Icon(Icons.person),
                    );
                  },
                ),
              ),
              const SizedBox(width: 5),
              Text(
                widget.commentor,
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Text(widget.comment),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              ElevatedButton.icon(
                onPressed: (isLiking || hasLiked) ? null : handleLike,
                label: Text("$currentLikes"),
                icon: isLiking
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : Icon(Icons.thumb_up,
                        color: hasLiked
                            ? Color.fromARGB(255, 200, 14, 217)
                            : Colors.white),
              ),
              const SizedBox(width: 8),
              ElevatedButton.icon(
                onPressed: (isDisliking || hasDisliked) ? null : handleDislike,
                label: Text("$currentDislikes"),
                icon: isDisliking
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : Icon(Icons.thumb_down,
                        color: hasDisliked
                            ? Color.fromARGB(255, 248, 13, 13)
                            : Colors.white),
              ),
              const SizedBox(width: 8),
              ElevatedButton.icon(
                onPressed: () {},
                label: Text("${widget.numberofrecomments}"),
                icon: const Icon(Icons.rotate_left),
              ),
            ],
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }
}
