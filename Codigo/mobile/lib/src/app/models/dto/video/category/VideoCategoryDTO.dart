import 'package:json_annotation/json_annotation.dart';

part 'VideoCategoryDTO.g.dart';

@JsonSerializable()
class VideoCategoryDTO {
  @JsonKey(name: 'video_category_id')
  String id;
  String name;

  VideoCategoryDTO({this.id, this.name});

  factory VideoCategoryDTO.fromJson(Map<String, dynamic> json) =>
      _$VideoCategoryDTOFromJson(json);

  Map<String, dynamic> toJson() => _$VideoCategoryDTOToJson(this);
}
