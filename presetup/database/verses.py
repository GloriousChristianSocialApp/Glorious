import requests
from bs4 import BeautifulSoup
import pymongo
from pymongo import MongoClient
import time
import re
import html
from datetime import datetime

# MongoDB Atlas connection
# Replace with your MongoDB Atlas connection string
MONGODB_URI = "mongodb+srv://gloriouschristiansocialapp_db_user:7vdcKalZTPodbXWq@maingloriouscluster.nkix6yw.mongodb.net/?appName=MainGloriousCluster"
client = MongoClient(MONGODB_URI)
db = client.Bible

# Collections
testaments_collection = db.testaments
books_collection = db.books
verses_collection = db.verses

# Function to insert a new testament if it doesn't exist
def insert_testament(testament_name):
    existing = testaments_collection.find_one({"name": testament_name})
    if not existing:
        testament_doc = {
            "name": testament_name,
            "created_at": datetime.utcnow()
        }
        result = testaments_collection.insert_one(testament_doc)
        return result.inserted_id
    return existing["_id"]

# Function to insert a new book if it doesn't exist
def insert_book(book_name, testament_id, chapters):
    existing = books_collection.find_one({"name": book_name, "testament_id": testament_id})
    if not existing:
        book_doc = {
            "testament_id": testament_id,
            "name": book_name,
            "chapters": chapters,
            "created_at": datetime.utcnow()
        }
        result = books_collection.insert_one(book_doc)
        return result.inserted_id
    return existing["_id"]

# Function to insert verses into the database
def insert_verse(book_id, chapter, verse_number, text):
    verse_doc = {
        "book_id": book_id,
        "chapter": chapter,
        "verse_number": verse_number,
        "text": text,
        "created_at": datetime.utcnow()
    }
    verses_collection.insert_one(verse_doc)

# Function to clean up the verse text (remove unwanted content and verse numbers)
def clean_verse_text(verse_text):
    # First decode any HTML entities
    verse_text = html.unescape(verse_text)
    
    # Remove any content in square brackets
    verse_text = re.sub(r"\[.*?\]", "", verse_text)
    
    # Remove reference markers like (A), (B), etc.
    verse_text = re.sub(r'\([A-Z]+\)', '', verse_text)
    
    # Remove verse numbers at start (e.g., "1 ", "2-3 ")
    verse_text = re.sub(r'^\d+(?:-\d+)?\s+', '', verse_text)
    
    # Remove single letters at start followed by words
    verse_text = re.sub(r'^[A-Z]\s+(?=[A-Z][a-z])', '', verse_text)
    
    # Fix missing spaces after periods
    verse_text = re.sub(r'\.(?=[A-Z])', '. ', verse_text)
    
    # Comprehensive quote fixing
    quote_pairs = [
        ('?', '"'),      # Question mark quotes
        ('"', '"'),      # Smart quotes
        ('"', '"'),      # Other smart quotes
        ('″', '"'),      # Double prime
        ('′', '"'),      # Prime
        (''', "'"),      # Smart single quotes
        (''', "'"),      # Other smart single quotes
        ('‟', '"'),      # Double reversed quotation mark
        ('„', '"'),      # Double low quotation mark
        ('「', '"'),     # CJK quotes
        ('」', '"'),     # CJK quotes
    ]
    
    for old, new in quote_pairs:
        verse_text = verse_text.replace(old, new)
    
    # Fix specific patterns of quotes
    verse_text = re.sub(r'\?([^?]+)\?', r'"\1"', verse_text)
    
    # Remove navigation text and headers
    nav_headers = ['Read the Bible', 'Study Tools', 'Bible Gateway Plus', 'Explore More', 'Store']
    for header in nav_headers:
        verse_text = verse_text.replace(header, '')
    
    # Strip and normalize spaces
    verse_text = ' '.join(verse_text.split())
    
    return verse_text.strip()

# Function to scrape Bible data for a specific book and chapter
def scrape_bible_book(book_name, testament_id, start_chapter, end_chapter):
    # Get book document
    book_doc = books_collection.find_one({"name": book_name, "testament_id": testament_id})
    if not book_doc:
        print(f"Book {book_name} not found in database")
        return
    
    book_id = book_doc["_id"]
    
    for chapter in range(start_chapter, end_chapter + 1):
        print(f"Scraping {book_name} Chapter {chapter}...")
        
        # Check if chapter already exists to avoid duplicates
        existing_verses = verses_collection.count_documents({
            "book_id": book_id,
            "chapter": chapter
        })
        
        if existing_verses > 0:
            print(f"Chapter {chapter} already exists, skipping...")
            continue
            
        # Changed version from GNT to NIV
        url = f"https://www.biblegateway.com/passage/?search={book_name}+{chapter}&version=NIV"
        
        try:
            response = requests.get(url, timeout=30)
            response.raise_for_status()
        except requests.RequestException as e:
            print(f"Error fetching {url}: {e}")
            continue
            
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find the main passage container
        passage = soup.find('div', class_='passage-text')
        if not passage:
            print(f"No passage found for {book_name} Chapter {chapter}")
            continue
            
        # Find all verse elements, excluding chapter headers
        verses = passage.find_all('span', class_='text')
        verse_number = 1
        verses_inserted = 0
        
        for verse in verses:
            verse_text = verse.get_text().strip()
            
            # Skip known headers and short texts
            if len(verse_text) < 5 or any(header in verse_text for header in [
                'Chapter', 'Book', 'Testament', 'Read the Bible', 'Study Tools',
                'Bible Gateway Plus', 'Explore More', 'Store', 'Footnotes'
            ]):
                continue
            
            clean_text = clean_verse_text(verse_text)
            
            # Skip if cleaned text is too short or appears to be a header
            if len(clean_text) < 5 or clean_text.isupper() or clean_text.startswith('Chapter'):
                continue
            
            # Insert verse
            insert_verse(book_id, chapter, verse_number, clean_text)
            verse_number += 1
            verses_inserted += 1
            
        print(f"Inserted {verses_inserted} verses for {book_name} Chapter {chapter}")
        time.sleep(2)  # Increased delay to be more respectful to the server

# Function to create indexes for better performance
def create_indexes():
    print("Creating database indexes...")
    
    # Index for testaments
    testaments_collection.create_index("name", unique=True)
    
    # Indexes for books
    books_collection.create_index([("name", 1), ("testament_id", 1)], unique=True)
    books_collection.create_index("testament_id")
    
    # Indexes for verses
    verses_collection.create_index([("book_id", 1), ("chapter", 1), ("verse_number", 1)], unique=True)
    verses_collection.create_index("book_id")
    verses_collection.create_index([("book_id", 1), ("chapter", 1)])
    
    # Text index for searching verse content
    verses_collection.create_index([("text", "text")])
    
    print("Indexes created successfully!")

def main():
    try:
        print("Starting Bible scraping process...")
        
        # Create indexes for better performance
        create_indexes()
        
        # Insert testaments and get their IDs
        old_testament_id = insert_testament("Old Testament")
        new_testament_id = insert_testament("New Testament")
        
        # List of books in the Old Testament with chapters count
        old_testament_books = [
            ("Genesis", 50), ("Exodus", 40), ("Leviticus", 27), ("Numbers", 36), ("Deuteronomy", 34),
            ("Joshua", 24), ("Judges", 21), ("Ruth", 4), ("1 Samuel", 31), ("2 Samuel", 24),
            ("1 Kings", 22), ("2 Kings", 25), ("1 Chronicles", 29), ("2 Chronicles", 36), ("Ezra", 10),
            ("Nehemiah", 13), ("Esther", 10), ("Job", 42), ("Psalms", 150), ("Proverbs", 31),
            ("Ecclesiastes", 12), ("Song of Solomon", 8), ("Isaiah", 66), ("Jeremiah", 52), ("Lamentations", 5),
            ("Ezekiel", 48), ("Daniel", 12), ("Hosea", 14), ("Joel", 3), ("Amos", 9),
            ("Obadiah", 1), ("Jonah", 4), ("Micah", 7), ("Nahum", 3), ("Habakkuk", 3),
            ("Zephaniah", 3), ("Haggai", 2), ("Zechariah", 14), ("Malachi", 4)
        ]
        
        print("Processing Old Testament books...")
        # Scrape the Old Testament books
        for book, chapters in old_testament_books:
            print(f"Processing book: {book}")
            insert_book(book, old_testament_id, chapters)
            scrape_bible_book(book, old_testament_id, 1, chapters)
        
        # List of books in the New Testament with chapters count
        new_testament_books = [
            ("Matthew", 28), ("Mark", 16), ("Luke", 24), ("John", 21), ("Acts", 28),
            ("Romans", 16), ("1 Corinthians", 16), ("2 Corinthians", 13), ("Galatians", 6), ("Ephesians", 6),
            ("Philippians", 4), ("Colossians", 4), ("1 Thessalonians", 5), ("2 Thessalonians", 3), ("1 Timothy", 6),
            ("2 Timothy", 4), ("Titus", 3), ("Philemon", 1), ("Hebrews", 13), ("James", 5),
            ("1 Peter", 5), ("2 Peter", 3), ("1 John", 5), ("2 John", 1), ("3 John", 1),
            ("Jude", 1), ("Revelation", 22)
        ]
        
        print("Processing New Testament books...")
        # Scrape the New Testament books
        for book, chapters in new_testament_books:
            print(f"Processing book: {book}")
            insert_book(book, new_testament_id, chapters)
            scrape_bible_book(book, new_testament_id, 1, chapters)
        
        print("Bible scraping completed successfully!")
        
        # Print summary statistics
        print("\nDatabase Summary:")
        print(f"Testaments: {testaments_collection.count_documents({})}")
        print(f"Books: {books_collection.count_documents({})}")
        print(f"Verses: {verses_collection.count_documents({})}")
        
    except Exception as e:
        print(f"Error during scraping: {e}")
    finally:
        # Close the connection
        client.close()
        print("Database connection closed.")

if __name__ == "__main__":
    main()

