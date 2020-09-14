import 'dart:core';

import 'package:dio/dio.dart';
import 'package:email_validator/email_validator.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/user/UserDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/services/service_status_data.dart';
import 'package:inteligenciaindustrialapp/src/app/services/user_service.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/flash_helper.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:mobx/mobx.dart';

part 'register_controller.g.dart';

class RegisterController = _RegisterControllerBase with _$RegisterController;

abstract class _RegisterControllerBase with Store {
  UserService _userService = UserService();

  ServiceStatusData<UserDTO> registeredUser = ServiceStatusData();

  @observable
  String email;

  @observable
  String errorEmail;

  @computed
  bool get verifyEmail {
    if (email != null)
      return EmailValidator.validate(email.trim());
    else
      return false;
  }

  @observable
  String password;

  @observable
  String errorPassword;

  @computed
  bool get verifyPassword {
    if (password != null)
      return password.length >= 8;
    else
      return false;
  }

  @observable
  String confirmPassword;

  @observable
  String errorConfirm;

  @computed
  bool get verifyConfirm {
    if (confirmPassword != null && password != null)
      return password == confirmPassword;
    else
      return false;
  }

  @observable
  String name;

  @observable
  String errorName;

  @computed
  bool get verifyName {
    return name != null;
  }

  @observable
  String cpfCnpj;

  @observable
  String phone;

  @observable
  String errorPhone;

  @computed
  bool get verifyPhone {
    return phone != null;
  }

  @observable
  String company;

  @observable
  bool isValid = false;

  @action
  verifyFirstPage() {
    isValid = true;

    if (!verifyEmail) {
      isValid = false;
      errorEmail = 'Digite um email válido';
    } else {
      errorEmail = null;
    }

    if (!verifyPassword) {
      isValid = false;
      errorPassword = 'Digite uma senha válida';
      return;
    } else {
      errorPassword = null;
    }

    if (!verifyConfirm) {
      isValid = false;
      errorConfirm = 'A confirmação da senha deve ser igual a senha';
    } else {
      errorConfirm = null;
    }
  }

  @action
  verifyPersonPage() {
    isValid = true;

    if (!verifyName) {
      isValid = false;
      errorName = 'O nome é obrigatório';
    } else {
      errorName = null;
    }

    if (!verifyPhone) {
      isValid = false;
      errorPhone = 'O telefone é obrigatório';
    } else {
      errorPhone = null;
    }
  }

  @action
  registerUser() {
    FormData data = FormData.fromMap({
      'email': email,
      'password': password,
      'name': name,
      'document': cpfCnpj ?? '',
      'phone': phone,
      'business_name': company ?? '',
      'is_admin': false,
    });

    this._userService.registerUser(user: data).then((response) {
      if (response.message != null) {
        registeredUser.setError(null);
        frwkNavigator.popNavigate();
        FlashHelper.showToast(frwkNavigator.currentContext, false,
            'Desculpe... Já existe um cadastro com esse e-mail, por favor utilize um e-mail não cadastrado.');
        return;
      }

      registeredUser.setDone(response);

      userController.login(email, password).then((value) {
        frwkNavigator.popNavigate();
        frwkNavigator.popNavigate();

        if (value) {
          frwkNavigator.popNavigate();
          FlashHelper.showToast(frwkNavigator.currentContext, true,
              'Parabéns! Agora você terá acesso a conteúdos exclusivos!');
        } else {
          FlashHelper.showToast(frwkNavigator.currentContext, true,
              'Parabéns! Agora você já pode ter acesso a conteúdos exclusivos, faça login com sua conta nova!');
        }
      });
    }).catchError((error) {
      registeredUser.setError(error);

      frwkNavigator.popNavigate();
      frwkNavigator.popNavigate();
      frwkNavigator.popNavigate();
      FlashHelper.showToast(frwkNavigator.currentContext, false,
          'Desculpe... Ocorreu um erro ao tentar fazer seu cadastro, por favor tente novamente.');
    });
  }
}
