from pymongo import MongoClient
import os
import cloudinary

# Load environment variables
MONGO_URI = os.environ.get("MONGO_URI", "mongodb://localhost:27017")
CLOUD_NAME = os.environ.get("CLOUDINARY_CLOUD_NAME")
API_KEY = os.environ.get("CLOUDINARY_API_KEY")
API_SECRET = os.environ.get("CLOUDINARY_API_SECRET")


# Initialize MongoDB client (the cluster/connection)
client = MongoClient(MONGO_URI)



follower_db = client["Gloriousdatabase"]
bible_db = client["Bible"]
otp_db = client["OTP"]

# Backwards‑compatibility: some modules use client.Gloriousdatabase / client.Bible / client.OTP
setattr(client, "Gloriousdatabase", follower_db)
setattr(client, "Bible", bible_db)
setattr(client , "OTP" , otp_db)

# Export a convenient 'db' variable (code in repo imports `db` from client.mongo_client)
db = follower_db
bibledb = bible_db
OTPdb = otp_db

# Collections in the 'glorify' database
users_collection = follower_db.users
friend_requests_collection = follower_db.requests
posts_collection = follower_db.posts
notes_collection = follower_db.notes
notifications_collection = follower_db.notifications
messages_collection = follower_db.messages
likes_collection = follower_db.likes
comments_collection = follower_db.comments

glorify_collection = follower_db.glorify
OTP_collection = OTPdb.OTPS

# Initialize Cloudinary if env vars provided
if CLOUD_NAME and API_KEY and API_SECRET:
    cloudinary.config(
        cloud_name=CLOUD_NAME,
        api_key=API_KEY,
        api_secret=API_SECRET
    )
# Otherwise calls to cloudinary will fail later; keep explicit for debugging