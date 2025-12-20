import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:file_picker/file_picker.dart';
import 'package:Glorious/services/api_service.dart';


class CreatePostScreen extends StatefulWidget {
  const CreatePostScreen({super.key});

  @override
  State<CreatePostScreen> createState() => _CreatePostScreenState();
}

class _CreatePostScreenState extends State<CreatePostScreen> {
  final TextEditingController _textController = TextEditingController();
  File? pickedImage; // mobile
  Uint8List? webImage; // web
  String? webImageName;
  bool _isPosting = false;

  final ApiService apiService = ApiService();

  Future<void> pickImage() async {
    if (kIsWeb) {
      // Web: File picker
      FilePickerResult? result = await FilePicker.platform.pickFiles(
        type: FileType.image,
        withData: true,
      );
      if (result != null) {
        setState(() {
          webImage = result.files.first.bytes;
          webImageName = result.files.first.name;
        });
      }
    } else {
      // Mobile: Image picker
      final ImagePicker picker = ImagePicker();
      final XFile? image = await picker.pickImage(source: ImageSource.gallery);
      if (image != null) {
        setState(() {
          pickedImage = File(image.path);
        });
      }
    }
  }

  Widget displayImage() {
    if (kIsWeb && webImage != null) {
      return Container(
        width: double.infinity,
        height: 300,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Colors.grey.shade300),
        ),
        clipBehavior: Clip.antiAlias,
        child: Stack(
          fit: StackFit.expand,
          children: [
            Image.memory(webImage!, fit: BoxFit.cover),
            Positioned(
              top: 8,
              right: 8,
              child: IconButton(
                icon: const Icon(Icons.close, color: Colors.white),
                style: IconButton.styleFrom(
                  backgroundColor: Colors.black54,
                ),
                onPressed: () {
                  setState(() {
                    webImage = null;
                    webImageName = null;
                  });
                },
              ),
            ),
          ],
        ),
      );
    } else if (!kIsWeb && pickedImage != null) {
      return Container(
        width: double.infinity,
        height: 300,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Colors.grey.shade300),
        ),
        clipBehavior: Clip.antiAlias,
        child: Stack(
          fit: StackFit.expand,
          children: [
            Image.file(pickedImage!, fit: BoxFit.cover),
            Positioned(
              top: 8,
              right: 8,
              child: IconButton(
                icon: const Icon(Icons.close, color: Colors.white),
                style: IconButton.styleFrom(
                  backgroundColor: Colors.black54,
                ),
                onPressed: () {
                  setState(() {
                    pickedImage = null;
                  });
                },
              ),
            ),
          ],
        ),
      );
    } else {
      return const SizedBox.shrink();
    }
  }

  Future<void> createPost() async {
    final content = _textController.text.trim();
    if (content.isEmpty && pickedImage == null && webImage == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please add some content or an image')),
      );
      return;
    }

    setState(() {
      _isPosting = true;
    });

    try {
      Uint8List? mediaBytes;
      String? mediaFileName;

      if (kIsWeb && webImage != null) {
        mediaBytes = webImage;
        mediaFileName = webImageName;
      } else if (!kIsWeb && pickedImage != null) {
        mediaBytes = await pickedImage!.readAsBytes();
        mediaFileName = pickedImage!.path.split('/').last;
      }

      await apiService.createPostWithMedia(
        content: content,
        mediaBytes: mediaBytes,
        mediaFileName: mediaFileName,
        mediaType: mediaBytes != null ? 'image' : null,
      );

      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Post created successfully!')),
        );
        Navigator.pop(context, true);
      }
    } catch (e) {
      print('Error creating post: $e');
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Failed to create post: $e')),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _isPosting = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Create Post'),
        actions: [
          if (_isPosting)
            const Padding(
              padding: EdgeInsets.all(16.0),
              child: SizedBox(
                width: 24,
                height: 24,
                child: CircularProgressIndicator(strokeWidth: 2),
              ),
            )
          else
            TextButton.icon(
              icon: const Icon(Icons.send),
              label: const Text('Post'),
              onPressed: createPost,
            ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextField(
                controller: _textController,
                maxLines: null,
                minLines: 3,
                decoration: InputDecoration(
                  hintText: 'What\'s on your mind?',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  contentPadding: const EdgeInsets.all(16),
                ),
              ),
              const SizedBox(height: 16),
              displayImage(),
              if (pickedImage == null && webImage == null) ...[
                const SizedBox(height: 16),
                Center(
                  child: OutlinedButton.icon(
                    icon: const Icon(Icons.image, size: 28),
                    label: const Text(
                      'Add Photo',
                      style: TextStyle(fontSize: 16),
                    ),
                    onPressed: pickImage,
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 32,
                        vertical: 16,
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                  ),
                ),
              ],
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _textController.dispose();
    super.dispose();
  }
}
