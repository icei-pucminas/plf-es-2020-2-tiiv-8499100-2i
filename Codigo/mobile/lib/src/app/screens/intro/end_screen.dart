import 'package:flutter/material.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_button_widget.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/home/home_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/translate/preferences.dart';
import 'package:video_player/video_player.dart';

class EndScreen extends StatefulWidget {
  @override
  _EndScreenState createState() => _EndScreenState();
}

class _EndScreenState extends State<EndScreen> {
  VideoPlayerController _controller;

  @override
  void initState() {
    super.initState();

    _controller = VideoPlayerController.asset("assets/videos/7.mp4")
      ..initialize().then((_) {
        _controller.play();
        setState(() {});
      });
  }

  @override
  void dispose() {
    super.dispose();

    _controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        VideoPlayer(_controller),
        Align(
          alignment: Alignment.bottomCenter,
          child: _buildActionButton(
              text: 'Começar',
              action: () async {
                await preferences.setViewedIntro(true);
                frwkNavigator.navigate(HomeScreen(), modal: true);
              }),
        )
      ],
    );
  }

  _buildActionButton({@required String text, Function action}) {
    return CustomButtonWidget(
      radius: 8,
      onPressed: action,
      title: Text(
        text,
        style: TextStyle(
            color: ColorsStyle.blue, fontSize: 16, fontWeight: FontWeight.w500),
      ),
      height: 46,
      backgroundColor: Colors.white,
      margin: EdgeInsets.only(left: 16, right: 16, bottom: 32),
    );
  }
}
