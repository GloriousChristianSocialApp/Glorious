class Post {
  final String id;
  final String userId;
  final String userName;
  final String userProfileImage;
  final String content;
  final String? mediaUrl; // NEW
  final String? mediaType; // image | video
  final DateTime createdAt;
  final int likesCount;
  final int commentsCount;
  final bool isLiked;
  final String? verseReference;

  Post({
    required this.id,
    required this.userId,
    required this.userName,
    required this.userProfileImage,
    required this.content,
    this.mediaUrl,
    this.mediaType,
    required this.createdAt,
    this.likesCount = 0,
    this.commentsCount = 0,
    this.isLiked = false,
    this.verseReference,
  });

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['_id'] ?? json['id'],
      userId: json['userId'],
      userName: json['userName'],
      userProfileImage: json['userProfileImage'],
      content: json['content'],
      mediaUrl: json['mediaUrl'],
      mediaType: json['mediaType'],
      createdAt: DateTime.parse(json['createdAt']),
      likesCount: json['likesCount'] ?? 0,
      commentsCount: json['commentsCount'] ?? 0,
      isLiked: json['isLiked'] ?? false,
      verseReference: json['verseReference'],
    );
  }

  /// OLD POSTS STILL WORK
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'userId': userId,
      'userName': userName,
      'userProfileImage': userProfileImage,
      'content': content,
      'createdAt': createdAt.toIso8601String(),
      'verseReference': verseReference,
    };
  }

  /// NEW — MEDIA POSTS
  Map<String, dynamic> toJsonWithMedia() {
    return {
      'userId': userId,
      'userName': userName,
      'userProfileImage': userProfileImage,
      'content': content,
      'mediaUrl': mediaUrl,
      'mediaType': mediaType,
      'createdAt': createdAt.toIso8601String(),
      'verseReference': verseReference,
    };
  }
}
