import 'package:json_annotation/json_annotation.dart';

part 'VideoDTO.g.dart';

@JsonSerializable()
class VideoDTO {
  @JsonKey(name: 'video_id')
  String id;

  String title;

  @JsonKey(name: 'youtube_url')
  String youtubeUrl;

  String get img {
    return 'https://i.ytimg.com/vi/${youtubeUrl.split('v=')[1]}/hqdefault.jpg';
  }

  VideoDTO({this.id, this.title, this.youtubeUrl});

  factory VideoDTO.fromJson(Map<String, dynamic> json) =>
      _$VideoDTOFromJson(json);

  Map<String, dynamic> toJson() => _$VideoDTOToJson(this);
}
