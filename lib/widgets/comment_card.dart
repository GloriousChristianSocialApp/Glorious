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

  @override
  void initState() {
    super.initState();
    currentLikes = widget.numberoflikes;
    currentDislikes = widget.numberofdislikes;
  }

  Future<void> handleLike() async {
    if (isLiking) return;

    setState(() {
      isLiking = true;
      currentLikes++;
    });

    try {
      await ApiService().updateCommentLike(widget.comment_id, true);
    } catch (e) {
      // Revert on error
      setState(() {
        currentLikes--;
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
    if (isDisliking) return;

    setState(() {
      isDisliking = true;
      currentDislikes++;
    });

    try {
      await ApiService().updateCommentLike(widget.comment_id, false);
    } catch (e) {
      // Revert on error
      setState(() {
        currentDislikes--;
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
                onPressed: isLiking ? null : handleLike,
                label: Text("$currentLikes"),
                icon: isLiking
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Icon(Icons.thumb_up),
              ),
              const SizedBox(width: 8),
              ElevatedButton.icon(
                onPressed: isDisliking ? null : handleDislike,
                label: Text("$currentDislikes"),
                icon: isDisliking
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Icon(Icons.thumb_down),
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
