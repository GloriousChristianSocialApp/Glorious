import 'package:flutter/material.dart';
import 'package:Glorious/services/api_service.dart';
import 'package:Glorious/screens/passwordresetpage.dart' deferred as reset_page;

class AuthenticationScreen extends StatefulWidget {
  const AuthenticationScreen({super.key});

  @override
  State<AuthenticationScreen> createState() => _AuthenticationScreenState();
}

class _AuthenticationScreenState extends State<AuthenticationScreen> {
  bool _islogin = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Color(0xFF6B1B9A),
              Color(0xFF4A0072),
              Color(0xFF2D0051),
            ],
          ),
        ),
        child: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    // Logo or App Name
                    Container(
                      margin: EdgeInsets.only(bottom: 40),
                      child: Column(
                        children: [
                          Icon(
                            Icons.lock_person_rounded,
                            size: 80,
                            color: Colors.white.withOpacity(0.9),
                          ),
                          SizedBox(height: 12),
                          Text(
                            "Welcome",
                            style: TextStyle(
                              fontSize: 36,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                              letterSpacing: 1.2,
                            ),
                          ),
                        ],
                      ),
                    ),

                    // Auth Form
                    _islogin ? LoginScreen() : SignupScreen(),

                    SizedBox(height: 24),

                    // Toggle Button
                    Container(
                      padding:
                          EdgeInsets.symmetric(vertical: 12, horizontal: 24),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(30),
                        border: Border.all(
                          color: Colors.white.withOpacity(0.3),
                          width: 1,
                        ),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            _islogin
                                ? "Don't have an account?"
                                : "Already have an account?",
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.white.withOpacity(0.9),
                            ),
                          ),
                          SizedBox(width: 8),
                          GestureDetector(
                            onTap: () {
                              setState(() {
                                _islogin = !_islogin;
                              });
                            },
                            child: Text(
                              _islogin ? "Sign Up" : "Log In",
                              style: TextStyle(
                                fontSize: 14,
                                color: Color(0xFFE1BEE7),
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final usernameController = TextEditingController();
  final passwordController = TextEditingController();
  bool _obscureText = true;
  String? errorMessage;
  bool _isLoading = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxWidth: 400),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.3),
            blurRadius: 20,
            offset: Offset(0, 10),
          ),
        ],
      ),
      child: Padding(
        padding: EdgeInsets.all(28),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "Log In",
              style: TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Color(0xFF6B1B9A),
              ),
            ),
            SizedBox(height: 8),
            Text(
              "Welcome back!",
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey[600],
              ),
            ),
            SizedBox(height: 32),

            // Username Field
            TextField(
              controller: usernameController,
              decoration: InputDecoration(
                filled: true,
                fillColor: Color(0xFFF5F5F5),
                prefixIcon:
                    Icon(Icons.person_outline, color: Color(0xFF6B1B9A)),
                labelText: "Username",
                labelStyle: TextStyle(color: Colors.grey[700]),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide.none,
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: Color(0xFF6B1B9A), width: 2),
                ),
              ),
            ),
            SizedBox(height: 20),

            // Password Field
            TextField(
              controller: passwordController,
              obscureText: _obscureText,
              decoration: InputDecoration(
                filled: true,
                fillColor: Color(0xFFF5F5F5),
                prefixIcon: Icon(Icons.lock_outline, color: Color(0xFF6B1B9A)),
                labelText: "Password",
                labelStyle: TextStyle(color: Colors.grey[700]),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide.none,
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: Color(0xFF6B1B9A), width: 2),
                ),
                suffixIcon: IconButton(
                  icon: Icon(
                    _obscureText
                        ? Icons.visibility_outlined
                        : Icons.visibility_off_outlined,
                    color: Color(0xFF6B1B9A),
                  ),
                  onPressed: () => setState(() => _obscureText = !_obscureText),
                ),
              ),
            ),

            if (errorMessage != null) ...[
              SizedBox(height: 16),
              Container(
                padding: EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.red[50],
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.red[200]!),
                ),
                child: Row(
                  children: [
                    Icon(Icons.error_outline, color: Colors.red[700], size: 20),
                    SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        errorMessage!,
                        style: TextStyle(
                          color: Colors.red[700],
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              if (errorMessage!.contains('password'))
                TextButton(
                  onPressed: () async {
                    await reset_page.loadLibrary();
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => reset_page.RequestOtpScreen(),
                      ),
                    );
                  },
                  child: Text(
                    "Reset Password",
                    style: TextStyle(
                      color: Color(0xFF6B1B9A),
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
            ],

            SizedBox(height: 28),

            // Login Button
            SizedBox(
              width: double.infinity,
              height: 56,
              child: ElevatedButton(
                onPressed: _isLoading
                    ? null
                    : () async {
                        setState(() => _isLoading = true);
                        final result = await ApiService().login(
                          usernameController.text,
                          passwordController.text,
                        );
                        setState(() => _isLoading = false);

                        if (result.statusCode == 200) {
                          setState(() => errorMessage = null);
                          // Navigate to home
                        } else {
                          setState(() => errorMessage = result.message);
                        }
                      },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color(0xFF6B1B9A),
                  foregroundColor: Colors.white,
                  elevation: 0,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                ),
                child: _isLoading
                    ? SizedBox(
                        height: 24,
                        width: 24,
                        child: CircularProgressIndicator(
                          color: Colors.white,
                          strokeWidth: 2,
                        ),
                      )
                    : Text(
                        "Log In",
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  final emailController = TextEditingController();
  final usernameController = TextEditingController();
  final passwordController = TextEditingController();
  String? errorMessage;
  bool _obscureText = true;
  bool _isLoading = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxWidth: 400),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.3),
            blurRadius: 20,
            offset: Offset(0, 10),
          ),
        ],
      ),
      child: Padding(
        padding: EdgeInsets.all(28),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "Sign Up",
              style: TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Color(0xFF6B1B9A),
              ),
            ),
            SizedBox(height: 8),
            Text(
              "Create your account",
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey[600],
              ),
            ),
            SizedBox(height: 32),

            // Email Field
            TextField(
              controller: emailController,
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(
                filled: true,
                fillColor: Color(0xFFF5F5F5),
                prefixIcon:
                    Icon(Icons.email_outlined, color: Color(0xFF6B1B9A)),
                labelText: "Email",
                labelStyle: TextStyle(color: Colors.grey[700]),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide.none,
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: Color(0xFF6B1B9A), width: 2),
                ),
              ),
            ),
            SizedBox(height: 20),

            // Username Field
            TextField(
              controller: usernameController,
              decoration: InputDecoration(
                filled: true,
                fillColor: Color(0xFFF5F5F5),
                prefixIcon:
                    Icon(Icons.person_outline, color: Color(0xFF6B1B9A)),
                labelText: "Username",
                labelStyle: TextStyle(color: Colors.grey[700]),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide.none,
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: Color(0xFF6B1B9A), width: 2),
                ),
              ),
            ),
            SizedBox(height: 20),

            // Password Field
            TextField(
              controller: passwordController,
              obscureText: _obscureText,
              decoration: InputDecoration(
                filled: true,
                fillColor: Color(0xFFF5F5F5),
                prefixIcon: Icon(Icons.lock_outline, color: Color(0xFF6B1B9A)),
                labelText: "Password",
                labelStyle: TextStyle(color: Colors.grey[700]),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide.none,
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: Color(0xFF6B1B9A), width: 2),
                ),
                suffixIcon: IconButton(
                  icon: Icon(
                    _obscureText
                        ? Icons.visibility_outlined
                        : Icons.visibility_off_outlined,
                    color: Color(0xFF6B1B9A),
                  ),
                  onPressed: () => setState(() => _obscureText = !_obscureText),
                ),
              ),
            ),

            if (errorMessage != null) ...[
              SizedBox(height: 16),
              Container(
                padding: EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.red[50],
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.red[200]!),
                ),
                child: Row(
                  children: [
                    Icon(Icons.error_outline, color: Colors.red[700], size: 20),
                    SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        errorMessage!,
                        style: TextStyle(
                          color: Colors.red[700],
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],

            SizedBox(height: 28),

            // Signup Button
            SizedBox(
              width: double.infinity,
              height: 56,
              child: ElevatedButton(
                onPressed: _isLoading
                    ? null
                    : () async {
                        setState(() => _isLoading = true);
                        final result = await ApiService().register(
                          usernameController.text,
                          passwordController.text,
                          emailController.text,
                        );
                        setState(() => _isLoading = false);

                        if (result.statusCode == 201) {
                          setState(() => errorMessage = null);
                          // optionally navigate to login
                        } else {
                          setState(() => errorMessage = result.message);
                        }
                      },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color(0xFF6B1B9A),
                  foregroundColor: Colors.white,
                  elevation: 0,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                ),
                child: _isLoading
                    ? SizedBox(
                        height: 24,
                        width: 24,
                        child: CircularProgressIndicator(
                          color: Colors.white,
                          strokeWidth: 2,
                        ),
                      )
                    : Text(
                        "Sign Up",
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
