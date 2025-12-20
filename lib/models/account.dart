class Account {
  
  final List<String> friendIds;
  final String id;
  final String joinDate;
  final String name;
  final int notesCount;
  final int postsCount;
  final String profileImage;

  Account({
    required this.friendIds,
    required this.id,
    required this.joinDate,
    required this.name,
    required this.notesCount,
    required this.postsCount,
    required this.profileImage,
  });

  factory Account.fromJson(Map<String, dynamic> json) {
    return Account(
      
      friendIds: List<String>.from(json['friendIds'] ?? []),
      id: json['id'] ?? '',
      joinDate: json['joinDate'] ?? '',
      name: json['name'] ?? '',
      notesCount: json['notesCount'] ?? 0,
      postsCount: json['postsCount'] ?? 0,
      profileImage: json['profileImage'] ?? '',
    );
  }
}
