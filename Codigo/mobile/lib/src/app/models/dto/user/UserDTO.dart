import 'package:json_annotation/json_annotation.dart';

part 'UserDTO.g.dart';

@JsonSerializable()
class UserDTO {
  @JsonKey(name: 'user_id')
  String id;

  String name;

  String phone;

  String document;

  @JsonKey(name: 'business_name')
  String companyName;

  String message;

  UserDTO({this.id, this.message});

  factory UserDTO.fromJson(Map<String, dynamic> json) =>
      _$UserDTOFromJson(json);

  Map<String, dynamic> toJson() => _$UserDTOToJson(this);
}
