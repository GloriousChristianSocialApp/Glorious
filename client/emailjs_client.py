import os
import requests


################for  local test ##################
from dotenv import load_dotenv
load_dotenv()
######################################################

def send_email_emailjs(target_username, recipient_email, otp):
    EMAILJS_SERVICE_ID = os.environ.get("EMAILJS_SERVICE_ID")
    EMAILJS_TEMPLATE_ID = os.environ.get("EMAILJS_TEMPLATE_ID")
    EMAILJS_USER_ID = os.environ.get("EMAILJS_USER_ID")  # public key
    EMAILJS_API_URL = os.environ.get("EMAILJS_API_URL")
    

    payload = {
        "service_id": EMAILJS_SERVICE_ID,
        "template_id": EMAILJS_TEMPLATE_ID,
        "user_id": EMAILJS_USER_ID,
        "template_params": {
            "username": target_username,
            "otp": otp,
            "to_email": recipient_email  # this matches the sidebar "To Email" field
        }
    }

    response = requests.post(EMAILJS_API_URL, json=payload)
    if response.status_code == 200:
        print("✅ Email sent via EmailJS")
    else:
        print("❌ Failed to send:", response.text)
        response.raise_for_status()

