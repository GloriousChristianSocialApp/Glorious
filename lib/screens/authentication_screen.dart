import 'package:flutter/material.dart';
import 'package:Follower/services/api_service.dart';
import 'package:Follower/screens/passwordresetpage.dart' deferred as reset_page;

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
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            _islogin ? LoginScreen() : SignupScreen(),
            SizedBox(
              height: 20,
            ),
            TextButton(
                onPressed: () {
                  setState(() {
                    _islogin = !_islogin;
                  });
                },
                child: Text("Dont have an account? Signup",
                    style: TextStyle(fontSize: 20, color: Colors.black)))
          ],
        ),
      ),
      backgroundColor: const Color.fromARGB(255, 77, 7, 107),
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

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 400,
      child: Card(
        color: const Color.fromARGB(255, 224, 206, 229),
        child: ListView(
          padding: EdgeInsets.all(16),
          children: [
            Text("LOGIN",
                style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                    color: Color.fromARGB(255, 73, 13, 185)),
                textAlign: TextAlign.center),
            SizedBox(height: 20),
            TextField(
              controller: usernameController,
              decoration: InputDecoration(
                border:
                    OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                icon: Icon(Icons.account_box_rounded),
                labelText: "Enter your username",
              ),
            ),
            SizedBox(height: 20),
            TextField(
              controller: passwordController,
              obscureText: _obscureText,
              decoration: InputDecoration(
                border:
                    OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                icon: Icon(Icons.key),
                labelText: "Enter your password",
                suffixIcon: IconButton(
                  icon: Icon(_obscureText ? Icons.remove_red_eye : Icons.close),
                  onPressed: () => setState(() => _obscureText = !_obscureText),
                ),
              ),
            ),
            if (errorMessage != null) ...[
              SizedBox(height: 10),
              Text(errorMessage!,
                  style:
                      TextStyle(color: Colors.red, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.center),
              if (errorMessage!.contains('password'))
                TextButton(
                  onPressed: () async {
                    // deferred load reset page
                    await reset_page.loadLibrary();
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (_) => reset_page.RequestOtpScreen()));
                  },
                  child: Text("Reset Password",
                      style: TextStyle(color: Colors.blue)),
                )
            ],
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                final result = await ApiService()
                    .login(usernameController.text, passwordController.text);
                if (result.statusCode == 200) {
                  setState(() => errorMessage = null);
                  // Navigate to home
                } else {
                  setState(() => errorMessage = result.message);
                }
              },
              child: Text("Login",
                  style: TextStyle(fontSize: 28, color: Colors.black)),
              style: ElevatedButton.styleFrom(
                  backgroundColor: const Color.fromARGB(255, 73, 13, 185)),
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

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 500,
      child: Card(
        child: ListView(
          padding: EdgeInsets.all(16),
          children: [
            Text("SIGNUP",
                style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                    color: Color.fromARGB(255, 73, 13, 185)),
                textAlign: TextAlign.center),
            SizedBox(height: 20),
            TextField(
              controller: emailController,
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(
                border:
                    OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                icon: Icon(Icons.mail),
                labelText: "Enter your Email",
              ),
            ),
            SizedBox(height: 20),
            TextField(
              controller: usernameController,
              decoration: InputDecoration(
                border:
                    OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                icon: Icon(Icons.account_box_rounded),
                labelText: "Enter your username",
              ),
            ),
            SizedBox(height: 20),
            TextField(
              controller: passwordController,
              obscureText: _obscureText,
              decoration: InputDecoration(
                border:
                    OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                icon: Icon(Icons.key),
                labelText: "Enter your password",
                suffixIcon: IconButton(
                  icon: Icon(_obscureText ? Icons.remove_red_eye : Icons.close),
                  onPressed: () => setState(() => _obscureText = !_obscureText),
                ),
              ),
            ),
            if (errorMessage != null) ...[
              SizedBox(height: 10),
              Text(errorMessage!,
                  style:
                      TextStyle(color: Colors.red, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.center),
            ],
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                final result = await ApiService().register(
                    usernameController.text,
                    passwordController.text,
                    emailController.text);
                if (result.statusCode == 201) {
                  setState(() => errorMessage = null);
                  // optionally navigate to login
                } else {
                  setState(() => errorMessage = result.message);
                }
              },
              child: Text("SignUp",
                  style: TextStyle(fontSize: 28, color: Colors.black)),
              style: ElevatedButton.styleFrom(
                  backgroundColor: const Color.fromARGB(255, 73, 13, 185)),
            )
          ],
        ),
      ),
    );
  }
}
