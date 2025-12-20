import 'package:Follower/screens/chat_screen.dart';
import 'package:flutter/material.dart';
import 'package:Follower/models/user.dart';
import 'package:Follower/models/friend_request.dart';
import 'package:Follower/services/api_service.dart';
import 'package:Follower/widgets/friend_card.dart';
import 'package:Follower/widgets/friend_request_card.dart';
import 'package:Follower/screens/profile_screen.dart';

class FriendsScreen extends StatefulWidget {
  const FriendsScreen({super.key});

  @override
  State<FriendsScreen> createState() => _FriendsScreenState();
}

class _FriendsScreenState extends State<FriendsScreen>
    with TickerProviderStateMixin {
  final ApiService _apiService = ApiService();
  List<User> _friends = [];
  List<FriendRequest> _friendRequests = [];
  List<FriendRequest> _sentFriendRequests = [];
  bool _isLoading = true;
  // ignore: unused_field
  int _selectedTab = 0;
  late TabController _tabController;
  final TextEditingController _searchController = TextEditingController();
  List<User> _searchResults = [];
  bool _isSearching = false; // Add loading state for search

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    _tabController.addListener(() {
      setState(() {
        _selectedTab = _tabController.index;
      });
    });
    _loadData();
  }

  @override
  void dispose() {
    _tabController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  Future<void> _loadData() async {
    setState(() => _isLoading = true);
    try {
      final currentUserId = await _apiService.getUserId();
      if (currentUserId == null) {
        _showErrorSnackBar('User not logged in.');
        return;
      }
      final friends = await _apiService.getFriends(currentUserId);
      final requests = await _apiService.getFriendRequests(currentUserId);
      final sentRequests = await _apiService.getSentFriendRequests(currentUserId);
      setState(() {
        _friends = friends;
        _friendRequests = requests;
        _sentFriendRequests = sentRequests;
      });
    } catch (e) {
      _showErrorSnackBar('Failed to load friends data');
    } finally {
      setState(() => _isLoading = false);
    }
  }

  void _showErrorSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Theme.of(context).colorScheme.error,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      ),
    );
  }

  Future<void> _removeFriend(User friend) async {
    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) {
      _showErrorSnackBar('User not logged in.');
      return;
    }
    try {
      await _apiService.removeFriend(currentUserId, friend.id);
      setState(() {
        _friends.removeWhere((u) => u.id == friend.id);
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content:
              Text('${friend.name} has been removed from your friends list.'),
          backgroundColor: Colors.green,
          behavior: SnackBarBehavior.floating,
        ),
      );
    } catch (e) {
      _showErrorSnackBar('Failed to remove friend.');
    }
  }

  Future<void> _searchUsers(String query) async {
    if (query.isEmpty) {
      setState(() {
        _searchResults = [];
        _isSearching = false;
      });
      return;
    }

    setState(() {
      _isSearching = true;
    });

    try {
      final results = await _apiService.searchUsers(query);

      setState(() {
        _searchResults = results;
        _isSearching = false;
      });

      print('Search results updated: ${_searchResults.length} users found');
      // Debug: Print the first user if available
      if (results.isNotEmpty) {
        print('First user: ${results[0].name}, Email: ${results[0].email}');
      }
    } catch (e) {
      print('Search error: $e');
      setState(() {
        _searchResults = [];
        _isSearching = false;
      });
      _showErrorSnackBar('Failed to search users.');
    }
  }

  Future<void> _sendFriendRequest(User user) async {
    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) {
      _showErrorSnackBar('User not logged in.');
      return;
    }
    try {
      await _apiService.sendFriendRequest(currentUserId, user.id);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Friend request sent to ${user.name}!'),
          backgroundColor: Colors.green,
          behavior: SnackBarBehavior.floating,
        ),
      );
      Navigator.pop(context); // Close the search dialog
    } catch (e) {
      _showErrorSnackBar('Failed to send friend request.');
    }
  }

  void _showFindFriendsDialog() {
    // Reset search when opening dialog
    _searchController.clear();
    _searchResults.clear();

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) {
        return StatefulBuilder(
          builder: (BuildContext context, StateSetter setModalState) {
            return Container(
              height: MediaQuery.of(context).size.height * 0.7,
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surface,
                borderRadius:
                    const BorderRadius.vertical(top: Radius.circular(20)),
              ),
              child: Column(
                children: [
                  Container(
                    margin: const EdgeInsets.symmetric(vertical: 12),
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(
                      color:
                          Theme.of(context).colorScheme.onSurface.withAlpha(76),
                      borderRadius: BorderRadius.circular(2),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 24),
                    child: Row(
                      children: [
                        Text(
                          'Find Friends',
                          style:
                              Theme.of(context).textTheme.titleLarge?.copyWith(
                                    fontWeight: FontWeight.bold,
                                  ),
                        ),
                        const Spacer(),
                        IconButton(
                          onPressed: () => Navigator.pop(context),
                          icon: const Icon(Icons.close),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: TextField(
                      controller: _searchController,
                      onChanged: (query) async {
                        await _searchUsers(query);
                        setModalState(() {}); // Update modal state
                      },
                      decoration: InputDecoration(
                        hintText: 'Search by name ...',
                        prefixIcon: const Icon(Icons.search),
                        suffixIcon: _isSearching
                            ? const Padding(
                                padding: EdgeInsets.all(12.0),
                                child: SizedBox(
                                  width: 20,
                                  height: 20,
                                  child:
                                      CircularProgressIndicator(strokeWidth: 2),
                                ),
                              )
                            : null,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(12),
                          borderSide: BorderSide.none,
                        ),
                        filled: true,
                        fillColor: Theme.of(context)
                            .colorScheme
                            .primaryContainer
                            .withAlpha(76),
                      ),
                    ),
                  ),
                  Expanded(
                    child: _isSearching
                        ? const Center(child: CircularProgressIndicator())
                        : _searchResults.isEmpty &&
                                _searchController.text.isNotEmpty
                            ? Center(
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Icon(
                                      Icons.search_off,
                                      size: 64,
                                      color:
                                          Theme.of(context).colorScheme.outline,
                                    ),
                                    const SizedBox(height: 16),
                                    Text(
                                      'No users found',
                                      style: Theme.of(context)
                                          .textTheme
                                          .titleMedium,
                                    ),
                                    const SizedBox(height: 8),
                                    Text(
                                      'Try searching with a different name.',
                                      style: Theme.of(context)
                                          .textTheme
                                          .bodyMedium
                                          ?.copyWith(
                                            color: Theme.of(context)
                                                .colorScheme
                                                .outline,
                                          ),
                                      textAlign: TextAlign.center,
                                    ),
                                  ],
                                ),
                              )
                            : _searchController.text.isEmpty
                                ? Center(
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Icon(
                                          Icons.people_outline,
                                          size: 64,
                                          color: Theme.of(context)
                                              .colorScheme
                                              .outline,
                                        ),
                                        const SizedBox(height: 16),
                                        Text(
                                          'Find your friends',
                                          style: Theme.of(context)
                                              .textTheme
                                              .titleMedium,
                                        ),
                                        const SizedBox(height: 8),
                                        Text(
                                          'Start typing to search for other believers.',
                                          style: Theme.of(context)
                                              .textTheme
                                              .bodyMedium
                                              ?.copyWith(
                                                color: Theme.of(context)
                                                    .colorScheme
                                                    .outline,
                                              ),
                                          textAlign: TextAlign.center,
                                        ),
                                      ],
                                    ),
                                  )
                                : ListView.builder(
                                    itemCount: _searchResults.length,
                                    itemBuilder: (context, index) {
                                      final user = _searchResults[index];
                                      print(
                                          'Rendering user: ${user.name}'); // Debug print
                                      return ListTile(
                                        leading: CircleAvatar(
                                          backgroundImage: user
                                                  .profileImage.isNotEmpty
                                              ? NetworkImage(user.profileImage)
                                              : null,
                                          child: user.profileImage.isEmpty
                                              ? const Icon(Icons.person)
                                              : null,
                                        ),
                                        title: Text(user.name),
                                       
                                        trailing: IconButton(
                                          icon: const Icon(Icons.person_add),
                                          onPressed: () =>
                                              _sendFriendRequest(user),
                                        ),
                                        onTap: () => _viewFriendProfile(user),
                                      );
                                    },
                                  ),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
      
        bottom: TabBar(
          controller: _tabController,
          indicatorColor: Colors.white,
          labelColor: Colors.white,
          unselectedLabelColor: Colors.white.withAlpha(178),
          tabs: [
            Tab(
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.group),
                  const SizedBox(width: 8),
                  Text('Friends (${_friends.length})'),
                ],
              ),
            ),
            Tab(
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.person_add_alt),
                  const SizedBox(width: 8),
                  Text('Requests (${_friendRequests.length})'),
                  if (_friendRequests.isNotEmpty)
                    Container(
                      margin: const EdgeInsets.only(left: 4),
                      width: 8,
                      height: 8,
                      decoration: const BoxDecoration(
                        color: Colors.red,
                        shape: BoxShape.circle,
                      ),
                    ),
                ],
              ),
            ),
            Tab(
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.send),
                  const SizedBox(width: 8),
                  Text('Sent (${_sentFriendRequests.length})'),
                ],
              ),
            ),
          ],
        ),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : TabBarView(
              controller: _tabController,
              children: [
                _buildFriendsTab(),
                _buildRequestsTab(),
                _buildSentRequestsTab(),
              ],
            ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _showFindFriendsDialog,
        icon: const Icon(Icons.person_add),
        label: const Text('Find Friends'),
        backgroundColor: Theme.of(context).colorScheme.primary,
        foregroundColor: Theme.of(context).colorScheme.onPrimary,
      ),
    );
  }

  Widget _buildFriendsTab() {
    if (_friends.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.people_outline,
              size: 80,
              color: Theme.of(context).colorScheme.outline,
            ),
            const SizedBox(height: 16),
            Text(
              'No friends yet',
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: Theme.of(context).colorScheme.outline,
                  ),
            ),
            const SizedBox(height: 8),
            Text(
              'Connect with other believers in your faith journey',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    color: Theme.of(context).colorScheme.outline,
                  ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            ElevatedButton.icon(
              onPressed: _showFindFriendsDialog,
              icon: const Icon(Icons.person_add),
              label: const Text('Find Friends'),
              style: ElevatedButton.styleFrom(
                padding:
                    const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: _loadData,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _friends.length,
        itemBuilder: (context, index) {
          final friend = _friends[index];
          return FriendCard(
            user: friend,
            onTap: () => _messageFriend(friend),
            onMessage: () => _messageFriend(friend),
            onRemove: () => _removeFriend(friend),
          );
        },
      ),
    );
  }

  Widget _buildRequestsTab() {
    if (_friendRequests.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.person_add_alt_outlined,
              size: 80,
              color: Theme.of(context).colorScheme.outline,
            ),
            const SizedBox(height: 16),
            Text(
              'No friend requests',
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: Theme.of(context).colorScheme.outline,
                  ),
            ),
            const SizedBox(height: 8),
            Text(
              'Friend requests will appear here',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    color: Theme.of(context).colorScheme.outline,
                  ),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: _loadData,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _friendRequests.length,
        itemBuilder: (context, index) {
          final request = _friendRequests[index];
          return FriendRequestCard(
            friendRequest: request,
            onAccept: () => _acceptFriendRequest(request),
            onDecline: () => _declineFriendRequest(request),
          );
        },
      ),
    );
  }

  Widget _buildSentRequestsTab() {
    if (_sentFriendRequests.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.outgoing_mail,
              size: 80,
              color: Theme.of(context).colorScheme.outline,
            ),
            const SizedBox(height: 16),
            Text(
              'No sent requests',
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: Theme.of(context).colorScheme.outline,
                  ),
            ),
            const SizedBox(height: 8),
            Text(
              'Your sent friend requests will appear here',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    color: Theme.of(context).colorScheme.outline,
                  ),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: _loadData,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _sentFriendRequests.length,
        itemBuilder: (context, index) {
          final request = _sentFriendRequests[index];
          return ListTile(
            leading: CircleAvatar(
              backgroundImage: request.toUserProfileImage.isNotEmpty
                  ? NetworkImage(request.toUserProfileImage)
                  : null,
              child: request.toUserProfileImage.isEmpty
                  ? const Icon(Icons.person)
                  : null,
            ),
            title: Text(request.toUserName),
            subtitle: const Text('Request sent'),
            trailing: Text(request.status.name),
          );
        },
      ),
    );
  }

  void _viewFriendProfile(User friend) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => ProfileScreen(user: friend),
      ),
    );
  }

  void _messageFriend(User friend) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => ChatScreen(friend: friend),
      ),
    );
  }

  Future<void> _acceptFriendRequest(FriendRequest request) async {
    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) {
      _showErrorSnackBar('User not logged in.');
      return;
    }
    try {
      await _apiService.respondToFriendRequest(request.id, 'accept');
      setState(() {
        _friendRequests.removeWhere((r) => r.id == request.id);
        _friends.add(User(
          id: request.fromUserId,
          name: request.fromUserName,
          email:
              '${request.fromUserName.toLowerCase().replaceAll(' ', '')}@example.com',
          profileImage: request.fromUserProfileImage,
          joinDate: DateTime.now().subtract(const Duration(days: 30)),
          postsCount: 15,
          notesCount: 8,
        ));
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('You are now friends with ${request.fromUserName}!'),
          backgroundColor: Colors.green,
          behavior: SnackBarBehavior.floating,
        ),
      );
    } catch (e) {
      _showErrorSnackBar('Failed to accept friend request.');
    }
  }

  Future<void> _declineFriendRequest(FriendRequest request) async {
    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) {
      _showErrorSnackBar('User not logged in.');
      return;
    }
    try {
      await _apiService.respondToFriendRequest(request.id, 'reject');
      setState(() {
        _friendRequests.removeWhere((r) => r.id == request.id);
      });
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Friend request declined'),
          behavior: SnackBarBehavior.floating,
        ),
      );
    } catch (e) {
      _showErrorSnackBar('Failed to decline friend request.');
    }
  }
}
