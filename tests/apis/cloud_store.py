import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

# Configuration       
cloudinary.config( 
    cloud_name = "dkj0tdmls", 
    api_key = "528981413981581", 
    api_secret = "EaAIUU3M4ZZF2YwWoniZUNppvxQ",
    secure=True
)

# Upload an image
upload_result = cloudinary.uploader.upload(r"C:\Users\kenka\Downloads\download.jpg",
                                           public_id="default_pfp",)

print(upload_result["secure_url"])

