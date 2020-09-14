import 'package:flutter/cupertino.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/post/PostDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/post/post_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/services/post_service.dart';
import 'package:inteligenciaindustrialapp/src/app/services/service_status_data.dart';
import 'package:mobx/mobx.dart';

part 'home_controller.g.dart';

class HomeController = _HomeControllerBase with _$HomeController;

abstract class _HomeControllerBase with Store {
  final _postService = PostService();
  ServiceStatusData<List<PostDTO>> posts = ServiceStatusData();

  @action
  init() {
    body = PostScreen();
    getPosts();
  }

  @observable
  Widget body;

  @action
  setBody(Widget body) {
    this.body = body;
  }

  @action
  getPosts() {
    posts.setPending();
    this._postService.getPosts().then((response) {
      posts.setDone(response);
    }).catchError((error) {
      posts.setError(error);
    });
  }

  @action
  sendStatisticPost({String postId}) {
    _postService.sendStatistic(postId: postId);
  }
}
