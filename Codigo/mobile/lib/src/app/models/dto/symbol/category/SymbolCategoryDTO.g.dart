// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'SymbolCategoryDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

SymbolCategoryDTO _$SymbolCategoryDTOFromJson(Map<String, dynamic> json) {
  return SymbolCategoryDTO(
    id: json['symbol_category_id'] as String,
    name: json['name'] as String,
  );
}

Map<String, dynamic> _$SymbolCategoryDTOToJson(SymbolCategoryDTO instance) =>
    <String, dynamic>{
      'symbol_category_id': instance.id,
      'name': instance.name,
    };
