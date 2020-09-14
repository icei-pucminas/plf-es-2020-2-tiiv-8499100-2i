import 'package:json_annotation/json_annotation.dart';

part 'CalculatorStatisticDTO.g.dart';

@JsonSerializable()
class CalculatorStatisticDTO {
  String calculator_type;
  String user_id;

  CalculatorStatisticDTO({this.calculator_type, this.user_id});

  factory CalculatorStatisticDTO.fromJson(Map<String, dynamic> json) =>
      _$CalculatorStatisticDTOFromJson(json);

  Map<String, dynamic> toJson() => _$CalculatorStatisticDTOToJson(this);
}
