import 'package:dio/dio.dart';
import 'package:email_validator/email_validator.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/user/UserDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/services/service_status_data.dart';
import 'package:inteligenciaindustrialapp/src/app/services/user_service.dart';
import 'package:mobx/mobx.dart';

part 'login_controller.g.dart';

class LoginController = _LoginControllerBase with _$LoginController;

abstract class _LoginControllerBase with Store {
  UserService _userService = UserService();

  ServiceStatusData<UserDTO> user = ServiceStatusData();

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
  bool isValid = false;

  @action
  verify() {
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
  }

  @action
  Future<bool> login(String email, String password) {
    FormData data = FormData.fromMap({'email': email, 'password': password});

    return this._userService.login(user: data).then((response) {
      user.setDone(response);
      return true;
    }).catchError((error) {
      user.setError(error);
      return false;
    });
  }
}
