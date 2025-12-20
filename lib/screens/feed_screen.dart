import 'package:flutter/material.dart';
import 'package:Follower/models/post.dart';
import 'package:Follower/services/api_service.dart';
import 'create_post_screen.dart';
import 'package:Follower/widgets/post_card.dart';

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> {
  final ApiService _apiService = ApiService();

  List<Post> _posts = [];
  bool _isLoading = false;
  bool _hasMore = true;
  int _currentPage = 1;
  final int _limit = 10;

  @override
  void initState() {
    super.initState();
    _loadFeed();
  }

  Future<void> _loadFeed({bool isRefresh = false}) async {
    // Prevent multiple simultaneous loads or loading when no more data exists
    if (_isLoading || (!isRefresh && !_hasMore)) return;

    if (isRefresh) {
      setState(() {
        _currentPage = 1;
        _hasMore = true;
        _posts = [];
      });
    }

    setState(() => _isLoading = true);

    try {
      final userId = await _apiService.getUserId();
      // Ensure your ApiService.getFeedPosts accepts (userId, page, limit)
      final newPosts = await _apiService.getFeedPosts(userId!,
          page: _currentPage, limit: _limit);

      setState(() {
        _isLoading = false;
        _posts.addAll(newPosts);
        _currentPage++;

        // If server returns fewer than the limit, we've hit the end of the database
        if (newPosts.length < _limit) {
          _hasMore = false;
        }
      });
    } catch (e) {
      setState(() => _isLoading = false);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Error loading feed')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Feed')),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          await Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => const CreatePostScreen()),
          );
          _loadFeed(isRefresh: true);
        },
        child: const Icon(Icons.add),
      ),
      body: _posts.isEmpty && _isLoading
          ? const Center(child: CircularProgressIndicator())
          : RefreshIndicator(
              onRefresh: () => _loadFeed(isRefresh: true),
              child: ListView.builder(
                // Adding 1 to length to show a loader at the bottom if more posts exist
                itemCount: _posts.length + (_hasMore ? 1 : 0),
                itemBuilder: (context, i) {
                  // --- TRIGGER LOGIC ---
                  // If we are at the 8th post from the bottom, trigger the load
                  if (i == _posts.length - 3 && _hasMore && !_isLoading) {
                    // Using Future.microtask to avoid calling setState during build
                    Future.microtask(() => _loadFeed());
                  }

                  // Render Post
                  if (i < _posts.length) {
                    return PostCard(post: _posts[i]);
                  }

                  // Render Loader at the very bottom
                  else {
                    return const Padding(
                      padding: EdgeInsets.symmetric(vertical: 32),
                      child: Center(child: CircularProgressIndicator()),
                    );
                  }
                },
              ),
            ),
    );
  }
}
