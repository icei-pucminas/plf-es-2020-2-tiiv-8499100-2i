// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'symbol_controller.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$SymbolController on _SymbolControllerBase, Store {
  final _$_SymbolControllerBaseActionController =
      ActionController(name: '_SymbolControllerBase');

  @override
  dynamic getSymbolsBySubcategory(String subcategoryId) {
    final _$actionInfo = _$_SymbolControllerBaseActionController.startAction();
    try {
      return super.getSymbolsBySubcategory(subcategoryId);
    } finally {
      _$_SymbolControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic getSymbolsCategories() {
    final _$actionInfo = _$_SymbolControllerBaseActionController.startAction();
    try {
      return super.getSymbolsCategories();
    } finally {
      _$_SymbolControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic getSymbolsSubcategories(String categoryId) {
    final _$actionInfo = _$_SymbolControllerBaseActionController.startAction();
    try {
      return super.getSymbolsSubcategories(categoryId);
    } finally {
      _$_SymbolControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  dynamic sendStatistic({String symbolId}) {
    final _$actionInfo = _$_SymbolControllerBaseActionController.startAction();
    try {
      return super.sendStatistic(symbolId: symbolId);
    } finally {
      _$_SymbolControllerBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    final string = '';
    return '{$string}';
  }
}
