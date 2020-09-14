import 'package:json_annotation/json_annotation.dart';

part 'SymbolDTO.g.dart';

@JsonSerializable()
class SymbolDTO {
  @JsonKey(name: 'symbol_id')
  String id;
  String title;
  String body;
  String img;

  SymbolDTO({this.id, this.title, this.body, this.img});

  factory SymbolDTO.fromJson(Map<String, dynamic> json) =>
      _$SymbolDTOFromJson(json);

  Map<String, dynamic> toJson() => _$SymbolDTOToJson(this);
}
