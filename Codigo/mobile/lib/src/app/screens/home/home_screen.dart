import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/auth/login_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/auth/user_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/calculator/calculator_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/post/post_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/symbol/symbol_categories_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/video/video_categories_screen.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen>
    with SingleTickerProviderStateMixin {
  //final _homeController = HomeController();
  List<String> tabs = ['Início', 'Símbolos', 'Vídeos', 'Fórum', 'Calculadoras'];
  var _curIndex = 0;
  String contents = "Home";

  @override
  void initState() {
    homeController.init();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorsStyle.background,
      appBar: this._buildAppBar(context),
      extendBody: true,
      body: _buildBody(context),
      bottomNavigationBar: _indexBottom(),
    );
  }

  _buildAppBar(BuildContext context) {
    return AppBar(
      automaticallyImplyLeading: false,
      elevation: 2,
      title: Row(
        children: <Widget>[
          Image.asset(
            'assets/images/logo2i.png',
            height: 32,
          ),
          SizedBox(
            width: 8,
          ),
          Text('inteligência industrial')
        ],
      ),
      actions: <Widget>[
        IconButton(
          onPressed: () {
            if (userController.user.isDone)
              frwkNavigator.navigate(UserScreen(), modal: true);
            else
              frwkNavigator.navigate(LoginScreen(), modal: true);
          },
          icon: Icon(
            Icons.account_circle,
            color: Colors.white,
          ),
        )
      ],
    );
  }

  Widget _indexBottom() => Theme(
        data: ThemeData(canvasColor: ColorsStyle.background),
        child: BottomNavigationBar(
          items: [
            _buildItemMenu('Home', Icons.home, 0),
            _buildItemMenu('Símbolos', Icons.category, 1),
            _buildItemMenu('Vídeos', Icons.video_library, 2),
            _buildItemMenu('Fórum', Icons.message, 3),
            _buildItemMenu('Calculadoras', Icons.functions, 4),
          ],
          type: BottomNavigationBarType.fixed,
          currentIndex: _curIndex,
          onTap: (index) {
            setState(() {
              _curIndex = index;
              switch (_curIndex) {
                case 0:
                  homeController.getPosts();
                  homeController.setBody(PostScreen());
                  break;
                case 1:
                  symbolController.getSymbolsCategories();
                  homeController.setBody(SymbolCategoriesScreen());
                  break;
                case 2:
                  videoController.getVideoCategories();
                  homeController.setBody(VideoCategoriesScreen());
                  break;
                case 3:
                  homeController.setBody(Center(
                    child: Text('Fórum'),
                  ));
                  break;
                case 4:
                  homeController.setBody(CalculatorScreen());
                  break;
              }
            });
          },
        ),
      );

  _buildItemMenu(String title, IconData icon, int index) {
    return BottomNavigationBarItem(
      icon: Icon(
        icon,
        size: 22,
      ),
      title: Text(
        title,
        style: TextStyle(
            color: _curIndex == index ? Colors.blue : Colors.black54,
            fontSize: 12),
      ),
      activeIcon: Icon(
        icon,
        color: Colors.blue,
        size: 22,
      ),
    );
  }

  _buildBody(BuildContext context) {
    return Observer(
      builder: (_) {
        return homeController.body;
      },
    );
  }
}
