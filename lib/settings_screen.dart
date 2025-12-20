import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _isDarkMode = false;
  bool _notificationsEnabled = true;
  bool _friendRequestsEnabled = true;
  bool _dailyVerseEnabled = true;
  String _selectedFontSize = 'Medium';
  
  final List<String> _fontSizes = ['Small', 'Medium', 'Large'];

  @override
  void initState() {
    super.initState();
    _loadSettings();
  }

  Future<void> _loadSettings() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _isDarkMode = prefs.getBool('dark_mode') ?? false;
      _notificationsEnabled = prefs.getBool('notifications_enabled') ?? true;
      _friendRequestsEnabled = prefs.getBool('friend_requests_enabled') ?? true;
      _dailyVerseEnabled = prefs.getBool('daily_verse_enabled') ?? true;
      _selectedFontSize = prefs.getString('font_size') ?? 'Medium';
    });
  }

  Future<void> _saveSetting(String key, dynamic value) async {
    final prefs = await SharedPreferences.getInstance();
    if (value is bool) {
      await prefs.setBool(key, value);
    } else if (value is String) {
      await prefs.setString(key, value);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Settings',
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        iconTheme: const IconThemeData(color: Colors.white),
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // Theme Section
          _buildSectionHeader('Theme & Display'),
          _buildSettingsTile(
            icon: Icons.dark_mode,
            title: 'Dark Mode',
            subtitle: 'Use dark theme for better night reading',
            trailing: Switch(
              value: _isDarkMode,
              onChanged: (value) {
                setState(() {
                  _isDarkMode = value;
                });
                _saveSetting('dark_mode', value);
              },
            ),
          ),
          _buildSettingsTile(
            icon: Icons.text_fields,
            title: 'Font Size',
            subtitle: 'Adjust text size for better readability',
            trailing: DropdownButton<String>(
              value: _selectedFontSize,
              items: _fontSizes.map((size) {
                return DropdownMenuItem(
                  value: size,
                  child: Text(size),
                );
              }).toList(),
              onChanged: (value) {
                if (value != null) {
                  setState(() {
                    _selectedFontSize = value;
                  });
                  _saveSetting('font_size', value);
                }
              },
            ),
          ),
          
          const SizedBox(height: 24),
          
          // Notifications Section
          _buildSectionHeader('Notifications'),
          _buildSettingsTile(
            icon: Icons.notifications,
            title: 'Push Notifications',
            subtitle: 'Receive updates about posts and activities',
            trailing: Switch(
              value: _notificationsEnabled,
              onChanged: (value) {
                setState(() {
                  _notificationsEnabled = value;
                });
                _saveSetting('notifications_enabled', value);
              },
            ),
          ),
          _buildSettingsTile(
            icon: Icons.person_add_alt,
            title: 'Friend Requests',
            subtitle: 'Get notified when someone sends you a friend request',
            trailing: Switch(
              value: _friendRequestsEnabled,
              onChanged: (value) {
                setState(() {
                  _friendRequestsEnabled = value;
                });
                _saveSetting('friend_requests_enabled', value);
              },
            ),
          ),
          _buildSettingsTile(
            icon: Icons.menu_book,
            title: 'Daily Verse',
            subtitle: 'Receive daily Bible verse notifications',
            trailing: Switch(
              value: _dailyVerseEnabled,
              onChanged: (value) {
                setState(() {
                  _dailyVerseEnabled = value;
                });
                _saveSetting('daily_verse_enabled', value);
              },
            ),
          ),
          
          const SizedBox(height: 24),
          
          // Privacy Section
          _buildSectionHeader('Privacy & Security'),
          _buildSettingsTile(
            icon: Icons.privacy_tip,
            title: 'Privacy Settings',
            subtitle: 'Manage your privacy preferences',
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Privacy settings coming soon!'),
                  behavior: SnackBarBehavior.floating,
                ),
              );
            },
          ),
          _buildSettingsTile(
            icon: Icons.block,
            title: 'Blocked Users',
            subtitle: 'Manage blocked users',
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Blocked users feature coming soon!'),
                  behavior: SnackBarBehavior.floating,
                ),
              );
            },
          ),
          
          const SizedBox(height: 24),
          
          // Support Section
          _buildSectionHeader('Support & About'),
          _buildSettingsTile(
            icon: Icons.help,
            title: 'Help & Support',
            subtitle: 'Get help and contact support',
            onTap: () {
              _showHelpDialog();
            },
          ),
          _buildSettingsTile(
            icon: Icons.feedback,
            title: 'Send Feedback',
            subtitle: 'Share your thoughts and suggestions',
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Feedback feature coming soon!'),
                  behavior: SnackBarBehavior.floating,
                ),
              );
            },
          ),
          _buildSettingsTile(
            icon: Icons.info,
            title: 'About',
            subtitle: 'App version and information',
            onTap: () {
              showAboutDialog(
                context: context,
                applicationName: 'Church Community App',
                applicationVersion: '1.0.0',
                applicationIcon: Icon(
                  Icons.church,
                  size: 48,
                  color: Theme.of(context).colorScheme.primary,
                ),
                children: [
                  const Text(
                    'A community app for believers to connect, share, and grow together in faith.nn'
                    'Features include Bible reading, note-taking, community posts, and friendship connections.',
                  ),
                ],
              );
            },
          ),
          
          const SizedBox(height: 24),
          
          // Danger Zone
          _buildSectionHeader('Account'),
          _buildSettingsTile(
            icon: Icons.logout,
            title: 'Sign Out',
            subtitle: 'Sign out of your account',
            titleColor: Theme.of(context).colorScheme.error,
            onTap: () {
              _showSignOutDialog();
            },
          ),
          
          const SizedBox(height: 40),
        ],
      ),
    );
  }

  Widget _buildSectionHeader(String title) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12, top: 8),
      child: Text(
        title,
        style: Theme.of(context).textTheme.titleMedium?.copyWith(
          fontWeight: FontWeight.bold,
          color: Theme.of(context).colorScheme.primary,
        ),
      ),
    );
  }

  Widget _buildSettingsTile({
    required IconData icon,
    required String title,
    required String subtitle,
    Widget? trailing,
    VoidCallback? onTap,
    Color? titleColor,
  }) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      child: ListTile(
        leading: Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.primaryContainer.withValues(alpha: 0.3),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Icon(
            icon,
            color: titleColor ?? Theme.of(context).colorScheme.primary,
            size: 20,
          ),
        ),
        title: Text(
          title,
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(
            fontWeight: FontWeight.w600,
            color: titleColor,
          ),
        ),
        subtitle: Text(
          subtitle,
          style: Theme.of(context).textTheme.bodySmall?.copyWith(
            color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.7),
          ),
        ),
        trailing: trailing,
        onTap: onTap,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        tileColor: Theme.of(context).colorScheme.surface,
      ),
    );
  }

  void _showHelpDialog() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Help & Support'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Need help? Here are some resources:'),
            const SizedBox(height: 16),
            _buildHelpItem('📖', 'User Guide', 'Learn how to use all features'),
            const SizedBox(height: 8),
            _buildHelpItem('💬', 'Community Forum', 'Connect with other users'),
            const SizedBox(height: 8),
            _buildHelpItem('📧', 'Contact Support', 'support @churchapp.com'),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  Widget _buildHelpItem(String emoji, String title, String subtitle) {
    return Row(
      children: [
        Text(emoji, style: const TextStyle(fontSize: 20)),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(fontWeight: FontWeight.w600),
              ),
              Text(
                subtitle,
                style: TextStyle(
                  fontSize: 12,
                  color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.7),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  void _showSignOutDialog() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Sign Out'),
        content: const Text('Are you sure you want to sign out of your account?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Sign out feature coming soon!'),
                  behavior: SnackBarBehavior.floating,
                ),
              );
            },
            child: Text(
              'Sign Out',
              style: TextStyle(color: Theme.of(context).colorScheme.error),
            ),
          ),
        ],
      ),
    );
  }
}