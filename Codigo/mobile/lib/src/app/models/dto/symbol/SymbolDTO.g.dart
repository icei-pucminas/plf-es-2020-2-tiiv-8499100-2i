// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'SymbolDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

SymbolDTO _$SymbolDTOFromJson(Map<String, dynamic> json) {
  return SymbolDTO(
    id: json['symbol_id'] as String,
    title: json['title'] as String,
    body: json['body'] as String,
    img: json['img'] as String,
  );
}

Map<String, dynamic> _$SymbolDTOToJson(SymbolDTO instance) => <String, dynamic>{
      'symbol_id': instance.id,
      'title': instance.title,
      'body': instance.body,
      'img': instance.img,
    };
