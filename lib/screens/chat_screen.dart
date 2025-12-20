import 'package:Glorious/models/user.dart';
import 'package:Glorious/services/api_service.dart';
import 'package:flutter/material.dart';
import 'package:flutter_chat_ui/flutter_chat_ui.dart';
import 'package:flutter_chat_types/flutter_chat_types.dart' as types;
import 'package:intl/intl.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:Glorious/services/notification_service.dart';

class ChatScreen extends StatefulWidget {
  final User friend;
  const ChatScreen({super.key, required this.friend});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> with WidgetsBindingObserver {
  final List<types.Message> _messages = [];
  types.User _user = types.User(id: '');
  final ApiService _apiService = ApiService();
  IO.Socket? _socket;
  bool _isConnected = false;
  bool _isLoading = true;
  bool _friendOnline = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _loadCurrentUser();
    NotificationService.activeChatFriendId = widget.friend.id;
    _checkFriendOnline();
  }

  Future<void> _checkFriendOnline() async {
    final online = await _apiService.isUserOnline(widget.friend.id);
    setState(() {
      _friendOnline = online;
    });
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    if (_socket != null && _socket!.connected) {
      _socket!.disconnect();
    }
    NotificationService.activeChatFriendId = null;
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);

    if (state == AppLifecycleState.resumed) {
      if (_socket == null || !_socket!.connected && _user.id.isNotEmpty) {
        _initSocket();
      }
      _loadMessages();
      _checkFriendOnline();
    }
  }

  Future<void> _loadCurrentUser() async {
    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getString('user_id');
    final userName = prefs.getString('user_name') ?? 'You';

    setState(() {
      _user = types.User(
        id: userId ?? '',
        firstName: userName,
      );
    });

    if (_user.id.isNotEmpty) {
      _initSocket();
      await _loadMessages();
      await _checkFriendOnline();
    }
  }

  Future<void> _loadMessages() async {
    if (_user.id.isEmpty) return;

    try {
      final messages =
          await _apiService.getMessages(_user.id, widget.friend.id);
      final loadedMessages = messages.map((message) {
        return types.TextMessage(
          author: types.User(
            id: message['sender_id'],
            firstName: message['sender_id'] == _user.id
                ? _user.firstName
                : widget.friend.name,
          ),
          createdAt: _parseTimestamp(message['timestamp']),
          id: message['_id'] ?? '',
          text: message['text'],
          status: message['read'] == true
              ? types.Status.seen
              : types.Status.delivered,
        );
      }).toList();

      setState(() {
        _messages.clear();
        _messages.addAll(loadedMessages.reversed);
        _isLoading = false;
      });

      await _apiService.markMessagesRead(widget.friend.id, _user.id);
    } catch (e) {
      setState(() {
        _isLoading = false;
      });
    }
  }

  int _parseTimestamp(dynamic timestamp) {
    try {
      if (timestamp is String) {
        try {
          final dateTime = DateTime.parse(timestamp);
          return dateTime.toLocal().millisecondsSinceEpoch;
        } catch (e) {
          try {
            final dateTime = DateFormat("yyyy-MM-ddTHH:mm:ss")
                .parse(timestamp, true)
                .toLocal();
            return dateTime.millisecondsSinceEpoch;
          } catch (e) {
            return DateTime.now().millisecondsSinceEpoch;
          }
        }
      } else if (timestamp is Map && timestamp.containsKey('\$date')) {
        return DateTime.parse(timestamp['\$date']).millisecondsSinceEpoch;
      } else {
        return DateTime.now().millisecondsSinceEpoch;
      }
    } catch (e) {
      return DateTime.now().millisecondsSinceEpoch;
    }
  }

  void _initSocket() {
    if (_socket != null && _socket!.connected) {
      _socket!.disconnect();
    }

    final wsUrl = ApiService.baseUrl;
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
      setState(() {
        _isConnected = true;
      });

      if (_user.id.isNotEmpty) {
        _socket!.emit('join', _user.id);
      }
      _checkFriendOnline();
    });

    _socket!.onDisconnect((_) {
      setState(() {
        _isConnected = false;
      });
      _checkFriendOnline();
    });

    _socket!.onConnectError((data) {
      setState(() {
        _isConnected = false;
      });
      _checkFriendOnline();
    });

    _socket!.onError((data) {});

    _socket!.on('new_message', (data) {
      final isMine = data['sender_id'] == _user.id;
      final msg = types.TextMessage(
        author: types.User(
          id: data['sender_id'],
          firstName: isMine ? _user.firstName : widget.friend.name,
        ),
        createdAt: _parseTimestamp(data['timestamp']),
        id: data['_id'] ?? '',
        text: data['text'],
        status:
            data['read'] == true ? types.Status.seen : types.Status.delivered,
      );

      setState(() {
        final tempIndex = isMine
            ? _messages.indexWhere((m) =>
                m is types.TextMessage &&
                m.text == msg.text &&
                m.author.id == _user.id &&
                m.status == types.Status.sending)
            : -1;

        if (tempIndex != -1) {
          // Replace temp with real
          _messages[tempIndex] = msg;
        } else if (!_messages.any((m) => m.id == msg.id)) {
          // Prevent duplicates
          _messages.insert(0, msg);
        }
      });
      if (!isMine && mounted) {
        _apiService.markMessagesRead(widget.friend.id, _user.id);
      }
    });

    _socket!.on('message_sent', (data) {
      _updateMessageStatus(data['_id'], types.Status.delivered);
    });

    _socket!.on('messages_read', (data) {
      if (data['reader_id'] == widget.friend.id) {
        _markMessagesAsSeen();
      }
    });

    _socket!.on('joined', (data) {});
    _socket!.onAny((event, data) {});
  }

  void _updateMessageStatus(String messageId, types.Status status) {
    setState(() {
      final index = _messages.indexWhere((msg) => msg.id == messageId);
      if (index != -1) {
        final message = _messages[index];
        if (message is types.TextMessage) {
          _messages[index] = message.copyWith(status: status);
        }
      }
    });
  }

  void _markMessagesAsSeen() {
    setState(() {
      for (int i = 0; i < _messages.length; i++) {
        final message = _messages[i];
        if (message.author.id == _user.id && message is types.TextMessage) {
          _messages[i] = message.copyWith(status: types.Status.seen);
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            CircleAvatar(
              radius: 16,
              backgroundImage: widget.friend.profileImage.isNotEmpty
                  ? NetworkImage(widget.friend.profileImage)
                  : null,
              child: widget.friend.profileImage.isEmpty
                  ? Text(
                      widget.friend.name.isNotEmpty
                          ? widget.friend.name[0].toUpperCase()
                          : '?',
                      style: const TextStyle(fontSize: 14),
                    )
                  : null,
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    widget.friend.name,
                    style: const TextStyle(fontSize: 16),
                  ),
                  Text(
                    _friendOnline ? 'Online' : 'Offline',
                    style: TextStyle(
                      fontSize: 12,
                      color: _friendOnline ? Colors.green : Colors.grey,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
        actions: [
          if (_friendOnline)
            const Icon(Icons.circle, color: Colors.green, size: 12)
          else
            const Icon(Icons.circle, color: Colors.red, size: 12),
          const SizedBox(width: 16),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : SafeArea(
              child: Chat(
                messages: _messages,
                onSendPressed: _handleSendPressed,
                user: _user,
                showUserAvatars: true,
                showUserNames: false,
                theme: DefaultChatTheme(
                  primaryColor: Colors.purple,
                  sentMessageBodyTextStyle:
                      const TextStyle(color: Colors.white),
                  receivedMessageBodyTextStyle:
                      const TextStyle(color: Colors.black),
                  backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                  inputBackgroundColor: Colors.grey[200]!,
                  inputTextColor: Colors.black,
                  inputBorderRadius: BorderRadius.circular(24),
                  inputPadding:
                      const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
                  inputMargin: const EdgeInsets.all(8),
                ),
              ),
            ),
    );
  }

  void _handleSendPressed(types.PartialText message) async {
    if (!_isConnected) return;

    final tempId = UniqueKey().toString();
    final tempMessage = types.TextMessage(
      author: _user,
      createdAt: DateTime.now().millisecondsSinceEpoch,
      id: tempId,
      text: message.text,
      status: types.Status.sending,
    );
    setState(() {
      _messages.insert(0, tempMessage);
    });

    try {
      await _apiService.sendMessage(_user.id, widget.friend.id, message.text);
      // Do NOT remove temp message here! It will be replaced in the socket handler.
    } catch (e) {
      // Optionally show error to user
    }
  }
}
