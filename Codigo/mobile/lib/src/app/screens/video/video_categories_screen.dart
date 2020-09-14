import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_container.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/video/category/VideoCategoryDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/video/video_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/category_util.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';

class VideoCategoriesScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Observer(
      builder: (_) {
        if (videoController.videosCategories.isPending) {
          return Padding(
            padding: EdgeInsets.all(24),
            child: Column(
              children: <Widget>[
                _buildFakeSeparator(),
                SizedBox(
                  height: 1,
                ),
                _buildFakeSeparator(),
              ],
            ),
          );
        } else {
          return SingleChildScrollView(
            child: ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: videoController.videosCategories.getData.length,
              padding: EdgeInsets.all(24),
              itemBuilder: (context, index) {
                VideoCategoryDTO category =
                    videoController.videosCategories.getData[index];

                return CategoryUtil.buildItem(
                    title: category.name,
                    top: index == 0,
                    action: () {
                      videoController.getVideosByCategory(category.id);
                      homeController.setBody(VideoScreen());
                    });
              },
            ),
          );
        }
      },
    );
  }

  _buildFakeSeparator() {
    return CustomContainer(
      radius: 2,
      height: 50,
      useSkeleton: true,
    );
  }
}
