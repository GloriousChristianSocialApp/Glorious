
import 'package:Follower/screens/edit_profile_screen.dart';
import 'package:flutter/material.dart';
import 'package:Follower/models/user.dart';
import 'package:Follower/services/api_service.dart';

class ProfileScreen extends StatefulWidget {
  final User user;

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

  @override
  void initState() {
    super.initState();
    _checkFriendshipStatus();
    _checkIfCurrentUser();
  }

  Future<void> _checkIfCurrentUser() async {
    final currentUserId = await _apiService.getUserId();
    setState(() {
      _isCurrentUser = currentUserId == widget.user.id;
    });
  }

  Future<void> _checkFriendshipStatus() async {
    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) return;

    // Check if already friends
    final friends = await _apiService.getFriends(currentUserId);
    setState(() {
      _isFriend = friends.any((friend) => friend.id == widget.user.id);
    });

    // Check for pending requests
    final sentRequests = await _apiService.getSentFriendRequests(currentUserId);
    setState(() {
      _hasSentRequest = sentRequests.any((req) => req.toUserId == widget.user.id);
    });

    final receivedRequests = await _apiService.getFriendRequests(currentUserId);
    setState(() {
      _hasReceivedRequest = receivedRequests.any((req) => req.fromUserId == widget.user.id);
    });
  }

  Future<void> _sendFriendRequest() async {
    final currentUserId = await _apiService.getUserId();
    if (currentUserId == null) {
      _showSnackBar('User not logged in.', isError: true);
      return;
    }
    try {
      await _apiService.sendFriendRequest(currentUserId, widget.user.id);
      setState(() {
        _hasSentRequest = true;
      });
      _showSnackBar('Friend request sent!');
    } catch (e) {
      _showSnackBar('Failed to send friend request.', isError: true);
    }
  }

  Future<void> _acceptFriendRequest(String requestId) async {
    try {
      await _apiService.respondToFriendRequest(requestId, 'accept');
      setState(() {
        _isFriend = true;
        _hasReceivedRequest = false;
      });
      _showSnackBar('Friend request accepted!');
    } catch (e) {
      _showSnackBar('Failed to accept friend request.', isError: true);
    }
  }

  Future<void> _declineFriendRequest(String requestId) async {
    try {
      await _apiService.respondToFriendRequest(requestId, 'reject');
      setState(() {
        _hasReceivedRequest = false;
      });
      _showSnackBar('Friend request declined.');
    } catch (e) {
      _showSnackBar('Failed to decline friend request.', isError: true);
    }
  }

  void _showSnackBar(String message, {bool isError = false}) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: isError ? Theme.of(context).colorScheme.error : Colors.green,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.user.name),
        backgroundColor: Theme.of(context).colorScheme.primary,
        foregroundColor: Theme.of(context).colorScheme.onPrimary,
        actions: [
          if (_isCurrentUser)
            IconButton(
              icon: Icon(Icons.edit),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => EditProfileScreen()),
                );
              },
            ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            CircleAvatar(
              radius: 60,
              backgroundImage: widget.user.profileImage.isNotEmpty
                  ? NetworkImage(widget.user.profileImage)
                  : null,
              child: widget.user.profileImage.isEmpty
                  ? Icon(Icons.person, size: 60, color: Theme.of(context).colorScheme.onSurface)
                  : null,
            ),
            const SizedBox(height: 16),
            Text(
              widget.user.name,
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              widget.user.email,
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
              ),
            ),
            const SizedBox(height: 24),
            if (_isFriend)
              ElevatedButton.icon(
                onPressed: () {},
                icon: const Icon(Icons.check),
                label: const Text('Friends'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.green,
                  foregroundColor: Colors.white,
                ),
              ) 
            else if (_hasSentRequest)
              ElevatedButton.icon(
                onPressed: null,
                icon: const Icon(Icons.hourglass_empty),
                label: const Text('Request Sent'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.grey,
                  foregroundColor: Colors.white,
                ),
              )
            else if (_hasReceivedRequest)
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton.icon(
                    onPressed: () async {
                      final currentUserId = await _apiService.getUserId();
                      if (currentUserId == null) return;
                      final requests = await _apiService.getFriendRequests(currentUserId);
                      final requestId = requests.firstWhere((req) => req.fromUserId == widget.user.id).id;
                      _acceptFriendRequest(requestId);
                    },
                    icon: const Icon(Icons.person_add_alt_1),
                    label: const Text('Accept Request'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Theme.of(context).colorScheme.primary,
                      foregroundColor: Theme.of(context).colorScheme.onPrimary,
                    ),
                  ),
                  const SizedBox(width: 16),
                  ElevatedButton.icon(
                    onPressed: () async {
                      final currentUserId = await _apiService.getUserId();
                      if (currentUserId == null) return;
                      final requests = await _apiService.getFriendRequests(currentUserId);
                      final requestId = requests.firstWhere((req) => req.fromUserId == widget.user.id).id;
                      _declineFriendRequest(requestId);
                    },
                    icon: const Icon(Icons.close),
                    label: const Text('Decline Request'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Theme.of(context).colorScheme.error,
                      foregroundColor: Colors.white,
                    ),
                  ),
                ],
              )
            else
              ElevatedButton.icon(
                onPressed: _sendFriendRequest,
                icon: const Icon(Icons.person_add),
                label: const Text('Add Friend'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Theme.of(context).colorScheme.primary,
                  foregroundColor: Theme.of(context).colorScheme.onPrimary,
                ),
              ),
            // Add more user details here
          ],
        ),
      ),
    );
  }
}
