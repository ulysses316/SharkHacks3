// Flutter
import "package:flutter/material.dart";
import 'package:talk_with_a_shark/home/home_floating_button.dart';

// Shared
import 'package:talk_with_a_shark/shared/audio_player.dart';
import 'package:talk_with_a_shark/shared/constants.dart';

// Home
import 'package:talk_with_a_shark/home/home_bottom_navigation.dart';

// Record
import 'package:just_audio/just_audio.dart' as ap;

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _optionSelected = TYPE_HUMAN_TO_SHARK;

  bool _showPlayer = false;
  ap.AudioSource? _audioSource;
  int _recordDuration = 0;

  void _onRecordFinished(String path) {
    setState(() {
      _audioSource = ap.AudioSource.uri(Uri.parse(path));
      _showPlayer = true;
    });
  }

  Widget _buildTimer() {
    final String minutes = _formatNumber(_recordDuration ~/ 60);
    final String seconds = _formatNumber(_recordDuration % 60);

    return Align(
        alignment: Alignment.center,
        child: Text(
          '$minutes : $seconds',
          style: TextStyle(color: Colors.white, fontSize: 40),
          textAlign: TextAlign.center,
        ));
  }

  String _formatNumber(int number) {
    String numberStr = number.toString();
    if (number < 10) {
      numberStr = '0' + numberStr;
    }

    return numberStr;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _optionSelected == TYPE_HUMAN_TO_SHARK
          ? COLOR_HUMAN_TO_SHARK
          : COLOR_SHARK_TO_HUMAN,
      appBar: AppBar(title: Text('Talk with a shark')),
      body: _showPlayer
          ? Padding(
              padding: EdgeInsets.symmetric(horizontal: 25),
              child: AudioPlayer(
                source: _audioSource!,
                onDelete: () {
                  setState(() {
                    _showPlayer = false;
                    _recordDuration = 0;
                  });
                },
              ),
            )
          : Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  margin:
                      EdgeInsets.only(top: 24, left: 24, right: 24, bottom: 24),
                  child: Text(
                      _optionSelected == TYPE_HUMAN_TO_SHARK
                          ? TITLE_HUMAN_TO_SHARK
                          : TITLE_SHARK_TO_HUMAN,
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
                Container(
                    margin: EdgeInsets.only(top: 48), child: _buildTimer()),
                Container(
                  margin: EdgeInsets.only(top: 56),
                  child: Align(
                      alignment: Alignment.center,
                      child:
                          Image(image: AssetImage('assets/images/shark.png'))),
                )
              ],
            ),
      floatingActionButton: HomeFloatingButton(
        onRecordFinished: _onRecordFinished,
        recordDuration: _recordDuration,
        onRecordDurationChange: (duration) => setState(() {
          _recordDuration = duration;
        }),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      bottomNavigationBar: HomeBottomNavigationBar(
        onTypeChange: (type) => setState(() {
          _optionSelected = type;
        }),
      ),
    );
  }
}
