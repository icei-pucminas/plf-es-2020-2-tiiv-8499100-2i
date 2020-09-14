// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'VideoCategoryDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

VideoCategoryDTO _$VideoCategoryDTOFromJson(Map<String, dynamic> json) {
  return VideoCategoryDTO(
    id: json['video_category_id'] as String,
    name: json['name'] as String,
  );
}

Map<String, dynamic> _$VideoCategoryDTOToJson(VideoCategoryDTO instance) =>
    <String, dynamic>{
      'video_category_id': instance.id,
      'name': instance.name,
    };
