import 'package:flutter/material.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';

class CategoryUtil {
  static buildItem({String title, bool top, Function action}) {
    return FlatButton(
      padding: EdgeInsets.all(0),
      onPressed: action,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          top
              ? Container(
                  color: ColorsStyle.grayLight,
                  height: 1,
                )
              : SizedBox.shrink(),
          SizedBox(
            height: 15,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Text(title),
              Icon(Icons.chevron_right),
            ],
          ),
          SizedBox(
            height: 15,
          ),
          Container(
            color: ColorsStyle.grayLight,
            height: 1,
          ),
        ],
      ),
    );
  }
}
