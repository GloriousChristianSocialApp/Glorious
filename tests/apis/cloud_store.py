import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
import os

# Configuration       
cloudinary.config( 
    cloud_name = os.environ.get("CLOUDINARY_CLOUD_NAME"), 
    api_key = os.environ.get("CLOUDINARY_API_KEY"),
    api_secret = os.environ.get("CLOUDINARY_API_SECRET"),
    secure=True
)

# Upload an image
upload_result = cloudinary.uploader.upload(r"C:\Users\kenka\Downloads\download.jpg",
                                           public_id="default_pfp",)

print(upload_result["secure_url"])

