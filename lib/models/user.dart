class User {
  final String id;
  final String name;
  final String email;
  final String profileImage;
  final DateTime joinDate;
  final List<String> friendIds;
  final int postsCount;
  final int notesCount;
  final bool hasUnreadMessages;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.profileImage,
    required this.joinDate,
    this.friendIds = const [],
    this.postsCount = 0,
    this.notesCount = 0,
    this.hasUnreadMessages = false,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      // Handle both 'id' and '_id' from different endpoints
      id: json['id'] ?? json['_id'] ?? '',
      // Handle both 'name' and 'username' from different endpoints
      name: json['name'] ?? json['username'] ?? '',
      email: json['email'] ?? '',
      profileImage: json['profileImage'] ?? '',
      joinDate: json['joinDate'] != null
          ? DateTime.parse(json['joinDate'])
          : DateTime.now(),
      friendIds:
          json['friendIds'] != null ? List<String>.from(json['friendIds']) : [],
      postsCount: json['postsCount'] ?? 0,
      notesCount: json['notesCount'] ?? 0,
      hasUnreadMessages: json['hasUnreadMessages'] ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'profileImage': profileImage,
      'joinDate': joinDate.toIso8601String(),
      'friendIds': friendIds,
      'postsCount': postsCount,
      'notesCount': notesCount,
      'hasUnreadMessages': hasUnreadMessages,
    };
  }
}
