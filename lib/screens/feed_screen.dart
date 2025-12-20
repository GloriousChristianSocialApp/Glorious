import 'package:flutter/material.dart';
// ignore: unused_import
import 'package:Glorious/models/post.dart' deferred as post_model;
import 'package:Glorious/services/api_service.dart';
import 'create_post_screen.dart' deferred as create_post;
import 'package:Glorious/widgets/post_card.dart' deferred as post_widget;

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> {
  final ApiService _apiService = ApiService();

  List<dynamic> _posts = []; // Changed from List<Post> to List<dynamic>
  bool _isLoading = false;
  bool _hasMore = true;
  int _currentPage = 1;
  final int _limit = 10;
  bool _librariesLoaded = false;

  @override
  void initState() {
    super.initState();
    _loadDeferredLibraries();
  }

  Future<void> _loadDeferredLibraries() async {
    try {
      await Future.wait([
        post_model.loadLibrary(),
        create_post.loadLibrary(),
        post_widget.loadLibrary(),
      ]);
      setState(() => _librariesLoaded = true);
      _loadFeed();
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Failed to load required resources')),
      );
    }
  }

  Future<void> _loadFeed({bool isRefresh = false}) async {
    // Prevent multiple simultaneous loads or loading when no more data exists
    if (_isLoading || (!isRefresh && !_hasMore) || !_librariesLoaded) return;

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

      if (!mounted) return;

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
      if (!mounted) return;
      setState(() => _isLoading = false);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Error loading feed')),
      );
    }
  }

  Future<void> _navigateToCreatePost() async {
    if (!_librariesLoaded) return;

    await Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => create_post.CreatePostScreen()),
    );
    _loadFeed(isRefresh: true);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Feed',
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _librariesLoaded ? _navigateToCreatePost : null,
        backgroundColor: _librariesLoaded
            ? Theme.of(context).colorScheme.primary
            : Theme.of(context).colorScheme.primary.withOpacity(0.5),
        child: const Icon(Icons.add, color: Colors.white),
      ),
      body: !_librariesLoaded
          ? const Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CircularProgressIndicator(),
                  SizedBox(height: 16),
                  Text('Loading feed...'),
                ],
              ),
            )
          : _posts.isEmpty && _isLoading
              ? const Center(child: CircularProgressIndicator())
              : _posts.isEmpty && !_isLoading
                  ? Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(
                            Icons.feed_outlined,
                            size: 80,
                            color: Theme.of(context).colorScheme.outline,
                          ),
                          const SizedBox(height: 16),
                          Text(
                            'No posts yet',
                            style: Theme.of(context)
                                .textTheme
                                .titleMedium
                                ?.copyWith(
                                  color: Theme.of(context).colorScheme.outline,
                                ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            'Be the first to create a post!',
                            style: Theme.of(context)
                                .textTheme
                                .bodySmall
                                ?.copyWith(
                                  color: Theme.of(context).colorScheme.outline,
                                ),
                          ),
                        ],
                      ),
                    )
                  : RefreshIndicator(
                      onRefresh: () => _loadFeed(isRefresh: true),
                      child: ListView.builder(
                        // Adding 1 to length to show a loader at the bottom if more posts exist
                        itemCount: _posts.length + (_hasMore ? 1 : 0),
                        itemBuilder: (context, i) {
                          // --- TRIGGER LOGIC ---
                          // If we are at the 3rd post from the bottom, trigger the load
                          if (i == _posts.length - 3 &&
                              _hasMore &&
                              !_isLoading) {
                            // Using Future.microtask to avoid calling setState during build
                            Future.microtask(() => _loadFeed());
                          }

                          // Render Post
                          if (i < _posts.length) {
                            return post_widget.PostCard(post: _posts[i]);
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
