
import 'package:flutter/material.dart' hide Notification;
import 'package:Follower/models/notification.dart';
import 'package:Follower/services/api_service.dart';

class NotificationScreen extends StatefulWidget {
  const NotificationScreen({super.key});

  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  final ApiService _apiService = ApiService();
  List<Notification> _notifications = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadNotifications();
  }

  Future<void> _loadNotifications() async {
    setState(() => _isLoading = true);
    try {
      final userId = await _apiService.getUserId();
      if (userId == null) {
        // Handle user not logged in
        return;
      }
      final notifications = await _apiService.getNotifications(userId);
      setState(() {
        _notifications = notifications;
      });
    } catch (e) {
      // Handle error
    } finally {
      setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Notifications'),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _notifications.isEmpty
              ? const Center(
                  child: Text('No notifications'),
                )
              : ListView.builder(
                  itemCount: _notifications.length,
                  itemBuilder: (context, index) {
                    final notification = _notifications[index];
                    return ListTile(
                      leading: Icon(
                        notification.isRead
                            ? Icons.mark_email_read
                            : Icons.mark_email_unread,
                        color: notification.isRead
                            ? Colors.grey
                            : Theme.of(context).primaryColor,
                      ),
                      title: Text(notification.title),
                      subtitle: Text(notification.message),
                      trailing: Text(
                        '${notification.timestamp.day}/${notification.timestamp.month}/${notification.timestamp.year}',
                      ),
                      onTap: () {
                        if (!notification.isRead) {
                          _markAsRead(notification);
                        }
                      },
                    );
                  },
                ),
    );
  }

  Future<void> _markAsRead(Notification notification) async {
    try {
      await _apiService.markNotificationAsRead(notification.id);
      setState(() {
        notification.isRead = true;
      });
    } catch (e) {
      // Handle error
    }
  }
}
