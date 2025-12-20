import 'package:flutter/material.dart';
// ignore: unused_import
import 'package:Glorious/models/note.dart' deferred as note_model;
import 'package:Glorious/services/api_service.dart';
import 'package:Glorious/screens/note_detail_screen.dart'
    deferred as note_detail;
import 'package:Glorious/widgets/note_card.dart' deferred as note_widget;

class NotesScreen extends StatefulWidget {
  const NotesScreen({super.key});

  @override
  State<NotesScreen> createState() => _NotesScreenState();
}

class _NotesScreenState extends State<NotesScreen>
    with TickerProviderStateMixin {
  final ApiService _apiService = ApiService();
  List<dynamic> _notes = []; // Changed from List<Note>
  List<dynamic> _filteredNotes = []; // Changed from List<Note>
  bool _isLoading = true;
  bool _librariesLoaded = false;
  late AnimationController _slideController;
  late Animation<Offset> _slideAnimation;

  @override
  void initState() {
    super.initState();
    _slideController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );
    _slideAnimation = Tween<Offset>(
      begin: const Offset(0, 0.5),
      end: Offset.zero,
    ).animate(CurvedAnimation(
      parent: _slideController,
      curve: Curves.easeOutCubic,
    ));
    _loadDeferredLibraries();
  }

  @override
  void dispose() {
    _slideController.dispose();
    super.dispose();
  }

  Future<void> _loadDeferredLibraries() async {
    try {
      await Future.wait([
        note_model.loadLibrary(),
        note_detail.loadLibrary(),
        note_widget.loadLibrary(),
      ]);
      setState(() => _librariesLoaded = true);
      _loadNotes();
    } catch (e) {
      if (!mounted) return;
      _showErrorSnackBar('Failed to load required resources');
      setState(() => _isLoading = false);
    }
  }

  Future<void> _loadNotes() async {
    if (!_librariesLoaded) return;

    setState(() => _isLoading = true);
    try {
      final userId = await _apiService.getUserId();
      if (userId == null) {
        _showErrorSnackBar('User not logged in');
        setState(() => _isLoading = false);
        return;
      }
      final notes = await _apiService.getUserNotes();

      if (!mounted) return;

      setState(() {
        _notes = notes;
        _filteredNotes = notes;
      });
      _slideController.forward();
    } catch (e) {
      if (!mounted) return;
      _showErrorSnackBar('Failed to load notes');
    } finally {
      if (mounted) {
        setState(() => _isLoading = false);
      }
    }
  }

  void _showErrorSnackBar(String message) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Theme.of(context).colorScheme.error,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      ),
    );
  }

  Future<void> _createNote() async {
    if (!_librariesLoaded) return;

    await Navigator.push(
      context,
      PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) =>
            note_detail.NoteDetailScreen(),
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
    _loadNotes();
  }

  Future<void> _openNote(dynamic note) async {
    if (!_librariesLoaded) return;

    await Navigator.push(
      context,
      PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) =>
            note_detail.NoteDetailScreen(note: note),
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
    _loadNotes();
  }

  void _showSearch() {
    if (!_librariesLoaded) return;

    showSearch(
      context: context,
      delegate: NoteSearchDelegate(
        notes: _notes,
        onNoteSelected: _openNote,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Row(
          children: [
            Icon(Icons.note, color: Colors.white),
            SizedBox(width: 8),
            Text(
              'My Notes',
              style:
                  TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
            ),
          ],
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        actions: [
          IconButton(
            icon: const Icon(Icons.search, color: Colors.white),
            onPressed: _librariesLoaded ? _showSearch : null,
          ),
        ],
      ),
      body: !_librariesLoaded
          ? const Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CircularProgressIndicator(),
                  SizedBox(height: 16),
                  Text('Loading notes...'),
                ],
              ),
            )
          : _isLoading
              ? const Center(child: CircularProgressIndicator())
              : _notes.isEmpty
                  ? _buildEmptyState()
                  : SlideTransition(
                      position: _slideAnimation,
                      child: _buildNotesList(),
                    ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _librariesLoaded ? _createNote : null,
        icon: const Icon(Icons.add),
        label: const Text('New Note'),
        backgroundColor: _librariesLoaded
            ? Theme.of(context).colorScheme.primary
            : Theme.of(context).colorScheme.primary.withOpacity(0.5),
        foregroundColor: Theme.of(context).colorScheme.onPrimary,
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.note_outlined,
            size: 80,
            color: Theme.of(context).colorScheme.outline,
          ),
          const SizedBox(height: 16),
          Text(
            'No notes yet',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                  color: Theme.of(context).colorScheme.outline,
                ),
          ),
          const SizedBox(height: 8),
          Text(
            'Create your first spiritual note',
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Theme.of(context).colorScheme.outline,
                ),
          ),
          const SizedBox(height: 24),
          ElevatedButton.icon(
            onPressed: _createNote,
            icon: const Icon(Icons.add),
            label: const Text('Create Note'),
            style: ElevatedButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNotesList() {
    return RefreshIndicator(
      onRefresh: _loadNotes,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _filteredNotes.length,
        itemBuilder: (context, index) {
          final note = _filteredNotes[index];
          return AnimatedContainer(
            duration: Duration(milliseconds: 100 * index),
            child: note_widget.NoteCard(
              note: note,
              onTap: () => _openNote(note),
              onDelete: () => _deleteNote(note),
            ),
          );
        },
      ),
    );
  }

  Future<void> _deleteNote(dynamic note) async {
    final confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Delete Note'),
        content: Text('Are you sure you want to delete "${note.title}"?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Cancel'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            child: Text(
              'Delete',
              style: TextStyle(color: Theme.of(context).colorScheme.error),
            ),
          ),
        ],
      ),
    );

    if (confirm == true) {
      try {
        await _apiService.deleteNote(note.id);
        _loadNotes();
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Note deleted successfully'),
              behavior: SnackBarBehavior.floating,
            ),
          );
        }
      } catch (e) {
        _showErrorSnackBar('Failed to delete note');
      }
    }
  }
}

class NoteSearchDelegate extends SearchDelegate<dynamic> {
  final List<dynamic> notes;
  final Function(dynamic) onNoteSelected;

  NoteSearchDelegate({required this.notes, required this.onNoteSelected});

  @override
  List<Widget> buildActions(BuildContext context) {
    return [
      IconButton(
        icon: const Icon(Icons.clear),
        onPressed: () => query = '',
      ),
    ];
  }

  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: const Icon(Icons.arrow_back),
      onPressed: () => close(context, null),
    );
  }

  @override
  Widget buildResults(BuildContext context) {
    return _buildSearchResults();
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    return _buildSearchResults();
  }

  Widget _buildSearchResults() {
    final filteredNotes = notes.where((note) {
      return note.title.toLowerCase().contains(query.toLowerCase()) ||
          note.content.toLowerCase().contains(query.toLowerCase()) ||
          (note.tags as List)
              .any((tag) => tag.toLowerCase().contains(query.toLowerCase()));
    }).toList();

    if (filteredNotes.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.search_off,
              size: 64,
              color: Colors.grey[400],
            ),
            const SizedBox(height: 16),
            Text(
              'No notes found',
              style: TextStyle(
                fontSize: 18,
                color: Colors.grey[600],
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Try searching with different keywords',
              style: TextStyle(
                fontSize: 14,
                color: Colors.grey[500],
              ),
            ),
          ],
        ),
      );
    }

    return ListView.builder(
      itemCount: filteredNotes.length,
      itemBuilder: (context, index) {
        final note = filteredNotes[index];
        return ListTile(
          leading: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: Colors.blue.withOpacity(0.1),
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Icon(Icons.note, color: Colors.blue),
          ),
          title: Text(
            note.title,
            style: const TextStyle(fontWeight: FontWeight.w600),
          ),
          subtitle: Text(
            note.content,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
          ),
          trailing: const Icon(Icons.chevron_right),
          onTap: () {
            close(context, note);
            onNoteSelected(note);
          },
        );
      },
    );
  }
}
