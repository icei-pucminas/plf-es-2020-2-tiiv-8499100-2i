import 'package:json_annotation/json_annotation.dart';

part 'SymbolCategoryDTO.g.dart';

@JsonSerializable()
class SymbolCategoryDTO {
  @JsonKey(name: 'symbol_category_id')
  String id;
  String name;

  SymbolCategoryDTO({this.id, this.name});

  factory SymbolCategoryDTO.fromJson(Map<String, dynamic> json) =>
      _$SymbolCategoryDTOFromJson(json);

  Map<String, dynamic> toJson() => _$SymbolCategoryDTOToJson(this);
}
