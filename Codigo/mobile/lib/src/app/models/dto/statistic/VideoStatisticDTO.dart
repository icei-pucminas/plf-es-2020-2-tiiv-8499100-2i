import 'package:json_annotation/json_annotation.dart';

part 'VideoStatisticDTO.g.dart';

@JsonSerializable()
class VideoStatisticDTO {
  String video_id;
  String user_id;

  VideoStatisticDTO({this.video_id, this.user_id});

  factory VideoStatisticDTO.fromJson(Map<String, dynamic> json) =>
      _$VideoStatisticDTOFromJson(json);

  Map<String, dynamic> toJson() => _$VideoStatisticDTOToJson(this);
}
