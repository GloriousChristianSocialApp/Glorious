class FriendRequest {
  final String id;
  final String fromUserId;
  final String fromUserName;
  final String fromUserProfileImage;
  final String toUserId;
  final String toUserName;
  final String toUserProfileImage;
  final DateTime createdAt;
  final FriendRequestStatus status;

  FriendRequest({
    required this.id,
    required this.fromUserId,
    required this.fromUserName,
    required this.fromUserProfileImage,
    required this.toUserId,
    required this.toUserName,
    required this.toUserProfileImage,
    required this.createdAt,
    required this.status,
  });

  factory FriendRequest.fromJson(Map<String, dynamic> json) {
    return FriendRequest(
      id: json['_id'],
      fromUserId: json['fromUserId'],
      fromUserName: json['fromUserName'] ?? '',
      fromUserProfileImage: json['fromUserProfileImage'] ?? '',
      toUserId: json['toUserId'],
      toUserName: json['toUserName'] ?? '',
      toUserProfileImage: json['toUserProfileImage'] ?? '',
      createdAt: DateTime.parse(json['timestamp']),
      status: FriendRequestStatus.values.byName(json['status']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'fromUserId': fromUserId,
      'fromUserName': fromUserName,
      'fromUserProfileImage': fromUserProfileImage,
      'toUserId': toUserId,
      'toUserName': toUserName,
      'toUserProfileImage': toUserProfileImage,
      'createdAt': createdAt.toIso8601String(),
      'status': status.name,
    };
  }
}

enum FriendRequestStatus { pending, accepted, declined }