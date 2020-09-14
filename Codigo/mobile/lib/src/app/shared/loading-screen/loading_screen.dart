import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';

class LoadingScreen extends StatefulWidget {
  final Widget body;

  LoadingScreen({
    @required this.body,
  });

  @override
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  @override
  Widget build(BuildContext context) {
    return this._buildContainer(context);
  }

  Widget _buildContainer(BuildContext context) {
    return Observer(
      name: this.widget.body.runtimeType.toString(),
      builder: (_) {
        return Stack(
          children: <Widget>[
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onPanDown: (detail) {
                FocusScope.of(context).unfocus();
              },
              child: this.widget.body,
            ),
            frwkLoading.isLoading
                ? Container(
                    color: Colors.white,
                    child: Center(
                      child: CircularProgressIndicator(
                        valueColor: AlwaysStoppedAnimation(
                          ColorsStyle.blue,
                        ),
                        backgroundColor: ColorsStyle.blueLight,
                      ),
                    ),
                  )
                : SizedBox.shrink()
          ],
        );
      },
    );
  }
}
