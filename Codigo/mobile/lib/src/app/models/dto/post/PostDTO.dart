import 'package:json_annotation/json_annotation.dart';

part 'PostDTO.g.dart';

@JsonSerializable()
class PostDTO {
  @JsonKey(name: 'post_id')
  String id;

  String title;
  String body;
  String date;
  String img;

  @JsonKey(name: 'user_required')
  bool userRequired;

  PostDTO(
      {this.id, this.title, this.body, this.date, this.img, this.userRequired});

  factory PostDTO.fromJson(Map<String, dynamic> json) =>
      _$PostDTOFromJson(json);

  Map<String, dynamic> toJson() => _$PostDTOToJson(this);
}
