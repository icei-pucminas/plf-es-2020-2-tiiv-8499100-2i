// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'UserDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserDTO _$UserDTOFromJson(Map<String, dynamic> json) {
  return UserDTO(
    id: json['user_id'] as String,
    message: json['message'] as String,
  )
    ..name = json['name'] as String
    ..phone = json['phone'] as String
    ..document = json['document'] as String
    ..companyName = json['business_name'] as String;
}

Map<String, dynamic> _$UserDTOToJson(UserDTO instance) => <String, dynamic>{
      'user_id': instance.id,
      'name': instance.name,
      'phone': instance.phone,
      'document': instance.document,
      'business_name': instance.companyName,
      'message': instance.message,
    };
