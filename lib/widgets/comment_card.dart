import 'package:flutter/material.dart';

class CommentCard extends StatelessWidget {
  String comment;
  String commentor;
  String commentor_pfp;
  String dateofcomment;
  int numberoflikes;
  int numberofdislikes;
  int numberofrecomments;

  CommentCard(
      {required this.comment,
      required this.commentor,
      required this.commentor_pfp,
      required this.dateofcomment,
      required this.numberoflikes,
      required this.numberofdislikes,
      required this.numberofrecomments,
      super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 150,
      width: double.infinity,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Image.network(
                commentor_pfp,
                height: 50,
                width: 50,
                
                ),
              SizedBox(
                width: 5,
              ),
              Text(commentor)
            ],
          ),
          SizedBox(
            height: 10,
          ),
          Text(comment),
          SizedBox(
            height: 10,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              ElevatedButton.icon(
                onPressed: () {},
                label: Text("$numberoflikes"),
                icon: Icon(Icons.thumb_up),
              ),
              ElevatedButton.icon(
                onPressed: () {},
                label: Text("$numberofdislikes"),
                icon: Icon(Icons.thumb_down),
              ),
              ElevatedButton.icon(
                onPressed: () {},
                label: Text("$numberofrecomments"),
                icon: Icon(Icons.rotate_left),
              ),
              
            ],
          ),
          SizedBox(height: 20,)
        ],
      ),
    );
  }
}
