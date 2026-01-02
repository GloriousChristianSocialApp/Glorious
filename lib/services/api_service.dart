import 'package:Glorious/models/account.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:typed_data';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/foundation.dart';
import 'package:Glorious/models/bible_verse.dart';
import 'package:Glorious/models/note.dart';
import 'package:Glorious/models/post.dart';
import 'package:Glorious/models/user.dart';
import 'package:Glorious/models/friend_request.dart';
import 'package:Glorious/models/activity_item.dart'; // Import ActivityItem
import 'package:Glorious/models/notification.dart';

class ApiResponse<T> {
  final int statusCode;
  final T? data;
  final String message;

  ApiResponse({required this.statusCode, this.data, required this.message});
}

class ApiService {
  static const String baseUrl = 'https://glorious-server.onrender.com';

//   Future<String?> _getToken() async {
//     final prefs = await SharedPreferences.getInstance();
//     return prefs.getString('user_token');
//   }

  Future<String?> getUserId() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('user_id');
  }

  Future<String?> getUserName() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('user_name');
  }

  // Bible endpoints
  Future<BibleChapter> getBibleChapter(String book, int chapter) async {
    final response = await http.get(
      Uri.parse('$baseUrl/verses/$book/$chapter'),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      return BibleChapter.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load bible chapter');
    }
  }

  Future<List<String>> getBibleBooks() async {
    // Returning a static list of books as requested
    return [
      'Genesis',
      'Exodus',
      'Leviticus',
      'Numbers',
      'Deuteronomy',
      'Joshua',
      'Judges',
      'Ruth',
      '1 Samuel',
      '2 Samuel',
      '1 Kings',
      '2 Kings',
      '1 Chronicles',
      '2 Chronicles',
      'Ezra',
      'Nehemiah',
      'Esther',
      'Job',
      'Psalms',
      'Proverbs',
      'Ecclesiastes',
      'Song of Solomon',
      'Isaiah',
      'Jeremiah',
      'Lamentations',
      'Ezekiel',
      'Daniel',
      'Hosea',
      'Joel',
      'Amos',
      'Obadiah',
      'Jonah',
      'Micah',
      'Nahum',
      'Habakkuk',
      'Zephaniah',
      'Haggai',
      'Zechariah',
      'Malachi',
      'Matthew',
      'Mark',
      'Luke',
      'John',
      'Acts',
      'Romans',
      '1 Corinthians',
      '2 Corinthians',
      'Galatians',
      'Ephesians',
      'Philippians',
      'Colossians',
      '1 Thessalonians',
      '2 Thessalonians',
      '1 Timothy',
      '2 Timothy',
      'Titus',
      'Philemon',
      'Hebrews',
      'James',
      '1 Peter',
      '2 Peter',
      '1 John',
      '2 John',
      '3 John',
      'Jude',
      'Revelation'
    ];
  }

  // Authentication endpoints

  Future<ApiResponse<Map<String, dynamic>>> login(
      String username, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/login'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'username': username, 'password': password}),
      );

      final body = json.decode(response.body);

      if (response.statusCode == 200) {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('user_token', body['token']);
        await prefs.setString('user_id', body['user_id']);
        await prefs.setString('user_name', body['username']);
        await prefs.setString('user_profile_image', body['profileImage']);
        await prefs.setBool('_isloggedin', true);
        return ApiResponse(
            statusCode: 200, data: body, message: 'Login successful');
      } else {
        return ApiResponse(
            statusCode: response.statusCode,
            message: body['message'] ?? 'Login failed');
      }
    } catch (e) {
      print('Error during login: $e');
      return ApiResponse(statusCode: 500, message: 'Error during login');
    }
  }

  Future<ApiResponse<String>> register(
      String username, String password, String email) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/register'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(
            {'username': username, 'password': password, 'email': email}),
      );
      final body = json.decode(response.body);

      if (response.statusCode == 201) {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('user_token', body['token']);
        await prefs.setString('user_id', body['user_id']);
        await prefs.setString('user_name', body['username']);
        await prefs.setString('user_profile_image', body['profileImage']);
        await prefs.setBool('_isloggedin', true);
        return ApiResponse(
            statusCode: 201, data: body, message: 'Login successful');
      } else {
        return ApiResponse(
          statusCode: response.statusCode,
          message: body['message'] ?? 'Unknown error',
        );
      }
    } catch (e) {
      print('Error during registration: $e');
      return ApiResponse(statusCode: 500, message: 'Error during registration');
    }
  }

// Request OTP
  Future<dynamic> requestOtp(String username) async {
    final response = await http.post(
      Uri.parse('$baseUrl/get_code'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'username': username}),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);

      return data;
    } else {
      throw Exception(jsonDecode(response.body)['message']);
    }
  }

  // Verify OTP
  Future<String> verifyOtp(String userName, String otp) async {
    final response = await http.post(
      Uri.parse('$baseUrl/verify'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'user_id': userName, 'otp': otp}),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      return data['token'];
    } else {
      throw Exception(jsonDecode(response.body)['message']);
    }
  }

  // Set New Password
  Future<void> setNewPassword(
      String userId, String token, String newPassword) async {
    final response = await http.post(
      Uri.parse('$baseUrl/new_password/$userId/$token'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'new_password': newPassword}),
    );

    if (response.statusCode != 200) {
      throw Exception(jsonDecode(response.body)['message']);
    }
  }

  // Notes endpoints
  Future<List<Note>> getUserNotes() async {
    final userId = await getUserId();
    if (userId == null) {
      throw Exception('User not logged in');
    }
    final response = await http.get(
      Uri.parse('$baseUrl/notes/user/$userId'),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      final List<dynamic> notesList = json.decode(response.body);
      return notesList.map((note) => Note.fromJson(note)).toList();
    } else {
      throw Exception('Failed to load notes');
    }
  }

  Future<Note> createNote(Note note) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/notes'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(note.toJson()),
      );

      if (response.statusCode == 201) {
        return Note.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to create note');
      }
    } catch (e) {
      return note;
    }
  }

  Future<void> deleteNote(String noteId) async {
    try {
      await http.delete(
        Uri.parse('$baseUrl/notes/$noteId'),
        headers: {'Content-Type': 'application/json'},
      );
    } catch (e) {
      // Handle error silently for demo
    }
  }

  // Posts endpoints
  Future<List<Post>> getFeedPosts(String userId,
      {int page = 1, int limit = 10}) async {
    try {
      // We add the page and limit as query parameters
      final response = await http.get(
        Uri.parse('$baseUrl/posts/feed/$userId?page=$page&limit=$limit'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> postsList = json.decode(response.body);
        return postsList.map((post) => Post.fromJson(post)).toList();
      } else {
        // It's often better to log the error or handle specific status codes
        print('Server Error: ${response.statusCode}');
        return [];
      }
    } catch (e) {
      print('Network Error: $e');
      return [];
    }
  }

  Future<Post> createPost(Post post) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/posts'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(post.toJson()),
      );

      if (response.statusCode == 201) {
        return Post.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to create post');
      }
    } catch (e) {
      return post;
    }
  }

  // Upload image to server/cloud and get URL
  Future<String> uploadImage(Uint8List bytes, String fileName) async {
    var request = http.MultipartRequest('POST', Uri.parse('$baseUrl/upload'));

    request.files.add(http.MultipartFile.fromBytes(
      'file',
      bytes,
      filename: fileName,
    ));

    var response = await request.send();

    if (response.statusCode == 200) {
      var respStr = await response.stream.bytesToString();
      var data = json.decode(respStr);
      return data['url'];
    } else {
      var respStr = await response.stream.bytesToString();
      throw Exception('Failed to upload image: $respStr');
    }
  }

  // Create post with optional media
  Future<void> createPostWithMedia({
    required String content,
    Uint8List? mediaBytes,
    String? mediaFileName,
    String? mediaType, // 'image', 'video', etc.
    String? verseReference,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getString('user_id');
    final userName = prefs.getString('user_name');
    final profileImage = prefs.getString('user_profile_image') ?? '';

    String? mediaUrl;
    if (mediaBytes != null && mediaFileName != null) {
      // Upload image first
      mediaUrl = await uploadImage(mediaBytes, mediaFileName);
      mediaType ??= 'image'; // default to image if not set
    }

    final body = {
      'userId': userId,
      'userName': userName,
      'userProfileImage': profileImage,
      'content': content,
      'mediaUrl': mediaUrl,
      'mediaType': mediaType,
      'verseReference': verseReference,
      'createdAt': DateTime.now().toIso8601String(),
    };

    final response = await http.post(
      Uri.parse('$baseUrl/posts'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(body),
    );

    if (response.statusCode != 201) {
      throw Exception('Failed to create post');
    }
  }

Future<int> addComment(String postId, String commentMessage) async {
    try {
      final commentorUserId = await getUserId(); // 🔥 FIX

      final response = await http.post(
        Uri.parse("$baseUrl/posts/comment/$postId"),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          "commentor_id": commentorUserId,
          "comment_message": commentMessage,
        }),
      );

      return response.statusCode;
    } catch (e, s) {
      debugPrint("🔥 addComment error: $e");
      debugPrint(s.toString());
      return 707;
    }
  }

  Future<void> updateCommentLike(String commentId, bool isLike) async {
    try {
      final endpoint = isLike ? 'comment_likes' : 'comment_dislikes';

      debugPrint(
          '📤 Sending ${isLike ? "like" : "dislike"} for comment: $commentId');

      final response = await http.post(
        Uri.parse("$baseUrl/posts/$endpoint/$commentId"),
        headers: {'Content-Type': 'application/json'},
      );

      debugPrint('📥 Response status: ${response.statusCode}');
      debugPrint('📥 Response body: ${response.body}');

      if (response.statusCode != 200 && response.statusCode != 201) {
        throw Exception(
            'Failed to update comment ${isLike ? "like" : "dislike"}. Status: ${response.statusCode}');
      }
    } catch (e) {
      debugPrint('❌ Error updating comment like/dislike: $e');
      rethrow;
    }
  }

  // Alternative method if your backend uses a single endpoint with parameters
  Future<void> updateCommentReaction(
      String commentId, String reactionType) async {
    try {
      debugPrint('📤 Sending reaction "$reactionType" for comment: $commentId');

      final response = await http.post(
        Uri.parse("$baseUrl/posts/comment_reaction/$commentId"),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'reaction': reactionType}), // 'like' or 'dislike'
      );

      debugPrint('📥 Response status: ${response.statusCode}');
      debugPrint('📥 Response body: ${response.body}');

      if (response.statusCode != 200 && response.statusCode != 201) {
        throw Exception(
            'Failed to update comment reaction. Status: ${response.statusCode}');
      }
    } catch (e) {
      debugPrint('❌ Error updating comment reaction: $e');
      rethrow;
    }
  }

Future<Map<String, dynamic>?> getPostComments(String postId) async {
    try {
      final response = await http.get(
        Uri.parse("$baseUrl/posts/get-comments-for/$postId"),
        headers: {
          'Content-Type': 'application/json',
        },
      );

      if (response.statusCode == 200) {
        return json.decode(response.body);
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

// Friends endpoints
  Future<List<User>> getFriends(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/friends/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> friendsList = json.decode(response.body);
        return friendsList.map((friend) => User.fromJson(friend)).toList();
      } else {
        throw Exception('Failed to load friends');
      }
    } catch (e) {
      return _getSampleFriends();
    }
  }

  Future<List<FriendRequest>> getFriendRequests(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/friend-requests/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> requestsList = json.decode(response.body);
        return requestsList
            .map((request) => FriendRequest.fromJson(request))
            .toList();
      } else {
        throw Exception('Failed to load friend requests');
      }
    } catch (e) {
      return _getSampleFriendRequests();
    }
  }

  Future<User?> getUserDetails(String userName) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/$userName'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        return User.fromJson(json.decode(response.body));
      } else if (response.statusCode == 404) {
        return null; // User not found
      } else {
        throw Exception('Failed to load user details');
      }
    } catch (e) {
      print('Error getting user details: $e');
      return null;
    }
  }

  Future<List<ActivityItem>> getUserActivity(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/$userId/activity'),
        headers: {'Content-Type': 'application/json'},
      );

      print('Activity API Response: ${response.statusCode}');
      print('Activity API Body: ${response.body}');

      if (response.statusCode == 200) {
        final List<dynamic> activityList = json.decode(response.body);

        // Debug: Print the raw data
        print('Parsed activity list: $activityList');

        return activityList.map((item) {
          try {
            return ActivityItem.fromJson(item as Map<String, dynamic>);
          } catch (e) {
            print('Error parsing activity item: $item, Error: $e');
            // Return a fallback activity item if parsing fails
            return ActivityItem(
              type: ActivityType.noteCreated,
              title: 'Activity',
              subtitle: 'Unable to load details',
              timestamp: DateTime.now(),
            );
          }
        }).toList();
      } else {
        print('Failed to load user activity: ${response.statusCode}');
        throw Exception('Failed to load user activity: ${response.statusCode}');
      }
    } catch (e) {
      print('Error getting user activity: $e');
      return []; // Return empty list instead of throwing
    }
  }

  Future<List<FriendRequest>> getSentFriendRequests(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/friend-requests/sent/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> requestsList = json.decode(response.body);
        return requestsList
            .map((request) => FriendRequest.fromJson(request))
            .toList();
      } else {
        throw Exception('Failed to load sent friend requests');
      }
    } catch (e) {
      return [];
    }
  }

  Future<void> sendFriendRequest(String fromUserId, String toUserId) async {
    print(
        'Sending friend request from: $fromUserId to: $toUserId'); // Debug print
    try {
      await http.post(
        Uri.parse('$baseUrl/friend-requests'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'fromUserId': fromUserId,
          'toUserId': toUserId,
        }),
      );
    } catch (e) {
      // Handle error silently for demo
    }
  }

  Future<void> respondToFriendRequest(String requestId, String action) async {
    try {
      String url;
      if (action == 'accept') {
        url = '$baseUrl/friend-requests/accept';
      } else if (action == 'reject') {
        url = '$baseUrl/friend-requests/decline';
      } else {
        throw Exception('Invalid action for friend request: $action');
      }

      final response = await http.post(
        Uri.parse(url),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'requestId': requestId}),
      );

      if (response.statusCode != 200) {
        throw Exception(
            'Failed to respond to friend request: ${response.body}');
      }
    } catch (e) {
      print('Error responding to friend request: $e');
      rethrow;
    }
  }

  Future<void> removeFriend(String userId, String friendId) async {
    try {
      await http.delete(
        Uri.parse('$baseUrl/friends/$userId/$friendId'),
        headers: {'Content-Type': 'application/json'},
      );
    } catch (e) {
      print('Error removing friend: $e');
      rethrow;
    }
  }

  Future<List<User>> searchUsers(String query) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/search?query=$query'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> usersList = json.decode(response.body);

        // Map the server response to User objects with proper field mapping
        return usersList.map<User>((userData) {
          return User(
            id: userData['_id'] ?? userData['id'] ?? '',
            name: userData['username'] ?? userData['name'] ?? 'Unknown User',
            email: userData['email'] ?? '',
            profileImage:
                userData['profileImage'] ?? userData['profile_image'] ?? '',
            joinDate: userData['joinDate'] != null
                ? DateTime.parse(userData['joinDate'])
                : DateTime.now().subtract(const Duration(days: 30)),
            postsCount: userData['postsCount'] ?? userData['posts_count'] ?? 0,
            notesCount: userData['notesCount'] ?? userData['notes_count'] ?? 0,
          );
        }).toList();
      } else {
        throw Exception('Failed to search users');
      }
    } catch (e) {
      print('Error searching users: $e');
      rethrow;
    }
  }

  Future<void> signOut() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('user_token');
    await prefs.remove('user_id');
  }

  List<User> _getSampleFriends() {
    return [];
  }

  List<FriendRequest> _getSampleFriendRequests() {
    return [];
  }

  Future<Account> getAccountDetails(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/$userId'),
        headers: {
          'Content-Type': 'application/json',
          // Add your auth token here if needed
          // 'Authorization': 'Bearer $token',
        },
      );

      if (response.statusCode == 200) {
        final Map<String, dynamic> jsonMap = jsonDecode(response.body);

        // Ensure required keys are present with defaults
        return Account(
          friendIds: List<String>.from(jsonMap['friendIds'] ?? []),
          id: jsonMap['id'] ?? '',
          joinDate: jsonMap['joinDate'] ?? '',
          name: jsonMap['name'] ?? '',
          notesCount: jsonMap['notesCount'] ?? 0,
          postsCount: jsonMap['postsCount'] ?? 0,
          profileImage: jsonMap['profileImage'] ?? '',
        );
      } else {
        throw Exception(
            'Failed to load account details (Code: ${response.statusCode})');
      }
    } catch (e) {
      throw Exception('Error fetching account details: $e');
    }
  }

  // Enhanced messaging methods with better error handling
  Future<Map<String, dynamic>> sendMessage(
      String senderId, String recipientId, String text) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/send_message'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'sender_id': senderId,
          'recipient_id': recipientId,
          'text': text,
        }),
      );

      final responseData = json.decode(response.body);

      if (response.statusCode == 200) {
        return responseData;
      } else {
        throw Exception(
            'Failed to send message: ${responseData['message'] ?? 'Unknown error'}');
      }
    } catch (e) {
      print('Error sending message: $e');
      rethrow;
    }
  }

  Future<List<dynamic>> getMessages(String user1Id, String user2Id) async {
    final response = await http.get(
      Uri.parse(
        '$baseUrl/get_messages?user1_id=$user1Id&user2_id=$user2Id',
      ),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      final List<dynamic> messages = json.decode(response.body);
      return messages.reversed.toList();
    } else {
      throw Exception('Failed to load messages');
    }
  }

  Future<void> markMessagesRead(String senderId, String recipientId) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/mark_messages_read/$recipientId/$senderId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode != 200) {
        final errorData = json.decode(response.body);
        throw Exception(
            'Failed to mark messages as read: ${errorData['message'] ?? 'Unknown error'}');
      }
    } catch (e) {
      print('Error marking messages as read: $e');
      rethrow;
    }
  }

  // New method to get unread message count
  Future<int> getUnreadMessageCount(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/get_unread_count?user_id=$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        return data['unread_count'] ?? 0;
      } else {
        throw Exception('Failed to get unread count');
      }
    } catch (e) {
      print('Error getting unread count: $e');
      return 0;
    }
  }

  // Method to check connection status
  Future<bool> checkConnection() async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/'),
        headers: {'Content-Type': 'application/json'},
      ).timeout(const Duration(seconds: 5));

      return response.statusCode == 200;
    } catch (e) {
      print('Connection check failed: $e');
      return false;
    }
  }

  Future<bool> isUserOnline(String userId) async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/is_online/$userId'));
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return data['online'] ?? false;
      }
      return false;
    } catch (e) {
      print('Error checking user online status: $e');
      return false;
    }
  }

  Future<List<Notification>> getNotifications(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/notifications/$userId'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> notificationsList = json.decode(response.body);
        return notificationsList
            .map((notification) => Notification.fromJson(notification))
            .toList();
      } else {
        throw Exception('Failed to load notifications');
      }
    } catch (e) {
      print('Error getting notifications: $e');
      rethrow;
    }
  }

  Future<void> markNotificationAsRead(String notificationId) async {
    try {
      await http.post(
        Uri.parse('$baseUrl/notifications/mark-as-read'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'notification_id': notificationId}),
      );
    } catch (e) {
      print('Error marking notification as read: $e');
      rethrow;
    }
  }
}
