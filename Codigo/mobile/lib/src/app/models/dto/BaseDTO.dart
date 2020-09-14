import 'package:json_annotation/json_annotation.dart';

part 'BaseDTO.g.dart';

@JsonSerializable()
class BaseDTO {
  String message;

  BaseDTO({this.message});

  factory BaseDTO.fromJson(Map<String, dynamic> json) =>
      _$BaseDTOFromJson(json);

  Map<String, dynamic> toJson() => _$BaseDTOToJson(this);
}
