import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:Follower/services/api_service.dart'; // 👈 import ApiService

class ChatService {
  IO.Socket? socket;
  final ApiService apiService;

  ChatService(this.apiService);

  void connect(String userId) {
    socket = IO.io(
      ApiService.baseUrl,
      IO.OptionBuilder()
          .setTransports(['websocket'])
          .disableAutoConnect()
          .build(),
    );

    socket!.connect();

    socket!.onConnect((_) {
      socket!.emit('user_connected', {'user_id': userId});
    });
  }

  void sendSocketMessage({
    required String senderId,
    required String recipientId,
    required String text,
  }) {
    socket?.emit('send_message', {
      'sender_id': senderId,
      'recipient_id': recipientId,
      'text': text,
    });
  }

  void onMessage(Function(Map<String, dynamic>) callback) {
    socket?.on('receive_message', (data) {
      callback(Map<String, dynamic>.from(data));
    });
  }

  /// 👇 USE ApiService for fetching messages
  Future<List<dynamic>> fetchMessages(
    String user1Id,
    String user2Id,
  ) async {
    return await apiService.getMessages(user1Id, user2Id);
  }

  void disconnect() {
    socket?.disconnect();
    socket?.dispose();
  }
}
