import 'package:flutter/material.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/SymbolDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';

class SymbolDetailScreen extends StatelessWidget {
  final SymbolDTO symbol;

  const SymbolDetailScreen({Key key, this.symbol}) : super(key: key);

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
            Text(symbol.title),
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
            image: symbol.img,
            fit: BoxFit.fitWidth,
          ),
          Padding(
            padding: EdgeInsets.all(20),
            child: Text(
              symbol.body,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
          ),
        ],
      ),
    );
  }
}
