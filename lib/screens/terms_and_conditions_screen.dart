
import 'package:flutter/material.dart';
import 'package:Follower/screens/main_navigation.dart';

class TermsAndConditionsScreen extends StatefulWidget {
  const TermsAndConditionsScreen({super.key});

  @override
  _TermsAndConditionsScreenState createState() => _TermsAndConditionsScreenState();
}

class _TermsAndConditionsScreenState extends State<TermsAndConditionsScreen> {
  bool _agreedToTerms = false;
  final TextEditingController _emailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Terms and Conditions'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: Text(
                  'Your terms and conditions go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
                ),
              ),
            ),
            SizedBox(height: 20),
            Row(
              children: [
                Checkbox(
                  value: _agreedToTerms,
                  onChanged: (value) {
                    setState(() {
                      _agreedToTerms = value!;
                    });
                  },
                ),
                Text('I agree to the terms and conditions'),
              ],
            ),
            SizedBox(height: 20),
            TextField(
              controller: _emailController,
              decoration: InputDecoration(
                labelText: 'Email (Optional)',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 10),
            Text(
              'We recommend adding an email to be able to recover your account if you lose your password.',
              style: TextStyle(fontStyle: FontStyle.italic),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _agreedToTerms
                  ? () {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(builder: (context) => const MainNavigation()),
                      );
                    }
                  : null,
              child: Text('Continue'),
            ),
          ],
        ),
      ),
    );
  }
}
