// source: https://pub.dev/packages/record/example

// Flutter
import 'dart:async';

import 'package:flutter/material.dart';

// Record
import 'package:record/record.dart';

class HomeFloatingButton extends StatefulWidget {
  const HomeFloatingButton(
      {Key? key,
      required this.onRecordFinished,
      required this.onRecordDurationChange,
      required this.recordDuration})
      : super(key: key);

  final void Function(String path) onRecordFinished;
  final void Function(int recordDuration) onRecordDurationChange;

  final int recordDuration;

  @override
  _HomeFloatingButtonState createState() => _HomeFloatingButtonState();
}

class _HomeFloatingButtonState extends State<HomeFloatingButton> {
  // properties
  final _audioRecorder = Record();
  bool _isRecording = false;
  Timer? _timer;

  @override
  void dispose() {
    _timer?.cancel();
    _audioRecorder.dispose();
    super.dispose();
  }

  Future<void> _onRecordButtonPressed() async {
    try {
      if (!_isRecording) {
        if (await _audioRecorder.hasPermission()) {
          await _audioRecorder.start();

          bool isRecording = await _audioRecorder.isRecording();
          setState(() {
            _isRecording = isRecording;
          });
          widget.onRecordDurationChange(0);
          _startTimer();
        }
      } else {
        _timer?.cancel();
        final path = await _audioRecorder.stop();
        widget.onRecordFinished(path!);
        setState(() {
          _isRecording = false;
        });
      }
    } catch (e) {
      print(e);
    }
  }

  void _startTimer() {
    _timer?.cancel();

    _timer = Timer.periodic(const Duration(seconds: 1), (Timer t) {
      widget.onRecordDurationChange(widget.recordDuration + 1);
    });
  }

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      onPressed: _onRecordButtonPressed,
      child: Icon(_isRecording ? Icons.stop : Icons.mic),
      backgroundColor: _isRecording ? Colors.red : Colors.indigo.shade900,
    );
  }
}
