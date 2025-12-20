import 'package:flutter/material.dart';
import '../services/api_service.dart';
// ignore: unused_import
import '../models/account.dart' deferred as account_model;
// ignore: unused_import
import '../models/activity_item.dart' deferred as activity_model;
import '../screens/settings_screen.dart' deferred as settings;
import 'package:Glorious/screens/edit_profile_screen.dart'
    deferred as edit_profile;
import 'package:Glorious/screens/notification_screen.dart'
    deferred as notifications;

class AccountScreen extends StatefulWidget {
  const AccountScreen({super.key});

  @override
  State<AccountScreen> createState() => _AccountScreenState();
}

class _AccountScreenState extends State<AccountScreen>
    with TickerProviderStateMixin {
  bool _isLoading = true;
  dynamic _account; // Changed from Account? to dynamic
  String? _errorMessage;
  List<dynamic> _recentActivity =
      []; // Changed from List<ActivityItem> to List<dynamic>
  bool _activityLoading = true;

  late AnimationController _fadeController;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();
    _fadeController = AnimationController(
      duration: const Duration(milliseconds: 600),
      vsync: this,
    );
    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _fadeController, curve: Curves.easeInOut),
    );
    _loadDeferredLibraries();
  }

  Future<void> _loadDeferredLibraries() async {
    try {
      await account_model.loadLibrary();
      await activity_model.loadLibrary();
      _fetchAccountDetails();
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _errorMessage = 'Failed to load required resources: $e';
        _isLoading = false;
      });
    }
  }

  @override
  void dispose() {
    _fadeController.dispose();
    super.dispose();
  }

  Future<void> _fetchAccountDetails() async {
    try {
      final useridRaw = await ApiService().getUserId();
      String userID = useridRaw.toString();
      final account = await ApiService().getAccountDetails(userID);
      if (!mounted) return;
      setState(() {
        _account = account;
        _isLoading = false;
      });
      _fadeController.forward();

      // Load user activity after account details are loaded
      _loadUserActivity();
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _errorMessage = e.toString();
        _isLoading = false;
      });
    }
  }

  Future<void> _loadUserActivity() async {
    try {
      if (_account != null) {
        final activity = await ApiService().getUserActivity(_account!.id);
        if (!mounted) return;
        setState(() {
          _recentActivity = activity;
          _activityLoading = false;
        });
      }
    } catch (e) {
      print('Error loading user activity: $e');
      if (!mounted) return;
      setState(() {
        _activityLoading = false;
      });
    }
  }

  Future<void> _navigateToSettings() async {
    await settings.loadLibrary();
    if (!mounted) return;
    Navigator.push(
      context,
      PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) =>
            settings.SettingsScreen(),
        transitionDuration: const Duration(milliseconds: 300),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return SlideTransition(
            position: Tween<Offset>(
              begin: const Offset(1.0, 0.0),
              end: Offset.zero,
            ).animate(animation),
            child: child,
          );
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return Scaffold(
        appBar: AppBar(
          title: const Row(
            children: [
              Icon(Icons.person, color: Colors.white),
              SizedBox(width: 8),
              Text(
                'My Account',
                style:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
            ],
          ),
          backgroundColor: Theme.of(context).colorScheme.primary,
        ),
        body: const Center(
          child: CircularProgressIndicator(),
        ),
      );
    }

    if (_errorMessage != null) {
      return Scaffold(
        appBar: AppBar(
          title: const Row(
            children: [
              Icon(Icons.person, color: Colors.white),
              SizedBox(width: 8),
              Text(
                'My Account',
                style:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
            ],
          ),
          backgroundColor: Theme.of(context).colorScheme.primary,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.error_outline,
                size: 64,
                color: Theme.of(context).colorScheme.error,
              ),
              const SizedBox(height: 16),
              Text(
                'Error loading account',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 8),
              Text(
                _errorMessage!,
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: Theme.of(context)
                          .colorScheme
                          .onSurface
                          .withOpacity(0.7),
                    ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 24),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    _isLoading = true;
                    _errorMessage = null;
                  });
                  _loadDeferredLibraries();
                },
                child: const Text('Retry'),
              ),
            ],
          ),
        ),
      );
    }

    if (_account == null) {
      return Scaffold(
        appBar: AppBar(
          title: const Row(
            children: [
              Icon(Icons.person, color: Colors.white),
              SizedBox(width: 8),
              Text(
                'My Account',
                style:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
            ],
          ),
          backgroundColor: Theme.of(context).colorScheme.primary,
        ),
        body: const Center(
          child: Text('No account data found'),
        ),
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Row(
          children: [
            Icon(Icons.person, color: Colors.white),
            SizedBox(width: 8),
            Text(
              'My Account',
              style:
                  TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
            ),
          ],
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        actions: [
          IconButton(
            icon: const Icon(Icons.settings, color: Colors.white),
            onPressed: _navigateToSettings,
          ),
        ],
      ),
      body: FadeTransition(
        opacity: _fadeAnimation,
        child: SingleChildScrollView(
          child: Column(
            children: [
              // Profile Header
              Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      Theme.of(context).colorScheme.primary,
                      Theme.of(context).colorScheme.primaryContainer,
                    ],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                ),
                child: Column(
                  children: [
                    CircleAvatar(
                      radius: 50,
                      backgroundImage: NetworkImage(_account!
                              .profileImage.isNotEmpty
                          ? _account!.profileImage
                          : 'https://res.cloudinary.com/do6w3vaa8/image/upload/v1755286483/default_profle_image.jpg'),
                      backgroundColor: Theme.of(context).colorScheme.surface,
                    ),
                    const SizedBox(height: 16),
                    Text(
                      _account!.name.isNotEmpty
                          ? _account!.name
                          : 'Unknown User',
                      style:
                          Theme.of(context).textTheme.headlineSmall?.copyWith(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                              ),
                    ),
                    const SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 12, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.2),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        'Member since ${_formatJoinDate(_parseDate(_account!.joinDate))}',
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: Colors.white,
                            ),
                      ),
                    ),
                  ],
                ),
              ),

              // Stats Cards
              Padding(
                padding: const EdgeInsets.all(16),
                child: Row(
                  children: [
                    Expanded(
                      child: _buildStatCard(
                        context,
                        'Posts',
                        _account!.postsCount.toString(),
                        Icons.article,
                        Theme.of(context).colorScheme.primary,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _buildStatCard(
                        context,
                        'Notes',
                        _account!.notesCount.toString(),
                        Icons.note,
                        Theme.of(context).colorScheme.secondary,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _buildStatCard(
                        context,
                        'Friends',
                        _account!.friendIds.length.toString(),
                        Icons.people,
                        Theme.of(context).colorScheme.tertiary,
                      ),
                    ),
                  ],
                ),
              ),

              // Recent Activity
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Icon(
                          Icons.history,
                          color: Theme.of(context).colorScheme.primary,
                        ),
                        const SizedBox(width: 8),
                        Text(
                          'Recent Activity',
                          style:
                              Theme.of(context).textTheme.titleLarge?.copyWith(
                                    fontWeight: FontWeight.bold,
                                  ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    if (_activityLoading)
                      Center(
                        child: Padding(
                          padding: const EdgeInsets.all(32),
                          child: CircularProgressIndicator(
                            color: Theme.of(context).colorScheme.primary,
                          ),
                        ),
                      )
                    else if (_recentActivity.isEmpty)
                      Container(
                        padding: const EdgeInsets.all(24),
                        decoration: BoxDecoration(
                          color: Theme.of(context).colorScheme.surface,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: Theme.of(context)
                                .colorScheme
                                .outline
                                .withOpacity(0.2),
                          ),
                        ),
                        child: Column(
                          children: [
                            Icon(
                              Icons.history,
                              size: 48,
                              color: Theme.of(context)
                                  .colorScheme
                                  .onSurface
                                  .withOpacity(0.5),
                            ),
                            const SizedBox(height: 12),
                            Text(
                              'No recent activity',
                              style: Theme.of(context)
                                  .textTheme
                                  .titleMedium
                                  ?.copyWith(
                                    color: Theme.of(context)
                                        .colorScheme
                                        .onSurface
                                        .withOpacity(0.7),
                                  ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              'Start creating notes and posts to see your activity here',
                              style: Theme.of(context)
                                  .textTheme
                                  .bodySmall
                                  ?.copyWith(
                                    color: Theme.of(context)
                                        .colorScheme
                                        .onSurface
                                        .withOpacity(0.5),
                                  ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        ),
                      )
                    else
                      ...List.generate(
                        _recentActivity.length,
                        (index) =>
                            _buildActivityItem(context, _recentActivity[index]),
                      ),
                  ],
                ),
              ),

              // Quick Actions
              Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Quick Actions',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            fontWeight: FontWeight.bold,
                          ),
                    ),
                    const SizedBox(height: 16),
                    GridView.count(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      crossAxisCount: 2,
                      crossAxisSpacing: 12,
                      mainAxisSpacing: 12,
                      childAspectRatio: 1.5,
                      children: [
                        _buildQuickActionCard(
                          context,
                          'Edit Profile',
                          Icons.edit,
                          () async {
                            await edit_profile.loadLibrary();
                            if (!mounted) return;
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) =>
                                    edit_profile.EditProfileScreen(),
                              ),
                            );
                          },
                        ),
                        _buildQuickActionCard(
                          context,
                          'Notifications',
                          Icons.notifications,
                          () async {
                            await notifications.loadLibrary();
                            if (!mounted) return;
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) =>
                                    notifications.NotificationScreen(),
                              ),
                            );
                          },
                        ),
                        _buildQuickActionCard(
                          context,
                          'Privacy',
                          Icons.privacy_tip,
                          () => _privacySettings(),
                        ),
                        _buildQuickActionCard(
                          context,
                          'Help & Support',
                          Icons.help,
                          () => _helpSupport(),
                        ),
                        _buildQuickActionCard(
                          context,
                          'About',
                          Icons.info,
                          () => _aboutApp(),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStatCard(
    BuildContext context,
    String label,
    String value,
    IconData icon,
    Color color,
  ) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: color.withOpacity(0.3),
        ),
      ),
      child: Column(
        children: [
          Icon(icon, color: color, size: 24),
          const SizedBox(height: 8),
          Text(
            value,
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: color,
                ),
          ),
          Text(
            label,
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color:
                      Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
                ),
          ),
        ],
      ),
    );
  }

  Widget _buildActivityItem(BuildContext context, dynamic activity) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surface,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: Theme.of(context).colorScheme.outline.withOpacity(0.2),
        ),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: _getActivityColor(activity.type).withOpacity(0.2),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Icon(
              _getActivityIcon(activity.type),
              color: _getActivityColor(activity.type),
              size: 20,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  activity.title,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        fontWeight: FontWeight.w600,
                      ),
                ),
                const SizedBox(height: 2),
                Text(
                  activity.subtitle,
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        color: Theme.of(context)
                            .colorScheme
                            .onSurface
                            .withOpacity(0.7),
                      ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            ),
          ),
          Text(
            _formatActivityTime(activity.timestamp),
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color:
                      Theme.of(context).colorScheme.onSurface.withOpacity(0.5),
                ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickActionCard(
    BuildContext context,
    String title,
    IconData icon,
    VoidCallback onTap,
  ) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color:
              Theme.of(context).colorScheme.primaryContainer.withOpacity(0.3),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(
            color: Theme.of(context).colorScheme.outline.withOpacity(0.2),
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: 32,
              color: Theme.of(context).colorScheme.primary,
            ),
            const SizedBox(height: 8),
            Text(
              title,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    fontWeight: FontWeight.w600,
                  ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  DateTime _parseDate(dynamic dateInput) {
    if (dateInput is DateTime) {
      return dateInput;
    } else if (dateInput is String) {
      try {
        return DateTime.parse(dateInput);
      } catch (e) {
        print('Error parsing date: $dateInput - $e');
        return DateTime.now();
      }
    } else {
      print('Unexpected date type: ${dateInput.runtimeType}');
      return DateTime.now();
    }
  }

  String _formatJoinDate(DateTime date) {
    final months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return '${months[date.month - 1]} ${date.year}';
  }

  String _formatActivityTime(DateTime date) {
    final now = DateTime.now();
    final difference = now.difference(date);

    if (difference.inDays > 7) {
      return _formatJoinDate(date);
    } else if (difference.inDays > 0) {
      return '${difference.inDays}d ago';
    } else if (difference.inHours > 0) {
      return '${difference.inHours}h ago';
    } else if (difference.inMinutes > 0) {
      return '${difference.inMinutes}m ago';
    } else {
      return 'Just now';
    }
  }

  IconData _getActivityIcon(dynamic type) {
    // Use string comparison since we can't directly reference the enum
    final typeStr = type.toString().split('.').last;
    switch (typeStr) {
      case 'noteCreated':
        return Icons.note_add;
      case 'postCreated':
        return Icons.post_add;
      case 'postLiked':
        return Icons.favorite;
      case 'friendAdded':
        return Icons.person_add;
      default:
        return Icons.event;
    }
  }

  Color _getActivityColor(dynamic type) {
    final typeStr = type.toString().split('.').last;
    switch (typeStr) {
      case 'noteCreated':
        return Theme.of(context).colorScheme.secondary;
      case 'postCreated':
        return Theme.of(context).colorScheme.primary;
      case 'postLiked':
        return Colors.red;
      case 'friendAdded':
        return Theme.of(context).colorScheme.tertiary;
      default:
        return Theme.of(context).colorScheme.primary;
    }
  }

  void _privacySettings() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Privacy settings feature coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _helpSupport() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Help & support feature coming soon!'),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _aboutApp() {
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
          'A community app for believers to connect, share, and grow together in faith.\n\n'
          'Features include Bible reading, note-taking, community posts, and friendship connections.',
        ),
      ],
    );
  }
}
