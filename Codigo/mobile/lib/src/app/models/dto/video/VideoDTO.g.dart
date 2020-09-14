// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'VideoDTO.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

VideoDTO _$VideoDTOFromJson(Map<String, dynamic> json) {
  return VideoDTO(
    id: json['video_id'] as String,
    title: json['title'] as String,
    youtubeUrl: json['youtube_url'] as String,
  );
}

Map<String, dynamic> _$VideoDTOToJson(VideoDTO instance) => <String, dynamic>{
      'video_id': instance.id,
      'title': instance.title,
      'youtube_url': instance.youtubeUrl,
    };
