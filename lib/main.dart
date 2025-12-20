import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:Follower/services/theme_provider.dart';
import 'package:Follower/services/notification_service.dart';
import 'package:Follower/theme.dart';
import 'package:Follower/screens/authentication_screen.dart';
import 'package:Follower/screens/main_navigation.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();

  runApp(
    ChangeNotifierProvider(
      create: (_) => ThemeProvider(),
      child: const ChurchApp(),
    ),
  );
}

class ChurchApp extends StatefulWidget {
  const ChurchApp({super.key});

  @override
  State<ChurchApp> createState() => _ChurchAppState();
}

class _ChurchAppState extends State<ChurchApp> {
  bool? _isLoggedIn;

  @override
  void initState() {
    super.initState();

    // 🔥 Run heavy work AFTER first frame (critical for web)
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _initializeApp();
    });
  }

  Future<void> _initializeApp() async {
    // Notifications (safe on mobile, slow on web if blocking)
    await NotificationService.initialize();

    // SharedPreferences (IndexedDB on web – slow if awaited in main)
    final prefs = await SharedPreferences.getInstance();
    final loggedIn = prefs.getBool('isLoggedIn') ?? false;

    if (!mounted) return;

    setState(() {
      _isLoggedIn = loggedIn;
    });
  }

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);

    return MaterialApp(
      title: 'Church Community',
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      darkTheme: darkTheme,
      themeMode: themeProvider.themeMode,

      // 👇 Instant render, then route switch
      home: _isLoggedIn == null
          ? const SplashScreen()
          : _isLoggedIn!
              ? const MainNavigation()
              : const AuthenticationScreen(),
    );
  }
}

/// Simple instant splash to avoid white screen
class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: CircularProgressIndicator(),
      ),
    );
  }
}

