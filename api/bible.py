from flask import Blueprint, jsonify
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from typing import List, Dict, Any, Optional
import logging
from client.mongo_client import bibledb as db

bible_bp = Blueprint('bible', __name__)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Routes
@bible_bp.route('/books', methods=['GET'])
def get_books():
    return jsonify(get_books_by_testament()), 200

@bible_bp.route('/verses/<book>/<int:chapter>', methods=['GET'])
def get_chapter_verses(book, chapter):
    return jsonify(get_verses(book, chapter)), 200

@bible_bp.route('/verse/<book>/<int:chapter>/<int:verse>', methods=['GET'])
def get_single_verse_route(book, chapter, verse):
    verse_data = get_single_verse(book, chapter, verse)
    return jsonify(verse_data), 200 if verse_data else (jsonify({"error": "Not found"}), 404)

# Helpers
def get_books_by_testament() -> List[Dict[str, Any]]:
    """Get all books organized by testament"""
    try:
        db_conn = db
        if db_conn is None:
            return []
            
        books = list(db_conn.books.find().sort([("testament_order", 1), ("book_order", 1)]))
        
        formatted_books = []
        for book in books:
            formatted_books.append({
                'id': str(book.get('_id', '')),
                'name': book.get('name', ''),
                'chapters': book.get('chapters', 0),
                'testament': book.get('testament', '')
            })
        return formatted_books
    except Exception as e:
        logger.error(f'Error getting books: {e}')
        return []

def get_verses(book_name: str, chapter: int) -> Dict[str, Any]:
    """Get all verses for a specific book and chapter"""
    try:
        db_conn = db
        if db_conn is None:
            return {"book": book_name, "chapter": chapter, "verses": []}

        pipeline = [
            {
                "$lookup": {
                    "from": "books",
                    "localField": "book_id",
                    "foreignField": "_id",
                    "as": "book"
                }
            },
            {"$unwind": "$book"},
            {
                "$match": {
                    "book.name": book_name,
                    "chapter": chapter
                }
            },
            {"$sort": {"verse_number": 1}}
        ]

        verses = list(db_conn.verses.aggregate(pipeline))

        formatted_verses = []
        for verse in verses:
            formatted_verses.append({
                "verse": verse.get("verse_number", 0),
                "text": verse.get("text", ""),
                "book": verse["book"].get("name", ""),
                "chapter": verse.get("chapter", 0)
            })

        return {
            "book": book_name,
            "chapter": chapter,
            "verses": formatted_verses
        }

    except Exception as e:
        logger.error(f"Error getting verses: {e}")
        return {"book": book_name, "chapter": chapter, "verses": []}

def get_single_verse(book_name: str, chapter: int, verse_number: int) -> Optional[Dict[str, Any]]:
    """Get a single verse by book, chapter, and verse number"""
    try:
        db_conn = db
        if db_conn is None:
            return None

        pipeline = [
            {
                "$lookup": {
                    "from": "books",
                    "localField": "book_id",
                    "foreignField": "_id",
                    "as": "book"
                }
            },
            {"$unwind": "$book"},
            {
                "$match": {
                    "book.name": book_name,
                    "chapter": chapter,
                    "verse_number": verse_number
                }
            },
            {"$limit": 1}
        ]

        verse = list(db_conn.verses.aggregate(pipeline))
        if verse:
            v = verse[0]
            return {
                "verse": v.get("verse_number", 0),
                "text": v.get("text", ""),
                "book": v["book"].get("name", ""),
                "chapter": v.get("chapter", 0)
            }
        return None
    except Exception as e:
        logger.error(f"Error getting single verse: {e}")
        return None
