from pymongo import MongoClient
import os
import cloudinary
from dotenv import load_dotenv
load_dotenv()
# Load environment variables
MONGO_URI = os.environ.get("MONGO_URI", "mongodb://localhost:27017")
CLOUD_NAME = os.environ.get("CLOUDINARY_CLOUD_NAME")
API_KEY = os.environ.get("CLOUDINARY_API_KEY")
API_SECRET = os.environ.get("CLOUDINARY_API_SECRET")


# Initialize MongoDB client (the cluster/connection)
client = MongoClient(MONGO_URI)



glorious_db = client["Gloriousdatabase"]
bible_db = client["Bible"]
otp_db = client["OTP"]

# Backwards‑compatibility: some modules use client.Gloriousdatabase / client.Bible / client.OTP
setattr(client, "Gloriousdatabase", glorious_db)
setattr(client, "Bible", bible_db)
setattr(client , "OTP" , otp_db)

# Export a convenient 'db' variable (code in repo imports `db` from client.mongo_client)
db = glorious_db
bibledb = bible_db
OTPdb = otp_db

# Collections in the 'glorify' database
users_collection = glorious_db.users
friend_requests_collection = glorious_db.requests
posts_collection = glorious_db.posts
notes_collection = glorious_db.notes
notifications_collection = glorious_db.notifications
messages_collection = glorious_db.messages
likes_collection = glorious_db.likes
comments_collection = glorious_db.comments

glorify_collection = glorious_db.glorify
OTP_collection = OTPdb.OTPS

# Initialize Cloudinary if env vars provided
if CLOUD_NAME and API_KEY and API_SECRET:
    cloudinary.config(
        cloud_name=CLOUD_NAME,
        api_key=API_KEY,
        api_secret=API_SECRET
    )
# Otherwise calls to cloudinary will fail later; keep explicit for debugging