// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'CalculatorStatisticDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CalculatorStatisticDTO _$CalculatorStatisticDTOFromJson(
    Map<String, dynamic> json) {
  return CalculatorStatisticDTO(
    calculator_type: json['calculator_type'] as String,
    user_id: json['user_id'] as String,
  );
}

Map<String, dynamic> _$CalculatorStatisticDTOToJson(
        CalculatorStatisticDTO instance) =>
    <String, dynamic>{
      'calculator_type': instance.calculator_type,
      'user_id': instance.user_id,
    };
