import 'package:flutter/material.dart';

class CustomButtonWidget extends StatelessWidget {
  final Widget title;
  final Color backgroundColor;
  final EdgeInsets margin;
  final Function onPressed;
  final double height;
  final double radius;
  final Color borderColor;

  CustomButtonWidget(
      {@required this.title,
      @required this.backgroundColor,
      @required this.onPressed,
      @required this.height,
      this.margin,
      this.radius,
      this.borderColor});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: this.height,
      margin: this.margin,
      child: FlatButton(
        onPressed: onPressed,
        color: this.backgroundColor,
        child: this.title,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(this.radius ?? 4),
            side: borderColor != null
                ? BorderSide(width: 2, color: borderColor)
                : BorderSide.none),
      ),
    );
  }
}
