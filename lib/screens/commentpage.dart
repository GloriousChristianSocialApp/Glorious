import 'package:Glorious/services/api_service.dart';
import 'package:flutter/material.dart';
//ignore: unused_import
import 'package:Glorious/widgets/comment_card.dart' deferred as comment_card;

class Commentpage extends StatefulWidget {
  final String PostId;

  Commentpage({required this.PostId, super.key});

  @override
  State<Commentpage> createState() => _CommentpageState();
}

class _CommentpageState extends State<Commentpage> {
  @override
  // ignore: unused_field
  bool _loadDeferredLibrariesState = false;
  bool _isLoadingComments = false;
  List<List<dynamic>> comments = [];

  @override
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
    setState(() => _isLoadingComments = true);

    final response = await ApiService().getPostComments(widget.PostId);

    if (response == null || response['comments'] == null) {
      if (mounted) {
        setState(() => _isLoadingComments = false);
      }
      return;
    }

    final List serverComments = response['comments'];

    if (mounted) {
      setState(() {
        comments.clear();

        for (final c in serverComments) {
          comments.add([
            c['comment_id']?.toString() ??
                '', // Convert to string and handle null
            c['message']?.toString() ?? '', // comment text
            c['commentor_name']?.toString() ??
                'Anonymous', // commentor name (placeholder)
            c['commentor_pfp']?.toString() ??
                "https://res.cloudinary.com/dkj0tdmls/image/upload/v1766263629/default_pfp.jpg",
            c['created_at']?.toString() ?? '', // date
            c['likes'] ?? 0, // likes
            c['dislikes'] ?? 0, // dislikes
            c['recomments'] ?? 0 // recomments
          ]);
        }

        // Reverse comments to display newest first
        comments.sort((a, b) => b[4].compareTo(a[4]));

        _isLoadingComments = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Comments"),
          centerTitle: true,
        ),
        body: Column(
          children: [
            Expanded(
              child: _isLoadingComments
                  ? const Center(
                      child: CircularProgressIndicator(),
                    )
                  : comments.isEmpty
                      ? const Center(
                          child: Text('No comments yet'),
                        )
                      : ListView.builder(
                          itemCount: comments.length,
                          itemBuilder: (context, index) => SizedBox(
                                width: double.infinity,
                                child: comment_card.CommentCard(
                                  comment_id: comments[index][0],
                                  comment: comments[index][1],
                                  commentor: comments[index][2],
                                  commentor_pfp: comments[index][3],
                                  dateofcomment: comments[index][4],
                                  numberoflikes: comments[index][5],
                                  numberofdislikes: comments[index][6],
                                  numberofrecomments: comments[index][7],
                                ),
                              )),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: ElevatedButton.icon(
                onPressed: () async {
                  await Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (_) => AddComment(postId: widget.PostId)));
                  // Reload comments after adding a new one
                  load_comments();
                },
                label: const Text("Add Comment"),
                icon: const Icon(Icons.comment),
              ),
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
  final TextEditingController commentController = TextEditingController();
  bool isSending = false;

  @override
  void dispose() {
    commentController.dispose();
    super.dispose();
  }

  Future<void> sendComment() async {
    debugPrint("1️⃣ sendComment START");

    final text = commentController.text.trim();
    debugPrint("2️⃣ text = '$text'");

    if (text.isEmpty) {
      debugPrint("❌ text empty, returning");
      return;
    }

    setState(() => isSending = true);
    debugPrint("3️⃣ isSending set to true");

    try {
      debugPrint("4️⃣ calling ApiService.addComment");
      final code = await ApiService().addComment(widget.postId, text);
      debugPrint("5️⃣ ApiService returned code: $code");

      if (!mounted) return;

      setState(() => isSending = false);
      debugPrint("6️⃣ isSending set to false");

      // Show success message
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Comment added successfully')),
      );

      // Go back to comments page
      Navigator.pop(context);
    } catch (e, s) {
      debugPrint("🔥 EXCEPTION IN sendComment");
      debugPrint(e.toString());
      debugPrint(s.toString());

      if (!mounted) return;

      setState(() => isSending = false);

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Failed to add comment')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final hasText = commentController.text.trim().isNotEmpty;

    return Scaffold(
      appBar: AppBar(
        title: const Text("Add Comment"),
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: TextField(
            controller: commentController,
            onChanged: (_) => setState(() {}),
            style: const TextStyle(color: Colors.black),
            maxLines: 5,
            minLines: 1,
            decoration: InputDecoration(
              filled: true,
              fillColor: const Color(0xFFF5F5F5),
              labelText: "Type comment",
              labelStyle: const TextStyle(color: Colors.black),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(16),
                borderSide: BorderSide.none,
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(16),
                borderSide:
                    const BorderSide(color: Color(0xFF6B1B9A), width: 2),
              ),
              suffixIcon: IconButton(
                icon: isSending
                    ? const SizedBox(
                        width: 18,
                        height: 18,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Icon(Icons.send, color: Colors.black),
                onPressed: hasText && !isSending ? sendComment : null,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
