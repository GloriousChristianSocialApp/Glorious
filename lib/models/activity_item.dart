// models/activity_item.dart
class ActivityItem {
  final ActivityType type;
  final String title;
  final String subtitle;
  final DateTime timestamp;

  ActivityItem({
    required this.type,
    required this.title,
    required this.subtitle,
    required this.timestamp,
  });

  factory ActivityItem.fromJson(Map<String, dynamic> json) {
    return ActivityItem(
      type: _parseActivityTypeFromString(json['type'] ?? 'noteCreated'),
      title: json['title'] ?? 'Activity',
      subtitle: json['subtitle'] ?? '',
      timestamp: _parseTimestamp(json['timestamp']),
    );
  }

  static ActivityType _parseActivityTypeFromString(String type) {
    switch (type.toLowerCase()) {
      case 'notecreated':
        return ActivityType.noteCreated;
      case 'postcreated':
        return ActivityType.postCreated;
      case 'postliked':
        return ActivityType.postLiked;
      case 'friendadded':
        return ActivityType.friendAdded;
      default:
        return ActivityType.noteCreated; // Default fallback
    }
  }

  static DateTime _parseTimestamp(dynamic timestamp) {
    if (timestamp is DateTime) {
      return timestamp;
    } else if (timestamp is String) {
      try {
        return DateTime.parse(timestamp);
      } catch (e) {
        print('Error parsing timestamp: $timestamp - $e');
        return DateTime.now();
      }
    } else {
      print('Unexpected timestamp type: ${timestamp.runtimeType}');
      return DateTime.now();
    }
  }

  Map<String, dynamic> toJson() {
    return {
      'type': type.toString().split('.').last,
      'title': title,
      'subtitle': subtitle,
      'timestamp': timestamp.toIso8601String(),
    };
  }

  @override
  String toString() {
    return 'ActivityItem(type: $type, title: $title, subtitle: $subtitle, timestamp: $timestamp)';
  }
}

enum ActivityType {
  noteCreated,
  postCreated,
  postLiked,
  friendAdded,
}
