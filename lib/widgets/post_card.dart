import 'package:Glorious/services/api_service.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import '../../models/post.dart';
import 'package:Glorious/screens/commentpage.dart';

class PostCard extends StatefulWidget {
  final Post post;
  const PostCard({super.key, required this.post});

  @override
  State<PostCard> createState() => _PostCardState();
}

class _PostCardState extends State<PostCard> {
  late int currentLikes;
  late int currentDislikes;
  bool isLiking = false;
  bool isDisliking = false;
  
  // Track user's reaction state
  bool hasLiked = false;
  bool hasDisliked = false;

  void initState() {
    super.initState();
    currentLikes = widget.post.likesCount;
    currentDislikes = widget.post.dislikescount;
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
      await ApiService().updatePostReaction(widget.post.id, true);
    } catch (e) {
      // Revert on error
      setState(() {
        currentLikes--;
        hasLiked = false;
        // Restore dislike if it was removed
        if (!hasDisliked && currentDislikes < widget.post.dislikescount) {
          currentDislikes++;
          hasDisliked = true;
        }
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to like post')),
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
      await ApiService().updatePostReaction(widget.post.id, false);
    } catch (e) {
      // Revert on error
      setState(() {
        currentDislikes--;
        hasDisliked = false;
        // Restore like if it was removed
        if (!hasLiked && currentLikes < widget.post.likesCount) {
          currentLikes++;
          hasLiked = true;
        }
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to dislike post')),
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
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ListTile(
            leading: CircleAvatar(
              backgroundImage: NetworkImage(widget.post.userProfileImage),
            ),
            title: Text(widget.post.userName),
            subtitle: Text(widget.post.createdAt.toLocal().toString()),
          ),
          Padding(
            padding: const EdgeInsets.all(12),
            child: Text(widget.post.content),
          ),
          if (widget.post.mediaType == 'image')
            SizedBox(
              width: double.infinity,
              height: 300,
              child: Image.network(
                widget.post.mediaUrl!,
                fit: BoxFit.contain,
              ),
            ),
          if (widget.post.mediaType == 'video') VideoPlayerWidget(url: widget.post.mediaUrl!),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              ElevatedButton.icon(
                onPressed: (isLiking || hasLiked) ? null : handleLike,
                label: Text("$currentLikes"),
                icon: Icon(Icons.thumb_up, color: hasLiked
                        ? Color.fromARGB(255, 200, 14, 217)
                        : Colors.white),
              ),
              ElevatedButton.icon(
                onPressed: (isDisliking || hasDisliked) ? null : handleDislike,
                label: Text("$currentDislikes"),
                icon: Icon(Icons.thumb_down, color: hasDisliked
                        ? Color.fromARGB(255, 248, 13, 13)
                        : Colors.white),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (_) => Commentpage(PostId: widget.post.id)));
                },
                label: Text("${widget.post.commentsCount}"),
                icon: Icon(Icons.comment_sharp),
              ),
            ],
          )
        ],
      ),
    );
  }
}

class VideoPlayerWidget extends StatefulWidget {
  final String url;
  const VideoPlayerWidget({super.key, required this.url});

  @override
  State<VideoPlayerWidget> createState() => _VideoPlayerWidgetState();
}

class _VideoPlayerWidgetState extends State<VideoPlayerWidget> {
  late VideoPlayerController _controller;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.networkUrl(Uri.parse(widget.url))
      ..initialize().then((_) => setState(() {}));
  }

  @override
  Widget build(BuildContext context) {
    if (!_controller.value.isInitialized) {
      return const Padding(
        padding: EdgeInsets.all(20),
        child: CircularProgressIndicator(),
      );
    }

    return GestureDetector(
      onTap: () {
        setState(() {
          _controller.value.isPlaying
              ? _controller.pause()
              : _controller.play();
        });
      },
      child: AspectRatio(
        aspectRatio: _controller.value.aspectRatio,
        child: VideoPlayer(_controller),
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}