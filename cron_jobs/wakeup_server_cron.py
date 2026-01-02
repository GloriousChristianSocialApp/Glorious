# cron_ping.py
import time
import requests

BACKEND_URL = "https://glorious-server.onrender.com"
INTERVAL_MINUTES = 14  # every 14 minutes

def ping_server():
    try:
        response = requests.get(BACKEND_URL)
        if response.ok:
            print(f"Server ping successful! Status: {response.status_code}")
        else:
            print(f"Server ping failed! Status: {response.status_code}")
    except Exception as e:
        print(f"Error pinging server: {e}")

def main():
    print("Starting server ping job...")
    while True:
        ping_server()
        time.sleep(INTERVAL_MINUTES * 60)

if __name__ == "__main__":
    main()
