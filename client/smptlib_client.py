
EMAIL = "gloriouschristiansocialapp@gmail.com"
APP_PASSWORD = "nzku nwrh rhzi fcsq"


import smtplib
import os
from email.message import EmailMessage


def send_email(targrt_username ,recipient, otp):
    # Configuration
    SMTP_SERVER = os.environ.get("SMTP_SERVER")
    SMTP_PORT = os.environ.get("SMTP_PORT")
    SENDER_EMAIL = os.environ.get("SMTP_EMAIL")
    SENDER_PASSWORD = os.environ.get("SMTP_PASSWORD")


    msg = EmailMessage()
    msg["Subject"] = "Password Reset Token"
    msg["From"] = SENDER_EMAIL
    msg["To"] = recipient

    # HTML content with styling
    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <p>We have been notified of a request to change your <b>Glorious Account : {targrt_username}</b> password.</p>
            <p>Your six-digit code is:</p>
            <h2 style="color: #1a73e8; font-size: 24px;">{otp}</h2>
            <p>This code <b>expires in 1 hour</b>.</p>
            <p>If you did not request this, you can reply with <i>'not me'</i> for security follow-up.</p>
            <br>
            <p>Best regards,<br><b>GloriousChristianSocialApp</b></p>
        </body>
    </html>
    """

    # Add HTML alternative
    msg.add_alternative(html_content, subtype="html")

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        server.quit()

send_email("kenkaroki92@gmail.com" ,"6D7r80")