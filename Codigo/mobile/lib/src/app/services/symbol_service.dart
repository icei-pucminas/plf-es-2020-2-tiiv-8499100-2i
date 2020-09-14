import 'package:inteligenciaindustrialapp/src/app/models/dto/statistic/SymbolStatisticDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/SymbolDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/category/SymbolCategoryDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/subcategory/SymbolSubcategoryDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/network/network_service.dart';

import 'base_service.dart';

class SymbolService extends BaseService {
  Future<List<SymbolDTO>> getSymbols() {
    return this
        .request(HttpMethod.GET, 'symbol', headers: headers)
        .then((response) {
      if (response == null) return null;
      List symbols = response as List;
      return symbols.map((symbol) => SymbolDTO.fromJson(symbol)).toList();
    }).catchError((error) {
      throw (error);
    });
  }

  Future<List<SymbolCategoryDTO>> getCategoriesSymbols() {
    return this
        .request(HttpMethod.GET, 'symbol_category', headers: headers)
        .then((response) {
      if (response == null) return null;
      List categories = response as List;
      return categories
          .map((symbol) => SymbolCategoryDTO.fromJson(symbol))
          .toList();
    }).catchError((error) {
      throw (error);
    });
  }

  Future<List<SymbolSubcategoryDTO>> getSubcategoriesByCategorySymbols(
      {String categoryId}) {
    return this
        .request(HttpMethod.GET, 'symbol_sub_category/category/$categoryId',
            headers: headers)
        .then((response) {
      if (response == null) return null;
      List subcategories = response as List;
      return subcategories
          .map((symbol) => SymbolSubcategoryDTO.fromJson(symbol))
          .toList();
    }).catchError((error) {
      throw (error);
    });
  }

  Future<List<SymbolDTO>> getSymbolsBySubcategory({String subcategoryId}) {
    return this
        .request(HttpMethod.GET, 'symbol/sub_category/$subcategoryId',
            headers: headers)
        .then((response) {
      if (response == null) return null;
      List symbols = response as List;
      return symbols.map((symbol) => SymbolDTO.fromJson(symbol)).toList();
    }).catchError((error) {
      throw (error);
    });
  }

  sendStatistic({String symbolId}) {
    SymbolStatisticDTO statisticDTO = SymbolStatisticDTO(
        symbol_id: symbolId, user_id: userController.user.getData?.id ?? '');
    this.request(HttpMethod.POST, 'symbol_view',
        headers: headers, body: statisticDTO.toJson());
  }
}
