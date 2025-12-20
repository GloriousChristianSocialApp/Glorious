import 'package:flutter/material.dart';
import 'package:Glorious/models/user.dart';

class FriendCard extends StatelessWidget {
  final User user;
  final VoidCallback onRemove;
  final dynamic onTap;
  final dynamic onMessage;

  const FriendCard({
    super.key,
    required this.user,
    required this.onTap,
    required this.onMessage,
    required this.onRemove,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      child: Card(
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: BorderSide(
            color: Theme.of(context).colorScheme.outline.withAlpha(51),
          ),
        ),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(16),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                CircleAvatar(
                  radius: 28,
                  backgroundImage: user.profileImage.isNotEmpty
                      ? NetworkImage(user.profileImage)
                      : null,
                  backgroundColor:
                      Theme.of(context).colorScheme.primaryContainer,
                  child: user.profileImage.isEmpty
                      ? Icon(
                          Icons.person,
                          size: 28,
                          color:
                              Theme.of(context).colorScheme.onPrimaryContainer,
                        )
                      : null,
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Text(
                    user.name,
                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          fontWeight: FontWeight.w600,
                          color: Theme.of(context).colorScheme.onSurface,
                        ),
                  ),
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    IconButton(
                      onPressed: onMessage,
                      icon: Icon(
                        Icons.chat_bubble_outline,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                    ),
                    PopupMenuButton<String>(
                      onSelected: (value) {
                        if (value == 'remove') {
                          onRemove();
                        }
                      },
                      itemBuilder: (BuildContext context) =>
                          <PopupMenuEntry<String>>[
                        const PopupMenuItem<String>(
                          value: 'remove',
                          child: Text('Remove Friend'),
                        ),
                      ],
                      icon: Icon(
                        Icons.more_vert,
                        color: Theme.of(context).colorScheme.onSurface,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
