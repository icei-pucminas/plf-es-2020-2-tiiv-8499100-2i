import 'package:json_annotation/json_annotation.dart';

part 'SymbolStatisticDTO.g.dart';

@JsonSerializable()
class SymbolStatisticDTO {
  String symbol_id;
  String user_id;

  SymbolStatisticDTO({this.symbol_id, this.user_id});

  factory SymbolStatisticDTO.fromJson(Map<String, dynamic> json) =>
      _$SymbolStatisticDTOFromJson(json);

  Map<String, dynamic> toJson() => _$SymbolStatisticDTOToJson(this);
}
