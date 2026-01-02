import 'package:flutter/material.dart';
import 'package:Glorious/services/api_service.dart';
import 'package:Glorious/screens/edit_profile_screen.dart'
    deferred as edit_profile;
// ignore: unused_import
import 'package:Glorious/models/user.dart' deferred as user_model;

class ProfileScreen extends StatefulWidget {
  final dynamic user; // Changed from User to dynamic

  const ProfileScreen({super.key, required this.user});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  final ApiService _apiService = ApiService();
  bool _isFriend = false;
  bool _hasSentRequest = false;
  bool _hasReceivedRequest = false;
  bool _isCurrentUser = false;
  bool _librariesLoaded = false;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadDeferredLibraries();
  }

  Future<void> _loadDeferredLibraries() async {
    try {
      await Future.wait([
        edit_profile.loadLibrary(),
        user_model.loadLibrary(),
      ]);
      setState(() => _librariesLoaded = true);
      await _checkIfCurrentUser();
      await _checkFriendshipStatus();
      setState(() => _isLoading = false);
    } catch (e) {
      if (!mounted) return;
      _showSnackBar('Failed to load required resources', isError: true);
      setState(() => _isLoading = false);
    }
  }

  Future<void> _checkIfCurrentUser() async {
    if (!_librariesLoaded) return;

    final currentUserId = await _apiService.getUserId();
    if (!mounted) return;
    setState(() {
      _isCurrentUser = currentUserId == widget.user.id;
    });
  }

  Future<void> _checkFriendshipStatus() async {
    if (!_librariesLoaded) return;

    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) return;

    try {
      // Check if already friends
      final friends = await _apiService.getFriends(currentUserId);
      if (!mounted) return;
      setState(() {
        _isFriend = friends.any((friend) => friend.id == widget.user.id);
      });

      // Check for pending requests
      final sentRequests =
          await _apiService.getSentFriendRequests(currentUserId);
      if (!mounted) return;
      setState(() {
        _hasSentRequest =
            sentRequests.any((req) => req.toUserId == widget.user.id);
      });

      final receivedRequests =
          await _apiService.getFriendRequests(currentUserId);
      if (!mounted) return;
      setState(() {
        _hasReceivedRequest =
            receivedRequests.any((req) => req.fromUserId == widget.user.id);
      });
    } catch (e) {
      if (!mounted) return;
      _showSnackBar('Failed to load friendship status', isError: true);
    }
  }

  Future<void> _sendFriendRequest() async {
    if (!_librariesLoaded) return;

    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) {
      _showSnackBar('User not logged in.', isError: true);
      return;
    }
    try {
      await _apiService.sendFriendRequest(currentUserId, widget.user.id);
      if (!mounted) return;
      setState(() {
        _hasSentRequest = true;
      });
      _showSnackBar('Friend request sent!');
    } catch (e) {
      if (!mounted) return;
      _showSnackBar('Failed to send friend request.', isError: true);
    }
  }

  Future<void> _acceptFriendRequest(String requestId) async {
    try {
      await _apiService.respondToFriendRequest(requestId, 'accept');
      if (!mounted) return;
      setState(() {
        _isFriend = true;
        _hasReceivedRequest = false;
      });
      _showSnackBar('Friend request accepted!');
    } catch (e) {
      if (!mounted) return;
      _showSnackBar('Failed to accept friend request.', isError: true);
    }
  }

  Future<void> _declineFriendRequest(String requestId) async {
    try {
      await _apiService.respondToFriendRequest(requestId, 'reject');
      if (!mounted) return;
      setState(() {
        _hasReceivedRequest = false;
      });
      _showSnackBar('Friend request declined.');
    } catch (e) {
      if (!mounted) return;
      _showSnackBar('Failed to decline friend request.', isError: true);
    }
  }

  Future<void> _navigateToEditProfile() async {
    if (!_librariesLoaded) return;

    await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => edit_profile.EditProfileScreen(),
      ),
    );
  }

  void _showSnackBar(String message, {bool isError = false}) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor:
            isError ? Theme.of(context).colorScheme.error : Colors.green,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.user.name,
          style:
              const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        iconTheme: const IconThemeData(color: Colors.white),
        actions: [
          if (_librariesLoaded && _isCurrentUser)
            IconButton(
              icon: const Icon(Icons.edit, color: Colors.white),
              onPressed: _navigateToEditProfile,
            ),
        ],
      ),
      body: _isLoading
          ? const Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CircularProgressIndicator(),
                  SizedBox(height: 16),
                  Text('Loading profile...'),
                ],
              ),
            )
          : SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    // Profile Avatar
                    Hero(
                      tag: 'profile_${widget.user.id}',
                      child: CircleAvatar(
                        radius: 60,
                        backgroundImage: widget.user.profileImage.isNotEmpty
                            ? NetworkImage(widget.user.profileImage)
                            : null,
                        child: widget.user.profileImage.isEmpty
                            ? Icon(
                                Icons.person,
                                size: 60,
                                color: Theme.of(context).colorScheme.onSurface,
                              )
                            : null,
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Name
                    Text(
                      widget.user.name,
                      style:
                          Theme.of(context).textTheme.headlineMedium?.copyWith(
                                fontWeight: FontWeight.bold,
                              ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 4),

                    // Email
                    Text(
                      widget.user.email,
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            color: Theme.of(context)
                                .colorScheme
                                .onSurface
                                .withOpacity(0.7),
                          ),
                    ),
                    const SizedBox(height: 24),

                    // Stats Cards
                    if (_isCurrentUser) ...[
                      Row(
                        children: [
                          Expanded(
                            child: _buildStatCard(
                              context,
                              'Posts',
                              widget.user.postsCount.toString(),
                              Icons.article,
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: _buildStatCard(
                              context,
                              'Notes',
                              widget.user.notesCount.toString(),
                              Icons.note,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 24),
                    ],

                    // Friend Action Button
                    if (!_isCurrentUser) ...[
                      if (_isFriend)
                        SizedBox(
                          width: double.infinity,
                          child: ElevatedButton.icon(
                            onPressed: () {},
                            icon: const Icon(Icons.check),
                            label: const Text('Friends'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.green,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                            ),
                          ),
                        )
                      else if (_hasSentRequest)
                        SizedBox(
                          width: double.infinity,
                          child: ElevatedButton.icon(
                            onPressed: null,
                            icon: const Icon(Icons.hourglass_empty),
                            label: const Text('Request Sent'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.grey,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                            ),
                          ),
                        )
                      else if (_hasReceivedRequest)
                        Column(
                          children: [
                            SizedBox(
                              width: double.infinity,
                              child: ElevatedButton.icon(
                                onPressed: () async {
                                  final currentUserId =
                                      await _apiService.getUserId();
                                  if (currentUserId == null) return;
                                  final requests = await _apiService
                                      .getFriendRequests(currentUserId);
                                  final requestId = requests
                                      .firstWhere((req) =>
                                          req.fromUserId == widget.user.id)
                                      .id;
                                  _acceptFriendRequest(requestId);
                                },
                                icon: const Icon(Icons.person_add_alt_1),
                                label: const Text('Accept Request'),
                                style: ElevatedButton.styleFrom(
                                  backgroundColor:
                                      Theme.of(context).colorScheme.primary,
                                  foregroundColor:
                                      Theme.of(context).colorScheme.onPrimary,
                                  padding:
                                      const EdgeInsets.symmetric(vertical: 12),
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 12),
                            SizedBox(
                              width: double.infinity,
                              child: OutlinedButton.icon(
                                onPressed: () async {
                                  final currentUserId =
                                      await _apiService.getUserId();
                                  if (currentUserId == null) return;
                                  final requests = await _apiService
                                      .getFriendRequests(currentUserId);
                                  final requestId = requests
                                      .firstWhere((req) =>
                                          req.fromUserId == widget.user.id)
                                      .id;
                                  _declineFriendRequest(requestId);
                                },
                                icon: const Icon(Icons.close),
                                label: const Text('Decline Request'),
                                style: OutlinedButton.styleFrom(
                                  foregroundColor:
                                      Theme.of(context).colorScheme.error,
                                  side: BorderSide(
                                    color: Theme.of(context).colorScheme.error,
                                  ),
                                  padding:
                                      const EdgeInsets.symmetric(vertical: 12),
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        )
                      else
                        SizedBox(
                          width: double.infinity,
                          child: ElevatedButton.icon(
                            onPressed: _sendFriendRequest,
                            icon: const Icon(Icons.person_add),
                            label: const Text('Add Friend'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor:
                                  Theme.of(context).colorScheme.primary,
                              foregroundColor:
                                  Theme.of(context).colorScheme.onPrimary,
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                            ),
                          ),
                        ),
                    ],
                  ],
                ),
              ),
            ),
    );
  }

  Widget _buildStatCard(
    BuildContext context,
    String label,
    String value,
    IconData icon,
  ) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.primaryContainer.withOpacity(0.3),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: Theme.of(context).colorScheme.outline.withOpacity(0.2),
        ),
      ),
      child: Column(
        children: [
          Icon(
            icon,
            color: Theme.of(context).colorScheme.primary,
            size: 24,
          ),
          const SizedBox(height: 8),
          Text(
            value,
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).colorScheme.primary,
                ),
          ),
          Text(
            label,
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color:
                      Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
                ),
          ),
        ],
      ),
    );
  }
}
