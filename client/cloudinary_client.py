import os
import cloudinary

cloud_name=CLOUD_NAME = os.environ.get("CLOUDINARY_CLOUD_NAME")
api_key=API_KEY = os.environ.get("CLOUDINARY_API_KEY")
api_secret=API_SECRET = os.environ.get("CLOUDINARY_API_SECRET"),


def config_cloudinary():
    cloudinary.config( 
        cloud_name = cloud_name, 
        api_key = api_key, 
        api_secret = api_secret,
        secure=True
    )