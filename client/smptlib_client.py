import smtplib
import os
from email.message import EmailMessage

################for  local test ##################
from dotenv import load_dotenv
load_dotenv()
######################################################


def send_email(target_username, recipient, otp):
    SMTP_SERVER = os.environ.get("SMTP_SERVER")
    SMTP_PORT = int(os.environ.get("SMTP_PORT", 465))
    SENDER_EMAIL = os.environ.get("SMTP_EMAIL")
    SENDER_PASSWORD = os.environ.get("SMTP_PASSWORD")

    if not all([SMTP_SERVER, SMTP_PORT, SENDER_EMAIL, SENDER_PASSWORD]):
        raise RuntimeError("SMTP environment variables are missing")

    msg = EmailMessage()
    msg["Subject"] = "Password Reset Token"
    msg["From"] = SENDER_EMAIL
    msg["To"] = recipient

    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <p>We have been notified of a request to change your
               <b>Glorious Account : {target_username}</b> password.</p>
            <p>Your six-digit code is:</p>
            <h2 style="color: #1a73e8;">{otp}</h2>
            <p>This code <b>expires in 1 hour</b>.</p>
            <br>
            <p>Best regards,<br><b>GloriousChristianSocialApp</b></p>
        </body>
    </html>
    """

    msg.add_alternative(html_content, subtype="html")

    server = None
    try:
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, timeout=15)
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        print("✅ Email sent successfully")

    except Exception as e:
        print(f"❌ Email error: {e}")
        raise

    finally:
        if server:
            server.quit()


send_email("ken" , "kenkaroki17@gmail.com", 358796)