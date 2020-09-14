// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'PostStatisticDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PostStatisticDTO _$PostStatisticDTOFromJson(Map<String, dynamic> json) {
  return PostStatisticDTO(
    post_id: json['post_id'] as String,
    user_id: json['user_id'] as String,
  );
}

Map<String, dynamic> _$PostStatisticDTOToJson(PostStatisticDTO instance) =>
    <String, dynamic>{
      'post_id': instance.post_id,
      'user_id': instance.user_id,
    };
