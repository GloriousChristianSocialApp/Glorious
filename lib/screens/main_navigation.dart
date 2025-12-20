import 'package:flutter/material.dart';
import 'package:Follower/screens/bible_screen.dart' deferred as Bible;
import 'package:Follower/screens/notes_screen.dart' deferred as Notes;
import 'package:Follower/screens/feed_screen.dart' deferred as Feed;
import 'package:Follower/screens/friends_screen.dart' deferred as Friends;
import 'package:Follower/screens/account_screen.dart' deferred as Account;
import 'package:Follower/screens/notification_screen.dart'
    deferred as Notifications;

class MainNavigation extends StatefulWidget {
  const MainNavigation({super.key});

  @override
  State<MainNavigation> createState() => _MainNavigationState();
}

class _MainNavigationState extends State<MainNavigation>
    with TickerProviderStateMixin {
  int _currentIndex = 2;
  late PageController _pageController;
  late AnimationController _animationController;

  // Store the loaded screen widgets
  final Map<int, Widget> _loadedScreens = {};

  final List<NavigationItem> _navigationItems = [
    NavigationItem(
        icon: Icons.menu_book_outlined,
        selectedIcon: Icons.menu_book,
        label: 'Bible'),
    NavigationItem(
        icon: Icons.note_outlined, selectedIcon: Icons.note, label: 'Notes'),
    NavigationItem(
        icon: Icons.home_outlined, selectedIcon: Icons.home, label: 'Feed'),
    NavigationItem(
        icon: Icons.people_outlined,
        selectedIcon: Icons.people,
        label: 'Friends'),
    NavigationItem(
        icon: Icons.notifications_outlined,
        selectedIcon: Icons.notifications,
        label: 'Notifications'),
    NavigationItem(
        icon: Icons.person_outlined,
        selectedIcon: Icons.person,
        label: 'Account'),
  ];

  @override
  void initState() {
    super.initState();
    _currentIndex = 2; // Feed
    _pageController = PageController(initialPage: _currentIndex);
    _animationController = AnimationController(
        duration: const Duration(milliseconds: 300), vsync: this);

    // Preload the initial tab
    _loadScreen(_currentIndex);
  }

  @override
  void dispose() {
    _pageController.dispose();
    _animationController.dispose();
    super.dispose();
  }

  Future<void> _loadScreen(int index) async {
    if (_loadedScreens.containsKey(index)) return; // Already loaded

    Widget screen;

    switch (index) {
      case 0:
        await Bible.loadLibrary();
        screen = Bible.BibleScreen();
        break;
      case 1:
        await Notes.loadLibrary();
        screen = Notes.NotesScreen();
        break;
      case 2:
        await Feed.loadLibrary();
        screen = Feed.FeedScreen();
        break;
      case 3:
        await Friends.loadLibrary();
        screen = Friends.FriendsScreen();
        break;
      case 4:
        await Notifications.loadLibrary();
        screen = Notifications.NotificationScreen();
        break;
      case 5:
        await Account.loadLibrary();
        screen =    Account.AccountScreen();
        break;
      default:
        screen = const SizedBox.shrink();
    }

    if (!mounted) return;

    setState(() {
      _loadedScreens[index] = screen;
    });
  }

  void _onTabTapped(int index) {
    _loadScreen(index); // Load on-demand
    setState(() {
      _currentIndex = index;
    });
    _pageController.animateToPage(index,
        duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    _animationController.forward().then((_) => _animationController.reverse());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PageView(
        controller: _pageController,
        onPageChanged: (index) {
          _loadScreen(index); // Ensure page is loaded
          setState(() => _currentIndex = index);
        },
        children: List.generate(_navigationItems.length, (index) {
          return _loadedScreens[index] ??
              const Center(child: CircularProgressIndicator());
        }),
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surface,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 10,
              offset: const Offset(0, -2),
            ),
          ],
        ),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: _navigationItems.asMap().entries.map((entry) {
                final index = entry.key;
                final item = entry.value;
                final isSelected = _currentIndex == index;

                return Expanded(
                  child: GestureDetector(
                    onTap: () => _onTabTapped(index),
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      padding: const EdgeInsets.symmetric(vertical: 8),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              color: isSelected
                                  ? Theme.of(context)
                                      .colorScheme
                                      .primaryContainer
                                  : Colors.transparent,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Icon(
                              isSelected ? item.selectedIcon : item.icon,
                              color: isSelected
                                  ? Theme.of(context)
                                      .colorScheme
                                      .onPrimaryContainer
                                  : Theme.of(context)
                                      .colorScheme
                                      .onSurface
                                      .withOpacity(0.6),
                              size: 24,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            item.label,
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: isSelected
                                  ? FontWeight.w600
                                  : FontWeight.normal,
                              color: isSelected
                                  ? Theme.of(context).colorScheme.onSurface
                                  : Theme.of(context)
                                      .colorScheme
                                      .onSurface
                                      .withOpacity(0.6),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              }).toList(),
            ),
          ),
        ),
      ),
    );
  }
}

class NavigationItem {
  final IconData icon;
  final IconData selectedIcon;
  final String label;

  NavigationItem({
    required this.icon,
    required this.selectedIcon,
    required this.label,
  });
}
