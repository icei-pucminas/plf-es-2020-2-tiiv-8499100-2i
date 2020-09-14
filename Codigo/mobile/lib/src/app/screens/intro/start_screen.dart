import 'package:flutter/material.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_button_widget.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/intro/intro_post_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';
import 'package:video_player/video_player.dart';

class StartScreen extends StatefulWidget {
  @override
  _StartScreenState createState() => _StartScreenState();
}

class _StartScreenState extends State<StartScreen> {
  VideoPlayerController _controller;

  @override
  void initState() {
    super.initState();

    _controller = VideoPlayerController.asset("assets/videos/1.mp4")
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
              text: 'Próximo',
              action: () {
                frwkNavigator.navigate(IntroPostScreen(), modal: true);
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
            color: Colors.white, fontSize: 16, fontWeight: FontWeight.w500),
      ),
      height: 46,
      backgroundColor: ColorsStyle.blue,
      margin: EdgeInsets.only(left: 16, right: 16, bottom: 32),
    );
  }
}
