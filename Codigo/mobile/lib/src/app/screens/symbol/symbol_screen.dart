import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_container.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/SymbolDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/symbol/symbol_detail_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/symbol/symbol_subcategories_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';

class SymbolScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Observer(
      builder: (_) {
        if (symbolController.symbols.isPending) {
          return GridView.count(
            primary: false,
            padding: const EdgeInsets.all(24),
            crossAxisSpacing: 4,
            mainAxisSpacing: 4,
            crossAxisCount: 2,
            children: <Widget>[
              _buildContainerSkeleton(),
              _buildContainerSkeleton(),
              _buildContainerSkeleton(),
              _buildContainerSkeleton(),
            ],
          );
        } else {
          return SingleChildScrollView(
            padding: EdgeInsets.all(24),
            child: Column(
              children: <Widget>[
                FlatButton(
                  padding: EdgeInsets.all(0),
                  onPressed: () {
                    homeController.setBody(SymbolSubcategoriesScreen());
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
                SizedBox(
                  height: 5,
                ),
                GridView.builder(
                  shrinkWrap: true,
                  physics: NeverScrollableScrollPhysics(),
                  itemCount: symbolController.symbols.getData.length,
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      crossAxisSpacing: 10.0,
                      mainAxisSpacing: 10.0),
                  itemBuilder: (context, index) {
                    SymbolDTO symbol = symbolController.symbols.getData[index];
                    return CustomContainer(
                      onTap: () {
                        symbolController.sendStatistic(symbolId: symbol.id);
                        frwkNavigator.navigate(
                            SymbolDetailScreen(
                              symbol: symbol,
                            ),
                            modal: true);
                      },
                      radius: 2,
                      color: ColorsStyle.background,
                      shadowColor: ColorsStyle.grayDark,
                      child: Column(
                        children: <Widget>[
                          FadeInImage.assetNetwork(
                            alignment: Alignment.topCenter, // add this
                            placeholder: 'image',
                            image: symbol.img,
                            fit: BoxFit.fitWidth,
                            height: 150,
                          ),
                          Text(symbol.title),
                        ],
                      ),
                    );
                  },
                ),
              ],
            ),
          );
        }
      },
    );
  }

  _buildContainerSkeleton() {
    return CustomContainer(
      padding: EdgeInsets.all(10),
      radius: 2,
      useSkeleton: true,
      child: Center(
        child: Text(''),
      ),
    );
  }
}
