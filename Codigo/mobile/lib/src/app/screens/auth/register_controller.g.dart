// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'register_controller.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$RegisterController on _RegisterControllerBase, Store {
  Computed<bool> _$verifyEmailComputed;

  @override
  bool get verifyEmail =>
      (_$verifyEmailComputed ??= Computed<bool>(() => super.verifyEmail)).value;
  Computed<bool> _$verifyPasswordComputed;

  @override
  bool get verifyPassword =>
      (_$verifyPasswordComputed ??= Computed<bool>(() => super.verifyPassword))
          .value;
  Computed<bool> _$verifyConfirmComputed;

  @override
  bool get verifyConfirm =>
      (_$verifyConfirmComputed ??= Computed<bool>(() => super.verifyConfirm))
          .value;
  Computed<bool> _$verifyNameComputed;

  @override
  bool get verifyName =>
      (_$verifyNameComputed ??= Computed<bool>(() => super.verifyName)).value;
  Computed<bool> _$verifyPhoneComputed;

  @override
  bool get verifyPhone =>
      (_$verifyPhoneComputed ??= Computed<bool>(() => super.verifyPhone)).value;

  final _$emailAtom = Atom(name: '_RegisterControllerBase.email');

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

  final _$errorEmailAtom = Atom(name: '_RegisterControllerBase.errorEmail');

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

  final _$passwordAtom = Atom(name: '_RegisterControllerBase.password');

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

  final _$errorPasswordAtom =
      Atom(name: '_RegisterControllerBase.errorPassword');

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

  final _$confirmPasswordAtom =
      Atom(name: '_RegisterControllerBase.confirmPassword');

  @override
  String get confirmPassword {
    _$confirmPasswordAtom.context.enforceReadPolicy(_$confirmPasswordAtom);
    _$confirmPasswordAtom.reportObserved();
    return super.confirmPassword;
  }

  @override
  set confirmPassword(String value) {
    _$confirmPasswordAtom.context.conditionallyRunInAction(() {
      super.confirmPassword = value;
      _$confirmPasswordAtom.reportChanged();
    }, _$confirmPasswordAtom, name: '${_$confirmPasswordAtom.name}_set');
  }

  final _$errorConfirmAtom = Atom(name: '_RegisterControllerBase.errorConfirm');

  @override
  String get errorConfirm {
    _$errorConfirmAtom.context.enforceReadPolicy(_$errorConfirmAtom);
    _$errorConfirmAtom.reportObserved();
    return super.errorConfirm;
  }

  @override
  set errorConfirm(String value) {
    _$errorConfirmAtom.context.conditionallyRunInAction(() {
      super.errorConfirm = value;
      _$errorConfirmAtom.reportChanged();
    }, _$errorConfirmAtom, name: '${_$errorConfirmAtom.name}_set');
  }

  final _$nameAtom = Atom(name: '_RegisterControllerBase.name');

  @override
  String get name {
    _$nameAtom.context.enforceReadPolicy(_$nameAtom);
    _$nameAtom.reportObserved();
    return super.name;
  }

  @override
  set name(String value) {
    _$nameAtom.context.conditionallyRunInAction(() {
      super.name = value;
      _$nameAtom.reportChanged();
    }, _$nameAtom, name: '${_$nameAtom.name}_set');
  }

  final _$errorNameAtom = Atom(name: '_RegisterControllerBase.errorName');

  @override
  String get errorName {
    _$errorNameAtom.context.enforceReadPolicy(_$errorNameAtom);
    _$errorNameAtom.reportObserved();
    return super.errorName;
  }

  @override
  set errorName(String value) {
    _$errorNameAtom.context.conditionallyRunInAction(() {
      super.errorName = value;
      _$errorNameAtom.reportChanged();
    }, _$errorNameAtom, name: '${_$errorNameAtom.name}_set');
  }

  final _$cpfCnpjAtom = Atom(name: '_RegisterControllerBase.cpfCnpj');

  @override
  String get cpfCnpj {
    _$cpfCnpjAtom.context.enforceReadPolicy(_$cpfCnpjAtom);
    _$cpfCnpjAtom.reportObserved();
    return super.cpfCnpj;
  }

  @override
  set cpfCnpj(String value) {
    _$cpfCnpjAtom.context.conditionallyRunInAction(() {
      super.cpfCnpj = value;
      _$cpfCnpjAtom.reportChanged();
    }, _$cpfCnpjAtom, name: '${_$cpfCnpjAtom.name}_set');
  }

  final _$phoneAtom = Atom(name: '_RegisterControllerBase.phone');

  @override
  String get phone {
    _$phoneAtom.context.enforceReadPolicy(_$phoneAtom);
    _$phoneAtom.reportObserved();
    return super.phone;
  }

  @override
  set phone(String value) {
    _$phoneAtom.context.conditionallyRunInAction(() {
      super.phone = value;
      _$phoneAtom.reportChanged();
    }, _$phoneAtom, name: '${_$phoneAtom.name}_set');
  }

  final _$errorPhoneAtom = Atom(name: '_RegisterControllerBase.errorPhone');

  @override
  String get errorPhone {
    _$errorPhoneAtom.context.enforceReadPolicy(_$errorPhoneAtom);
    _$errorPhoneAtom.reportObserved();
    return super.errorPhone;
  }

  @override
  set errorPhone(String value) {
    _$errorPhoneAtom.context.conditionallyRunInAction(() {
      super.errorPhone = value;
      _$errorPhoneAtom.reportChanged();
    }, _$errorPhoneAtom, name: '${_$errorPhoneAtom.name}_set');
  }

  final _$companyAtom = Atom(name: '_RegisterControllerBase.company');

  @override
  String get company {
    _$companyAtom.context.enforceReadPolicy(_$companyAtom);
    _$companyAtom.reportObserved();
    return super.company;
  }

  @override
  set company(String value) {
    _$companyAtom.context.conditionallyRunInAction(() {
      super.company = value;
      _$companyAtom.reportChanged();
    }, _$companyAtom, name: '${_$companyAtom.name}_set');
  }

  final _$isValidAtom = Atom(name: '_RegisterControllerBase.isValid');

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

  final _$_RegisterControllerBaseActionController =
      ActionController(name: '_RegisterControllerBase');

  @override
  dynamic verifyFirstPage() {
    final _$actionInfo =
        _$_RegisterControllerBaseActionController.startAction();
    try {
      return super.verifyFirstPage();
    } finally {
      _$_RegisterControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic verifyPersonPage() {
    final _$actionInfo =
        _$_RegisterControllerBaseActionController.startAction();
    try {
      return super.verifyPersonPage();
    } finally {
      _$_RegisterControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic registerUser() {
    final _$actionInfo =
        _$_RegisterControllerBaseActionController.startAction();
    try {
      return super.registerUser();
    } finally {
      _$_RegisterControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    final string =
        'email: ${email.toString()},errorEmail: ${errorEmail.toString()},password: ${password.toString()},errorPassword: ${errorPassword.toString()},confirmPassword: ${confirmPassword.toString()},errorConfirm: ${errorConfirm.toString()},name: ${name.toString()},errorName: ${errorName.toString()},cpfCnpj: ${cpfCnpj.toString()},phone: ${phone.toString()},errorPhone: ${errorPhone.toString()},company: ${company.toString()},isValid: ${isValid.toString()},verifyEmail: ${verifyEmail.toString()},verifyPassword: ${verifyPassword.toString()},verifyConfirm: ${verifyConfirm.toString()},verifyName: ${verifyName.toString()},verifyPhone: ${verifyPhone.toString()}';
    return '{$string}';
  }
}
