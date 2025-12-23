import 'package:Glorious/services/api_service.dart';
import 'package:flutter/material.dart';
//ignore: unused_import
import 'package:Glorious/widgets/comment_card.dart' deferred as comment_card;

class Commentpage extends StatefulWidget {
  String PostId;

  Commentpage({required this.PostId, super.key});

  @override
  State<Commentpage> createState() => _CommentpageState();
}

class _CommentpageState extends State<Commentpage> {
  @override
  // ignore: unused_field
  bool _loadDeferredLibrariesState = false;
  List<List<dynamic>> comments = [];

  void initState() {
    super.initState();
    _loadDeferredLibraries();
  }

  Future<void> _loadDeferredLibraries() async {
    try {
      await Future.wait([comment_card.loadLibrary()]);
      setState(() => _loadDeferredLibrariesState = true);

      load_comments();
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Failed to load required resources')),
      );
    }
  }

  Future<void> load_comments() async {
    final response = await ApiService().getPostComments(widget.PostId);

    if (response == null || response['comments'] == null) return;

    final List serverComments = response['comments'];

    setState(() {
      comments.clear();

      for (final c in serverComments) {
        comments.add([
          c['message'], // comment text
          "User", // commentor name (placeholder)
          "https://res.cloudinary.com/dkj0tdmls/image/upload/v1766263629/default_pfp.jpg",
          c['created_at'], // date
          c['likes'] ?? 0, // likes
          c['dislikes'] ?? 0, // dislikes
          c['recomments'] ?? 0 // recomments
        ]);
      }
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Comments"),
          centerTitle: true,
        ),
        body: Column(
          children: [
            SizedBox(
              height: (MediaQuery.of(context).size.height - 100),
              child: ListView.builder(
                  itemCount: comments.length,
                  itemBuilder: (context, index) => Container(
                        width: double.infinity,
                        child: comment_card.CommentCard(
                          comment: comments[index][0],
                          commentor: comments[index][1],
                          commentor_pfp: comments[index][2],
                          dateofcomment: comments[index][3],
                          numberoflikes: comments[index][4],
                          numberofdislikes: comments[index][5],
                          numberofrecomments: comments[index][6],
                        ),
                      )),
            ),
            ElevatedButton.icon(
              onPressed: () {},
              label: Text("comment"),
              icon: Icon(Icons.comment),
            )
          ],
        ));
  }
}

class AddComment extends StatefulWidget {
  final String postId;
  const AddComment({required this.postId, super.key});

  @override
  State<AddComment> createState() => _AddCommentState();
}

class _AddCommentState extends State<AddComment> {
  final comment_controller = TextEditingController();
  int code = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: TextField(
        controller: comment_controller,
        style: TextStyle(color: Colors.black),
        decoration: InputDecoration(
            filled: true,
            fillColor: Color(0xFFF5F5F5),
            labelText: "Type comment",
            labelStyle: TextStyle(color: const Color.fromARGB(255, 0, 0, 0)),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: BorderSide.none,
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: BorderSide(color: Color(0xFF6B1B9A), width: 2),
            ),
            suffix: comment_controller.text.isEmpty
                ? null
                : IconButton(
                    onPressed: () {
                      setState(() async {
                        code = await ApiService()
                          .addComment(widget.postId, comment_controller.text);

                        if (code == 201){
                          Navigator.pop(context);
                        }
                        else{
                          SnackBar(content: Text("error posting your comment"));
                        }
                      });
                      
                    },
                    icon: Icon(Icons.send))),
      ),
    );
  }
}
