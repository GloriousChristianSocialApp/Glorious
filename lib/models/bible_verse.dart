class BibleVerse {
  final String book;
  final int chapter;
  final int verse;
  final String text;

  BibleVerse({
    required this.book,
    required this.chapter,
    required this.verse,
    required this.text,
  });

  factory BibleVerse.fromJson(Map<String, dynamic> json) {
    return BibleVerse(
      book: json['book'],
      chapter: json['chapter'],
      verse: json['verse'],
      text: json['text'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'book': book,
      'chapter': chapter,
      'verse': verse,
      'text': text,
    };
  }
}

class BibleChapter {
  final String book;
  final int chapter;
  final List<BibleVerse> verses;

  BibleChapter({
    required this.book,
    required this.chapter,
    required this.verses,
  });

  factory BibleChapter.fromJson(Map<String, dynamic> json) {
    return BibleChapter(
      book: json['book'],
      chapter: json['chapter'],
      verses: (json['verses'] as List)
          .map((verse) => BibleVerse.fromJson(verse))
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'book': book,
      'chapter': chapter,
      'verses': verses.map((verse) => verse.toJson()).toList(),
    };
  }
}