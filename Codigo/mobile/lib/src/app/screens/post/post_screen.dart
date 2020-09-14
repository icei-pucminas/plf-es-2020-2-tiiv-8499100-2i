import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_container.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/post/PostDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/post/post_detail_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';
import 'package:intl/intl.dart';

class PostScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Observer(
      builder: (_) {
        if (homeController.posts.isPending) {
          return SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.all(24),
              child: Column(
                children: <Widget>[
                  CustomContainer(
                    radius: 2,
                    height: 250,
                    useSkeleton: true,
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  CustomContainer(
                    radius: 2,
                    height: 250,
                    useSkeleton: true,
                  ),
                ],
              ),
            ),
          );
        } else {
          homeController.posts.getData.sort((a, b) =>
              DateTime.parse(b.date).compareTo(DateTime.parse(a.date)));

          return SingleChildScrollView(
            child: Column(
              children: <Widget>[
                ListView.separated(
                  shrinkWrap: true,
                  physics: NeverScrollableScrollPhysics(),
                  separatorBuilder: (context, index) {
                    return SizedBox(
                      height: 20,
                    );
                  },
                  itemCount: homeController.posts.getData.length,
                  padding: EdgeInsets.all(24),
                  itemBuilder: (context, index) {
                    return this._buildPostContainer(
                        homeController.posts.getData[index]);
                  },
                ),
                SizedBox(
                  height: 50,
                )
              ],
            ),
          );
        }
      },
    );
  }

  _buildPostContainer(PostDTO post) {
    return CustomContainer(
        onTap: () {
          homeController.sendStatisticPost(postId: post.id);

          frwkNavigator.navigate(
              PostDetailScreen(
                post: post,
              ),
              modal: true);
        },
        useSkeleton: post == null,
        radius: 2,
        color: ColorsStyle.background,
        shadowColor: ColorsStyle.grayDark,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            FadeInImage.assetNetwork(
              alignment: Alignment.topCenter, // add this
              placeholder: 'image',
              image: post != null
                  ? post.img
                  : 'https://firebasestorage.googleapis.com/v0/b/ii-tec.appspot.com/o/img%2Foleo-gas.jpeg?alt=media&token=19de4a94-840c-4e8e-b712-b43bfdb5a1bc',
              fit: BoxFit.fitWidth,
            ),
            Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    post != null ? post.title : 'Titulo',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Text(
                    post != null
                        ? DateFormat.yMMMMd().format(DateTime.parse(post.date))
                        : '30/03/2020',
                    style: TextStyle(
                        fontWeight: FontWeight.bold, color: ColorsStyle.gray),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Text(
                    post != null
                        ? _buildSuccinctBody(post.body)
                        : 'Existem diversos beneficios alcandos ao...',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.only(left: 20, right: 20),
              child: FlatButton(
                child: Text(
                  'Ver mais',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
                ),
                onPressed: () {
                  homeController.sendStatisticPost(postId: post.id);
                  frwkNavigator.navigate(
                      PostDetailScreen(
                        post: post,
                      ),
                      modal: true);
                },
              ),
            )
          ],
        ));
  }

  _buildSuccinctBody(String text) {
    if (text != null) {
      var explodeBody = text.split(' ');
      int size = explodeBody.length;
      num percentOfText = size * 0.1;
      String succinctText = '';
      for (int i = 0; i < percentOfText; i++) {
        if (i == 0) {
          succinctText = explodeBody[i];
        } else {
          succinctText = succinctText + ' ' + explodeBody[i];
        }
      }

      succinctText += '...';

      return succinctText;
    } else {
      return '';
    }
  }
}
