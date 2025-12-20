import 'package:Glorious/services/api_service.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:async';
// import 'dart:io' show Platform;
import 'package:flutter/foundation.dart' show kIsWeb;

class NotificationService {
  static final FlutterLocalNotificationsPlugin _notifications =
      FlutterLocalNotificationsPlugin();
  static final ApiService _apiService = ApiService();
  static IO.Socket? _socket;
  static String? _currentUserId;
  static String?
      activeChatFriendId; // Track active chat to prevent notifications
  static Timer? _heartbeatTimer;
  static bool _isInitialized = false;
  static final Map<String, String> _senderNameCache = {};

  static Future<void> initialize() async {
    if (_isInitialized) return;

    // Initialize notifications only if supported
    if (!kIsWeb) {
      final androidSettings =
          AndroidInitializationSettings('@mipmap/ic_launcher');
      final iosSettings = DarwinInitializationSettings(
        requestAlertPermission: true,
        requestBadgePermission: true,
        requestSoundPermission: true,
      );
      final macosSettings = DarwinInitializationSettings(
        requestAlertPermission: true,
        requestBadgePermission: true,
        requestSoundPermission: true,
      );
      final linuxSettings = LinuxInitializationSettings(
        defaultActionName: 'Open',
        // No requestPermissions method for Linux!
      );

      final settings = InitializationSettings(
        android: androidSettings,
        iOS: iosSettings,
        macOS: macosSettings,
        linux: linuxSettings,
      );

      await _notifications.initialize(settings,
          onDidReceiveNotificationResponse: _onNotificationTapped);
      await _requestPermissions();
    }

    // Get current user ID
    final prefs = await SharedPreferences.getInstance();
    _currentUserId = prefs.getString('user_id');

    if (_currentUserId != null) {
      await _initializeSocket();
      _startHeartbeat();
    }

    _isInitialized = true;
    print('[NotificationService] Initialized successfully');
  }

  static Future<void> _requestPermissions() async {
    if (kIsWeb) return;
    final androidPlugin = _notifications.resolvePlatformSpecificImplementation<
        AndroidFlutterLocalNotificationsPlugin>();
    if (androidPlugin != null) {
      await androidPlugin.requestNotificationsPermission();
    }
    final iosPlugin = _notifications.resolvePlatformSpecificImplementation<
        IOSFlutterLocalNotificationsPlugin>();
    if (iosPlugin != null) {
      await iosPlugin.requestPermissions(alert: true, badge: true, sound: true);
    }
    final macPlugin = _notifications.resolvePlatformSpecificImplementation<
        MacOSFlutterLocalNotificationsPlugin>();
    if (macPlugin != null) {
      await macPlugin.requestPermissions(alert: true, badge: true, sound: true);
    }
    // No requestPermissions for Linux - do nothing
  }

  static Future<void> _initializeSocket() async {
    // Disconnect previous socket if any
    if (_socket != null) {
      _socket!.dispose();
      _socket = null;
    }

    // Use correct protocol for platform (web uses ws, mobile/desktop uses http(s))
    String wsUrl = ApiService.baseUrl;
    if (kIsWeb) {
      wsUrl = wsUrl.replaceFirst('http', 'ws');
    }

    _socket = IO.io(
      wsUrl,
      IO.OptionBuilder()
          .setTransports(['websocket'])
          .enableForceNewConnection()
          .enableAutoConnect()
          .setReconnectionAttempts(5)
          .setReconnectionDelay(1000)
          .build(),
    );

    _socket!.onConnect((_) {
      print('[NotificationService] Socket connected');
      if (_currentUserId != null) {
        _socket!.emit('join', _currentUserId);
        print('[NotificationService] Joined room: $_currentUserId');
      }
    });

    _socket!.onDisconnect((_) {
      print('[NotificationService] Socket disconnected');
    });

    _socket!.onConnectError((data) {
      print('[NotificationService] Connection error: $data');
    });

    // Listen for new messages
    _socket!.on('new_message', (data) {
      print('[NotificationService] Received new message: $data');
      if (data is Map<String, dynamic>) {
        _handleNewMessage(data);
      } else {
        _handleNewMessage(Map<String, dynamic>.from(data));
      }
    
    });

    _socket!.on('messages_read', (data) {
      print('[NotificationService] Messages read: $data');
      // Optionally handle read receipts
    });

    _socket!.onError((data) {
      print('[NotificationService] Socket error: $data');
    });
  }

  static void _handleNewMessage(Map<String, dynamic> messageData) async {
    final senderId = messageData['sender_id'];
    final text = messageData['text'] ?? '';

    // Don't show notification if user is actively chatting with this person
    if (activeChatFriendId == senderId) {
      print(
          '[NotificationService] User is in active chat, skipping notification');
      return;
    }

    // Show notification on supported platforms
    if (!kIsWeb) {
      await _showMessageNotification(senderId, text);
      await _updateBadgeCount();
    }
  }

  static Future<void> _showMessageNotification(
      String senderId, String text) async {
    try {
      final senderName = await _getSenderName(senderId);

      final androidDetails = AndroidNotificationDetails(
        'messages_channel',
        'Messages',
        channelDescription: 'New message notifications',
        importance: Importance.high,
        priority: Priority.high,
        showWhen: true,
        icon: '@mipmap/ic_launcher',
        largeIcon: DrawableResourceAndroidBitmap('@mipmap/ic_launcher'),
      );

      final iosDetails = DarwinNotificationDetails(
        presentAlert: true,
        presentBadge: true,
        presentSound: true,
      );

      final macDetails = DarwinNotificationDetails(
        presentAlert: true,
        presentBadge: true,
        presentSound: true,
      );

      final linuxDetails = LinuxNotificationDetails(
        defaultActionName: 'Open',
      );

      final details = NotificationDetails(
        android: androidDetails,
        iOS: iosDetails,
        macOS: macDetails,
        linux: linuxDetails,
      );

      await _notifications.show(
        senderId.hashCode, // Use sender ID as notification ID
        senderName,
        text.length > 100 ? '${text.substring(0, 97)}...' : text,
        details,
        payload: 'message:$senderId',
      );

      print(
          '[NotificationService] Notification shown for message from $senderName');
    } catch (e) {
      print('[NotificationService] Error showing notification: $e');
    }
  }

  static Future<String> _getSenderName(String senderId) async {
    if (_senderNameCache.containsKey(senderId)) {
      return _senderNameCache[senderId]!;
    }
    try {
      final user = await _apiService.getUserDetails(senderId);
      final name = user?.name ?? 'Unknown User';
      _senderNameCache[senderId] = name;
      return name;
    } catch (e) {
      print('[NotificationService] Error getting sender name: $e');
      return 'Unknown User';
    }
  }

  static Future<void> _updateBadgeCount() async {
    if (_currentUserId == null || kIsWeb) return;
    try {
      final unreadCount =
          await _apiService.getUnreadMessageCount(_currentUserId!);
      // Android: handled by notification count, iOS/macOS: setBadgeCount
      final iosPlugin = _notifications.resolvePlatformSpecificImplementation<
          IOSFlutterLocalNotificationsPlugin>();
      if (iosPlugin != null) {
        // await iosPlugin.setBadgeCount(unreadCount);
      }
      final macPlugin = _notifications.resolvePlatformSpecificImplementation<
          MacOSFlutterLocalNotificationsPlugin>();
      if (macPlugin != null) {
        // await macPlugin.setBadgeCount(unreadCount);
      }
      print('[NotificationService] Updated badge count: $unreadCount');
    } catch (e) {
      print('[NotificationService] Error updating badge count: $e');
    }
  }

  static void _onNotificationTapped(NotificationResponse response) {
    final payload = response.payload;
    if (payload != null && payload.startsWith('message:')) {
      final senderId = payload.substring(8);
      print('[NotificationService] Notification tapped for sender: $senderId');
      // Navigation logic here if needed
    }
  }

  static void _startHeartbeat() {
    _heartbeatTimer?.cancel();
    _heartbeatTimer = Timer.periodic(const Duration(seconds: 30), (timer) {
      if (_socket?.connected == true) {
        _socket!.emit('heartbeat', {'user_id': _currentUserId});
      } else {
        print(
            '[NotificationService] Socket disconnected, attempting reconnection...');
        _initializeSocket();
      }
    });
  }

  static Future<void> updateUserId(String? userId) async {
    if (_currentUserId != userId) {
      if (_socket?.connected == true && _currentUserId != null) {
        _socket!.emit('leave', _currentUserId);
      }

      _currentUserId = userId;
      if (userId != null) {
        await _initializeSocket();
        if (_socket?.connected == true) {
          _socket!.emit('join', userId);
        }
      } else {
        _socket?.disconnect();
        _heartbeatTimer?.cancel();
      }
    }
  }

  static Future<void> clearAllNotifications() async {
    if (!kIsWeb) {
      await _notifications.cancelAll();
      final iosPlugin = _notifications.resolvePlatformSpecificImplementation<
          IOSFlutterLocalNotificationsPlugin>();
      if (iosPlugin != null) {
        // await iosPlugin.setBadgeCount(0);
      }
      final macPlugin = _notifications.resolvePlatformSpecificImplementation<
          MacOSFlutterLocalNotificationsPlugin>();
      if (macPlugin != null) {
        // await macPlugin.setBadgeCount(0);
      }
    }
  }

  static Future<void> clearNotificationsForSender(String senderId) async {
    if (!kIsWeb) {
      await _notifications.cancel(senderId.hashCode);
    }
  }

  static void dispose() {
    _socket?.disconnect();
    _heartbeatTimer?.cancel();
    _isInitialized = false;
    activeChatFriendId = null;
    print('[NotificationService] Disposed');
  }

  static Future<void> refreshConnection() async {
    if (_currentUserId != null) {
      _socket?.disconnect();
      await Future.delayed(const Duration(milliseconds: 500));
      await _initializeSocket();
    }
  }

  static bool get isConnected => _socket?.connected == true;

  static String get connectionStatus {
    if (_socket == null) return 'Not initialized';
    if (_socket!.connected) return 'Connected';
    if (_socket!.disconnected) return 'Disconnected';
    return 'Connecting...';
  }
}
