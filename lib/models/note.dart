class Note {
  final String id;
  final String title;
  final String content;
  final String userId;
  final DateTime createdAt;
  final DateTime? updatedAt;
  final String? verseReference;
  final List<String> tags;

  Note({
    required this.id,
    required this.title,
    required this.content,
    required this.userId,
    required this.createdAt,
    this.updatedAt,
    this.verseReference,
    this.tags = const [],
  });

  factory Note.fromJson(Map<String, dynamic> json) {
    return Note(
      id: json['id'],
      title: json['title'],
      content: json['content'],
      userId: json['userId'],
      createdAt: DateTime.parse(json['createdAt']),
      updatedAt: json['updatedAt'] != null 
          ? DateTime.parse(json['updatedAt']) 
          : null,
      verseReference: json['verseReference'],
      tags: List<String>.from(json['tags'] ?? []),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'content': content,
      'userId': userId,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
      'verseReference': verseReference,
      'tags': tags,
    };
  }
}