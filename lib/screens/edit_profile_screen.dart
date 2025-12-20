
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:image_picker/image_picker.dart';
import 'package:dio/dio.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:io'; // Keep this for FileImage on non-web
import 'dart:typed_data'; // For Uint8List

class EditProfileScreen extends StatefulWidget {
  const EditProfileScreen({super.key});

  @override
  _EditProfileScreenState createState() => _EditProfileScreenState();
}

class _EditProfileScreenState extends State<EditProfileScreen> {
  final TextEditingController _usernameController = TextEditingController();
  File? _profileImageFile; // For non-web platforms
  Uint8List? _profileImageBytes; // For web platform
  String? _currentProfileImageUrl; // To store the current profile image URL
  final Dio _dio = Dio();
  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    _loadCurrentProfile();
  }

  Future<void> _loadCurrentProfile() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _usernameController.text = prefs.getString('user_name') ?? '';
      _currentProfileImageUrl = prefs.getString('user_profile_image');
    });
  }

  Future<void> _pickImage() async {
    final pickedFile = await ImagePicker().pickImage(source: ImageSource.gallery);
    if (pickedFile != null) {
      if (kIsWeb) {
        final bytes = await pickedFile.readAsBytes();
        setState(() {
          _profileImageBytes = bytes;
          _profileImageFile = null;
        });
      } else {
        setState(() {
          _profileImageFile = File(pickedFile.path);
          _profileImageBytes = null;
        });
      }
    }
  }

  Future<void> _updateProfile() async {
    setState(() {
      _isLoading = true;
    });

    try {
      final prefs = await SharedPreferences.getInstance();
      final userId = prefs.getString('user_id');

      if (userId == null) {
        // Handle user not logged in
        return;
      }

      FormData formData = FormData.fromMap({
        'user_id': userId,
        'username': _usernameController.text,
      });

      if (_profileImageFile != null) {
        formData.files.add(MapEntry(
          'profile_picture',
          await MultipartFile.fromFile(_profileImageFile!.path),
        ));
      } else if (_profileImageBytes != null) {
        formData.files.add(MapEntry(
          'profile_picture',
          MultipartFile.fromBytes(_profileImageBytes!, filename: 'profile_pic.png'),
        ));
      }

      final response = await _dio.post(
        'http://127.0.0.1:5000/update-profile',
        data: formData,
      );

      if (response.statusCode == 200) {
        final responseData = response.data;
        final user = responseData['user'];
        final profileImage = user['profileImage'];
        if (profileImage != null) {
          final prefs = await SharedPreferences.getInstance();
          await prefs.setString('user_profile_image', profileImage);
        }

        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Profile updated successfully')),
        );
        Navigator.of(context).pop();
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Failed to update profile')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('An error occurred: $e')),
      );
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Edit Profile'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Change Profile Picture Section
            Card(
              margin: const EdgeInsets.only(bottom: 16.0),
              elevation: 4,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Change Profile Picture',
                      style: Theme.of(context).textTheme.headlineSmall,
                    ),
                    SizedBox(height: 16),
                    Center(
                      child: GestureDetector(
                        onTap: _pickImage,
                        child: CircleAvatar(
                          radius: 60,
                          backgroundImage: _profileImageFile != null
                              ? FileImage(_profileImageFile!)
                              : (_profileImageBytes != null
                                  ? MemoryImage(_profileImageBytes!)
                                  : (_currentProfileImageUrl != null
                                      ? NetworkImage(_currentProfileImageUrl!)
                                      : null)),
                          child: _profileImageFile == null &&
                                  _profileImageBytes == null &&
                                  _currentProfileImageUrl == null
                              ? Icon(Icons.camera_alt, size: 60) : null,
                        ),
                      ),
                    ),
                    SizedBox(height: 16),
                    Center(
                      child: ElevatedButton.icon(
                        onPressed: _pickImage,
                        icon: Icon(Icons.photo_library),
                        label: Text('Select New Image'),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // Change Username Section
            Card(
              margin: const EdgeInsets.only(bottom: 16.0),
              elevation: 4,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Change Username',
                      style: Theme.of(context).textTheme.headlineSmall,
                    ),
                    SizedBox(height: 16),
                    TextField(
                      controller: _usernameController,
                      decoration: InputDecoration(
                        labelText: 'Username',
                        border: OutlineInputBorder(),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            SizedBox(height: 20),
            Center(
              child: _isLoading
                  ? CircularProgressIndicator()
                  : ElevatedButton(
                      onPressed: _updateProfile,
                      style: ElevatedButton.styleFrom(
                        padding: EdgeInsets.symmetric(horizontal: 40, vertical: 15),
                        textStyle: TextStyle(fontSize: 18),
                      ),
                      child: Text('Save Changes'),
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
