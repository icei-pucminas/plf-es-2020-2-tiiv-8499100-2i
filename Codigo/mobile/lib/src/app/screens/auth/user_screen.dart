import 'package:flutter/material.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_button_widget.dart';
import 'package:inteligenciaindustrialapp/src/app/services/service_status_data.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';

class UserScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: ColorsStyle.blue,
        appBar: _buildAppBar(),
        body: _buildBody());
  }

  _buildAppBar() {
    return AppBar(
      backgroundColor: ColorsStyle.blue,
      elevation: 0,
      automaticallyImplyLeading: false,
      title: FlatButton(
        onPressed: () {
          frwkNavigator.popNavigate();
        },
        child: Text(
          'Fechar',
          style: TextStyle(color: Colors.white, fontSize: 20),
        ),
      ),
    );
  }

  _buildBody() {
    return SingleChildScrollView(
      padding: EdgeInsets.only(top: 32, left: 16, right: 16, bottom: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Align(
            alignment: Alignment.center,
            child: Text(
              'Logado com ${userController.user.getData.name}',
              style: TextStyle(color: Colors.white, fontSize: 24),
            ),
          ),
          SizedBox(
            height: 32,
          ),
          _buildActionButton(
              text: 'Sair',
              noBorder: false,
              action: () {
                userController.user = ServiceStatusData();
                frwkNavigator.popNavigate();
              }),
        ],
      ),
    );
  }

  _buildActionButton(
      {@required String text, @required bool noBorder, Function action}) {
    return CustomButtonWidget(
      borderColor: noBorder ? null : Colors.white,
      radius: 8,
      onPressed: action,
      title: Text(
        text,
        style: TextStyle(
            color: noBorder ? ColorsStyle.blue : Colors.white,
            fontSize: 16,
            fontWeight: FontWeight.w500),
      ),
      height: 46,
      backgroundColor: noBorder ? Colors.white : ColorsStyle.blue,
    );
  }
}
