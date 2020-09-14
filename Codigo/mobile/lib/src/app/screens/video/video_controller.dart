import 'package:inteligenciaindustrialapp/src/app/models/dto/video/VideoDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/video/category/VideoCategoryDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/services/service_status_data.dart';
import 'package:inteligenciaindustrialapp/src/app/services/video_service.dart';
import 'package:mobx/mobx.dart';

part 'video_controller.g.dart';

class VideoController = _VideoControllerBase with _$VideoController;

abstract class _VideoControllerBase with Store {
  final _videoService = VideoService();
  ServiceStatusData<List<VideoCategoryDTO>> videosCategories =
      ServiceStatusData();
  ServiceStatusData<List<VideoDTO>> videos = ServiceStatusData();

  @action
  getVideoCategories() {
    videosCategories.setPending();
    this._videoService.getCategoriesVideos().then((response) {
      videosCategories.setDone(response);
    }).catchError((error) {
      videosCategories.setError(error);
    });
  }

  @action
  getVideosByCategory(String categoryId) {
    videos.setPending();
    this
        ._videoService
        .getVideosByCategory(categoryId: categoryId)
        .then((response) {
      videos.setDone(response);
    }).catchError((error) {
      videos.setError(error);
    });
  }

  @action
  sendStatistic({String videoId}) {
    _videoService.sendStatistic(videoId: videoId);
  }
}
