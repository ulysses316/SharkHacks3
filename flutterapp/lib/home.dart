import "package:flutter/material.dart";
import 'package:talk_with_a_shark/home_bottom_navigation.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  // constants
  static const String TITLE_HUMAN_TO_SHARK = "Translate from human to shark";
  static const String TITLE_SHARK_TO_HUMAN = "Translate from shark to human";

  static const Color COLOR_HUMAN_TO_SHARK = Color(0xFF012738);
  static const Color COLOR_SHARK_TO_HUMAN = Color(0xFF37779A);

  static const int TYPE_HUMAN_TO_SHARK = 0;
  static const int TYPE_SHARK_TO_HUMAN = 1;

  String _title = TITLE_HUMAN_TO_SHARK;
  Color _backgroundColor = COLOR_HUMAN_TO_SHARK;

  void _onTypeChange(int type) {
    setState(() {
      switch (type) {
        case TYPE_HUMAN_TO_SHARK:
          _title = TITLE_HUMAN_TO_SHARK;
          _backgroundColor = COLOR_HUMAN_TO_SHARK;
          break;
        case TYPE_SHARK_TO_HUMAN:
          _title = TITLE_SHARK_TO_HUMAN;
          _backgroundColor = COLOR_SHARK_TO_HUMAN;
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _backgroundColor,
      appBar: AppBar(title: Text('Talk with a shark')),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            margin: EdgeInsets.only(top: 24, left: 24, right: 24, bottom: 24),
            child: Text(_title,
                style: TextStyle(
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                    color: Colors.white)),
          ),
          Container(
            margin: EdgeInsets.only(left: 24, right: 24, bottom: 24),
            child: Text(
              'Use the button below to start recording',
              style: TextStyle(fontSize: 16, color: Colors.white),
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => {},
        tooltip: 'Start recording',
        child: Icon(Icons.mic),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      bottomNavigationBar: new HomeBottomNavigationBar(
        onTypeChange: _onTypeChange,
      ),
    );
  }
}
