import 'package:json_annotation/json_annotation.dart';

part 'SymbolSubcategoryDTO.g.dart';

@JsonSerializable()
class SymbolSubcategoryDTO {
  @JsonKey(name: 'symbol_sub_category_id')
  String id;
  String name;

  SymbolSubcategoryDTO({this.id, this.name});

  factory SymbolSubcategoryDTO.fromJson(Map<String, dynamic> json) =>
      _$SymbolSubcategoryDTOFromJson(json);

  Map<String, dynamic> toJson() => _$SymbolSubcategoryDTOToJson(this);
}
