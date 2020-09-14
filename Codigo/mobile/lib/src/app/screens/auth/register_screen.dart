import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_button_widget.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/auth/register_person_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';

class RegisterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScopeNode currentFocus = FocusScope.of(context);

        if (!currentFocus.hasPrimaryFocus) {
          currentFocus.unfocus();
        }
      },
      child: Scaffold(
        backgroundColor: ColorsStyle.blue,
        appBar: _buildAppBar(),
        body: _buildBody(),
        bottomNavigationBar: _buildActionButton(
            text: 'Próximo',
            noBorder: false,
            action: () {
              frwkNavigator.navigate(RegisterPersonScreen(), modal: true);
              registerController.isValid = false;
            }),
      ),
    );
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
          'Voltar',
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
              'Preencha as informações\nabaixo',
              style: TextStyle(color: Colors.white, fontSize: 24),
              textAlign: TextAlign.center,
            ),
          ),
          SizedBox(
            height: 32,
          ),
          Observer(
            builder: (_) {
              return Column(
                children: <Widget>[
                  _buildTextField(
                      label: 'E-mail',
                      hint: 'Exemplo: joao@email.com',
                      keyBoardType: TextInputType.emailAddress,
                      errorText: registerController.errorEmail,
                      onChange: (text) {
                        registerController.email = text?.trim();
                      }),
                  SizedBox(
                    height: 16,
                  ),
                  _buildTextField(
                      label: 'Senha',
                      hint: 'A senha possui no mínimo 8 caracteres',
                      password: true,
                      errorText: registerController.errorPassword,
                      onChange: (text) {
                        registerController.password = text?.trim();
                      }),
                  SizedBox(
                    height: 16,
                  ),
                  _buildTextField(
                      label: 'Confirmar senha',
                      hint: 'A senha possui no mínimo 8 caracteres',
                      password: true,
                      errorText: registerController.errorConfirm,
                      onChange: (text) {
                        registerController.confirmPassword = text?.trim();
                      }),
                ],
              );
            },
          ),
          SizedBox(
            height: 32,
          ),
        ],
      ),
    );
  }

  _buildTextField(
      {String label,
      String hint,
      bool password = false,
      TextInputType keyBoardType,
      String errorText,
      Function(String) onChange}) {
    return Column(
      children: <Widget>[
        Align(
          alignment: Alignment.centerLeft,
          child: Text(
            label,
            style: TextStyle(color: Colors.white, fontSize: 16),
            textAlign: TextAlign.left,
          ),
        ),
        SizedBox(
          height: 8,
        ),
        TextField(
            onChanged: (text) {
              onChange(text);
            },
            keyboardType: keyBoardType ?? TextInputType.text,
            obscureText: password,
            cursorColor: ColorsStyle.blue,
            decoration: InputDecoration(
              hintText: hint,
              filled: true,
              fillColor: Colors.white,
              errorText: errorText,
              errorStyle: TextStyle(color: Colors.white),
              contentPadding:
                  const EdgeInsets.only(left: 14.0, bottom: 8.0, top: 8.0),
              focusedBorder: OutlineInputBorder(
                borderSide: BorderSide(color: Colors.white),
                borderRadius: BorderRadius.circular(8),
              ),
              enabledBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: Colors.white),
                borderRadius: BorderRadius.circular(8),
              ),
            ))
      ],
    );
  }

  _buildActionButton(
      {@required String text, @required bool noBorder, Function action}) {
    return CustomButtonWidget(
      borderColor: noBorder ? null : Colors.white,
      radius: 8,
      onPressed: () {
        registerController.verifyFirstPage();
        if (registerController.isValid) {
          action();
        }
      },
      title: Text(
        text,
        style: TextStyle(
            color: noBorder ? ColorsStyle.blue : Colors.white,
            fontSize: 16,
            fontWeight: FontWeight.w500),
      ),
      height: 46,
      backgroundColor: noBorder ? Colors.white : ColorsStyle.blue,
      margin: EdgeInsets.only(left: 16, right: 16, bottom: 32),
    );
  }
}
