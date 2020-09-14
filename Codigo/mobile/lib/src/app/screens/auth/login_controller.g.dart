// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'login_controller.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$LoginController on _LoginControllerBase, Store {
  Computed<bool> _$verifyEmailComputed;

  @override
  bool get verifyEmail =>
      (_$verifyEmailComputed ??= Computed<bool>(() => super.verifyEmail)).value;
  Computed<bool> _$verifyPasswordComputed;

  @override
  bool get verifyPassword =>
      (_$verifyPasswordComputed ??= Computed<bool>(() => super.verifyPassword))
          .value;

  final _$emailAtom = Atom(name: '_LoginControllerBase.email');

  @override
  String get email {
    _$emailAtom.context.enforceReadPolicy(_$emailAtom);
    _$emailAtom.reportObserved();
    return super.email;
  }

  @override
  set email(String value) {
    _$emailAtom.context.conditionallyRunInAction(() {
      super.email = value;
      _$emailAtom.reportChanged();
    }, _$emailAtom, name: '${_$emailAtom.name}_set');
  }

  final _$errorEmailAtom = Atom(name: '_LoginControllerBase.errorEmail');

  @override
  String get errorEmail {
    _$errorEmailAtom.context.enforceReadPolicy(_$errorEmailAtom);
    _$errorEmailAtom.reportObserved();
    return super.errorEmail;
  }

  @override
  set errorEmail(String value) {
    _$errorEmailAtom.context.conditionallyRunInAction(() {
      super.errorEmail = value;
      _$errorEmailAtom.reportChanged();
    }, _$errorEmailAtom, name: '${_$errorEmailAtom.name}_set');
  }

  final _$passwordAtom = Atom(name: '_LoginControllerBase.password');

  @override
  String get password {
    _$passwordAtom.context.enforceReadPolicy(_$passwordAtom);
    _$passwordAtom.reportObserved();
    return super.password;
  }

  @override
  set password(String value) {
    _$passwordAtom.context.conditionallyRunInAction(() {
      super.password = value;
      _$passwordAtom.reportChanged();
    }, _$passwordAtom, name: '${_$passwordAtom.name}_set');
  }

  final _$errorPasswordAtom = Atom(name: '_LoginControllerBase.errorPassword');

  @override
  String get errorPassword {
    _$errorPasswordAtom.context.enforceReadPolicy(_$errorPasswordAtom);
    _$errorPasswordAtom.reportObserved();
    return super.errorPassword;
  }

  @override
  set errorPassword(String value) {
    _$errorPasswordAtom.context.conditionallyRunInAction(() {
      super.errorPassword = value;
      _$errorPasswordAtom.reportChanged();
    }, _$errorPasswordAtom, name: '${_$errorPasswordAtom.name}_set');
  }

  final _$isValidAtom = Atom(name: '_LoginControllerBase.isValid');

  @override
  bool get isValid {
    _$isValidAtom.context.enforceReadPolicy(_$isValidAtom);
    _$isValidAtom.reportObserved();
    return super.isValid;
  }

  @override
  set isValid(bool value) {
    _$isValidAtom.context.conditionallyRunInAction(() {
      super.isValid = value;
      _$isValidAtom.reportChanged();
    }, _$isValidAtom, name: '${_$isValidAtom.name}_set');
  }

  final _$_LoginControllerBaseActionController =
      ActionController(name: '_LoginControllerBase');

  @override
  dynamic verify() {
    final _$actionInfo = _$_LoginControllerBaseActionController.startAction();
    try {
      return super.verify();
    } finally {
      _$_LoginControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  Future<bool> login(String email, String password) {
    final _$actionInfo = _$_LoginControllerBaseActionController.startAction();
    try {
      return super.login(email, password);
    } finally {
      _$_LoginControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    final string =
        'email: ${email.toString()},errorEmail: ${errorEmail.toString()},password: ${password.toString()},errorPassword: ${errorPassword.toString()},isValid: ${isValid.toString()},verifyEmail: ${verifyEmail.toString()},verifyPassword: ${verifyPassword.toString()}';
    return '{$string}';
  }
}
