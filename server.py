##################### necessary for deployment DO NOT REMOVE #############################################
import eventlet
eventlet.monkey_patch()
###########################################################################################################


from flask import Flask, jsonify, request
from flask_socketio import SocketIO, emit
from pymongo.errors import ConnectionFailure
from flask_cors import CORS
import logging

from api.items import items_bp
from api.auth import auth_bp
from api.bible import bible_bp
from api.friends import friends_bp
from api.notes import notes_bp
from api.chat import chat_bp, set_socketio
from api.feed import feed_bp
from api.notifications import notifications_bp
from api.passwordreset import passreset_bp
from client.mongo_client import client

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

socketio = SocketIO(
    app, 
    cors_allowed_origins="*",
    logger=True,
    engineio_logger=True,
    ping_timeout=60,
    ping_interval=25,
    transports=['websocket', 'polling']
)

set_socketio(socketio)

app.register_blueprint(items_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(bible_bp)
app.register_blueprint(friends_bp)
app.register_blueprint(notes_bp)
app.register_blueprint(chat_bp)
app.register_blueprint(feed_bp)
app.register_blueprint(notifications_bp) 
app.register_blueprint(passreset_bp)

@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to the cu_app API server!",
        "status": "running",
        "endpoints": {
            "auth": "/login, /register",
            "chat": "/send_message, /get_messages, /mark_messages_read",
            "friends": "/friends, /friend-requests",
            "notes": "/notes",
            "bible": "/verses"
        }
    })

@app.route('/test_db')
def test_db_connection():
    try:
        client.admin.command('ismaster')
        return jsonify({"status": "success", "message": "Successfully connected to MongoDB!"})
    except ConnectionFailure as e:
        return jsonify({"status": "error", "message": f"Could not connect to MongoDB: {e}"}), 500

@app.route('/health')
def health_check():
    try:
        client.admin.command('ismaster')
        db_status = "connected"
    except:
        db_status = "disconnected"
    
    return jsonify({
        "status": "healthy",
        "database": db_status,
        "server": "running"
    })

@socketio.on('connect')
def handle_connect():
    logger.info(f"[SocketIO] Client connected: {request.sid if hasattr(request, 'sid') else 'unknown'}")
    emit('connection_response', {'status': 'connected'})

@socketio.on('disconnect')
def handle_disconnect():
    logger.info(f"[SocketIO] Client disconnected: {request.sid if hasattr(request, 'sid') else 'unknown'}")

@socketio.on('error')
def handle_error(error):
    logger.error(f"[SocketIO] Error occurred: {error}")

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "status": "error",
        "message": "Endpoint not found",
        "code": 404
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "status": "error", 
        "message": "Internal server error",
        "code": 500
    }), 500

@app.errorhandler(400)
def bad_request(error):
    return jsonify({
        "status": "error",
        "message": "Bad request",
        "code": 400
    }), 400

if __name__ == '__main__':
    logger.info("Starting cu_app server...")
    logger.info("Server will be available at: http://0.0.0.0:5000")
    logger.info("WebSocket endpoint: ws://0.0.0.0:5000")
    
    socketio.run(
        app, 
        debug=True, 
        host='0.0.0.0', 
        port=5000,
        use_reloader=False,
        log_output=True
    )
