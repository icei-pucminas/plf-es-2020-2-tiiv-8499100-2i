import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_button_widget.dart';
import 'package:inteligenciaindustrialapp/src/app/shared/loading-screen/loading_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';
import 'package:mask_text_input_formatter/mask_text_input_formatter.dart';

class RegisterPersonScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LoadingScreen(
      body: GestureDetector(
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
          bottomNavigationBar:
              _buildActionButton(text: 'Finalizar cadastro', noBorder: true),
        ),
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
                      label: 'Nome',
                      hint: 'Exemplo: João da Silva',
                      errorText: registerController.errorName,
                      onChange: (text) {
                        registerController.name = text?.trim();
                      }),
                  SizedBox(
                    height: 16,
                  ),
                  _buildTextField(
                      label: 'CPF ou CNPJ',
                      hint: 'Exemplo: 11111111111',
                      mask: '###############',
                      keyBoardType: TextInputType.number,
                      onChange: (text) {
                        registerController.cpfCnpj = text?.trim();
                      }),
                  SizedBox(
                    height: 16,
                  ),
                  _buildTextField(
                      label: 'Telefone ou celular',
                      hint: 'Exemplo: (31) 11111-1111',
                      keyBoardType: TextInputType.number,
                      mask: '(##) #####-####',
                      errorText: registerController.errorPhone,
                      onChange: (text) {
                        registerController.phone = text?.trim();
                      }),
                  SizedBox(
                    height: 16,
                  ),
                  _buildTextField(
                      label: 'Nome de sua empresa',
                      hint: 'Exemplo: Engenharia S.A',
                      onChange: (text) {
                        registerController.company = text?.trim();
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
      Function(String) onChange,
      String mask}) {
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
            inputFormatters: _getFormatters(mask),
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

  _buildActionButton({@required String text, @required bool noBorder}) {
    return CustomButtonWidget(
      borderColor: noBorder ? null : Colors.white,
      radius: 8,
      onPressed: () {
        registerController.verifyPersonPage();
        if (registerController.isValid) {
          registerController.registerUser();
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

  List<MaskTextInputFormatter> _getFormatters(String mask) {
    if (mask != null) {
      var maskFormatter =
          MaskTextInputFormatter(mask: mask, filter: {"#": RegExp(r'[0-9]')});
      return [maskFormatter];
    }
    return [];
  }
}
