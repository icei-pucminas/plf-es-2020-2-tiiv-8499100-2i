// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'PostDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PostDTO _$PostDTOFromJson(Map<String, dynamic> json) {
  return PostDTO(
    id: json['post_id'] as String,
    title: json['title'] as String,
    body: json['body'] as String,
    date: json['date'] as String,
    img: json['img'] as String,
    userRequired: json['user_required'] as bool,
  );
}

Map<String, dynamic> _$PostDTOToJson(PostDTO instance) => <String, dynamic>{
      'post_id': instance.id,
      'title': instance.title,
      'body': instance.body,
      'date': instance.date,
      'img': instance.img,
      'user_required': instance.userRequired,
    };
