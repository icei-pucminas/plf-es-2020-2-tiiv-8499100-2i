import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/SymbolDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/category/SymbolCategoryDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/subcategory/SymbolSubcategoryDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/services/service_status_data.dart';
import 'package:inteligenciaindustrialapp/src/app/services/symbol_service.dart';
import 'package:mobx/mobx.dart';

part 'symbol_controller.g.dart';

class SymbolController = _SymbolControllerBase with _$SymbolController;

abstract class _SymbolControllerBase with Store {
  final _symbolService = SymbolService();
  ServiceStatusData<List<SymbolDTO>> symbols = ServiceStatusData();
  ServiceStatusData<List<SymbolCategoryDTO>> symbolsCategories =
      ServiceStatusData();
  ServiceStatusData<List<SymbolSubcategoryDTO>> symbolsSubcategories =
      ServiceStatusData();

  @action
  getSymbolsBySubcategory(String subcategoryId) {
    symbols.setPending();
    this
        ._symbolService
        .getSymbolsBySubcategory(subcategoryId: subcategoryId)
        .then((response) {
      symbols.setDone(response);
    }).catchError((error) {
      symbols.setError(error);
    });
  }

  @action
  getSymbolsCategories() {
    symbolsCategories.setPending();
    this._symbolService.getCategoriesSymbols().then((response) {
      symbolsCategories.setDone(response);
    }).catchError((error) {
      symbolsCategories.setError(error);
    });
  }

  @action
  getSymbolsSubcategories(String categoryId) {
    symbolsSubcategories.setPending();
    this
        ._symbolService
        .getSubcategoriesByCategorySymbols(categoryId: categoryId)
        .then((response) {
      symbolsSubcategories.setDone(response);
    }).catchError((error) {
      symbolsSubcategories.setError(error);
    });
  }

  @action
  sendStatistic({String symbolId}) {
    _symbolService.sendStatistic(symbolId: symbolId);
  }
}
