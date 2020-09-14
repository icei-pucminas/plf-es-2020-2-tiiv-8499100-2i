import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:flutter_youtube/flutter_youtube.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_container.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/video/VideoDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/video/video_categories_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';
import 'package:inteligenciaindustrialapp/src/configs/app_config.dart';

class VideoScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Observer(
      builder: (_) {
        if (videoController.videos.isPending) {
          return Padding(
            padding: EdgeInsets.all(24),
            child: Column(
              children: <Widget>[
                CustomContainer(
                  radius: 2,
                  height: 200,
                  useSkeleton: true,
                ),
                SizedBox(
                  height: 20,
                ),
                CustomContainer(
                  radius: 2,
                  height: 200,
                  useSkeleton: true,
                ),
              ],
            ),
          );
        } else {
          return SingleChildScrollView(
            child: Column(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.only(top: 24, left: 24, right: 24),
                  child: FlatButton(
                    padding: EdgeInsets.all(0),
                    onPressed: () {
                      homeController.setBody(VideoCategoriesScreen());
                    },
                    child: Row(
                      children: <Widget>[
                        Icon(
                          Icons.chevron_left,
                          color: Colors.blueAccent,
                        ),
                        SizedBox(
                          width: 5,
                        ),
                        Text(
                          'Voltar',
                          style: TextStyle(color: Colors.blueAccent),
                        )
                      ],
                    ),
                  ),
                ),
                SizedBox(
                  height: 5,
                ),
                Padding(
                  padding: EdgeInsets.only(bottom: 80),
                  child: ListView.separated(
                    shrinkWrap: true,
                    physics: NeverScrollableScrollPhysics(),
                    padding: EdgeInsets.only(left: 24, right: 24, bottom: 24),
                    separatorBuilder: (context, index) {
                      return SizedBox(
                        height: 20,
                      );
                    },
                    itemCount: videoController.videos.getData.length,
                    itemBuilder: (context, index) {
                      return this._buildVideoContainer(
                          videoController.videos.getData[index], context);
                    },
                  ),
                ),
              ],
            ),
          );
        }
      },
    );
  }

  _buildVideoContainer(VideoDTO video, BuildContext context) {
    return CustomContainer(
        onTap: () {
          videoController.sendStatistic(videoId: video.id);
          FlutterYoutube.playYoutubeVideoByUrl(
            apiKey: APP_CONFIG.API_YOUTUBE,
            videoUrl: video.youtubeUrl,
            autoPlay: true,
          );
        },
        useSkeleton: video == null,
        radius: 2,
        color: ColorsStyle.background,
        shadowColor: ColorsStyle.grayDark,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Stack(
              alignment: Alignment.center,
              children: <Widget>[
                ColorFiltered(
                  colorFilter: ColorFilter.mode(
                      Colors.black.withOpacity(0.4), BlendMode.multiply),
                  child: FadeInImage.assetNetwork(
                    alignment: Alignment.topCenter, // add this
                    placeholder: 'image',
                    image: video != null
                        ? video.img
                        : 'https://firebasestorage.googleapis.com/v0/b/ii-tec.appspot.com/o/img%2Foleo-gas.jpeg?alt=media&token=19de4a94-840c-4e8e-b712-b43bfdb5a1bc',
                    fit: BoxFit.fitWidth,
                  ),
                ),
                Icon(
                  Icons.play_circle_filled,
                  size: 100,
                ),
              ],
            ),
            Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    video != null ? video.title : 'Titulo',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                ],
              ),
            ),
          ],
        ));
  }
}
