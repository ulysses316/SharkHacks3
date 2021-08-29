import 'package:flutter/material.dart';

class HomeBottomNavigationBar extends StatefulWidget {
  const HomeBottomNavigationBar({Key? key, required this.onTypeChange})
      : super(key: key);

  final void Function(int) onTypeChange;

  @override
  _HomeBottomNavigationBarState createState() =>
      _HomeBottomNavigationBarState();
}

class _HomeBottomNavigationBarState extends State<HomeBottomNavigationBar> {
  int _selectedIndex = 0;

  final _barItems = <BottomNavigationBarItem>[
    BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Human'),
    BottomNavigationBarItem(icon: Icon(Icons.set_meal), label: 'Shark')
  ];

  void _onItemTapped(int index) {
    widget.onTypeChange(index);
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      items: _barItems,
      currentIndex: _selectedIndex,
      selectedItemColor: Color(0xFF98382E),
      onTap: _onItemTapped,
    );
  }
}
