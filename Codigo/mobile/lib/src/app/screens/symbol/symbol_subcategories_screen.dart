import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_container.dart';
import 'package:inteligenciaindustrialapp/src/app/models/dto/symbol/subcategory/SymbolSubcategoryDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/symbol/symbol_categories_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/symbol/symbol_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/category_util.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';

class SymbolSubcategoriesScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Observer(
      builder: (_) {
        if (symbolController.symbolsSubcategories.isPending) {
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
            padding: EdgeInsets.all(24),
            child: Column(
              children: <Widget>[
                FlatButton(
                  padding: EdgeInsets.all(0),
                  onPressed: () {
                    homeController.setBody(SymbolCategoriesScreen());
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
                ListView.builder(
                  shrinkWrap: true,
                  physics: NeverScrollableScrollPhysics(),
                  itemCount:
                      symbolController.symbolsSubcategories.getData.length,
                  itemBuilder: (context, index) {
                    SymbolSubcategoryDTO subcategory =
                        symbolController.symbolsSubcategories.getData[index];
                    return CategoryUtil.buildItem(
                        title: subcategory.name,
                        top: index == 0,
                        action: () {
                          symbolController
                              .getSymbolsBySubcategory(subcategory.id);
                          homeController.setBody(SymbolScreen());
                        });
                  },
                )
              ],
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
