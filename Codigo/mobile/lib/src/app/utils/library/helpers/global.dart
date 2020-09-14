import 'package:get_it/get_it.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/auth/login_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/auth/register_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/home/home_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/symbol/symbol_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/video/video_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/shared/alert-dialog/alert_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/shared/alert-dialog/loading_hud.dart';
import 'package:inteligenciaindustrialapp/src/app/shared/auth/authenticated_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/shared/loading-screen/loading_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/shared/navigator/navigator_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/network/network_cache.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/network/network_service.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/translate/global_translations.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/translate/translations_controller.dart';

final frwkLanguage = GetIt.I<GlobalTranslations>();
final frwkTranslation = GetIt.I<TranslationsController>();

final frwkNetwork = GetIt.I<NetworkService>();
final frwkNetworkCache = GetIt.I<NetworkCache>();
final frwkLoading = GetIt.I<LoadingController>();
final frwkNavigator = GetIt.I<NavigatorController>();
final frwkAlert = GetIt.I<AlertController>();
final frwkLoadHud = GetIt.I<LoadingHUD>();

final frwkAuth = GetIt.I<AuthenticatedController>();

final homeController = GetIt.I<HomeController>();
final symbolController = GetIt.I<SymbolController>();
final videoController = GetIt.I<VideoController>();
final registerController = GetIt.I<RegisterController>();
final userController = GetIt.I<LoginController>();
