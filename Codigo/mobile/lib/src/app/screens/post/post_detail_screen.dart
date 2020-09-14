import 'package:flutter/material.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/post/PostDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';
import 'package:intl/intl.dart';

class PostDetailScreen extends StatelessWidget {
  final PostDTO post;

  const PostDetailScreen({Key key, @required this.post}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        elevation: 0,
        centerTitle: false,
        automaticallyImplyLeading: false,
        titleSpacing: 0,
        title: Row(
          children: <Widget>[
            IconButton(
              icon: Icon(
                Icons.arrow_back_ios,
                size: 16,
                color: Colors.white,
              ),
              onPressed: () {
                frwkNavigator.popNavigate();
              },
            ),
          ],
        ),
      ),
      backgroundColor: ColorsStyle.background,
      body: _buildBody(),
    );
  }

  _buildBody() {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          FadeInImage.assetNetwork(
            alignment: Alignment.topCenter, // add this
            placeholder: 'dummyimage',
            image: post.img,
            fit: BoxFit.fitWidth,
          ),
          Padding(
            padding: EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  post.title,
                  style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  DateFormat.yMMMMd().format(DateTime.parse(post.date)),
                  style: TextStyle(
                      fontWeight: FontWeight.bold, color: ColorsStyle.gray),
                ),
                SizedBox(
                  height: 5,
                ),
                SizedBox(
                  height: 1,
                  child: Container(
                    color: ColorsStyle.grayLight,
                  ),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  post.body,
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
