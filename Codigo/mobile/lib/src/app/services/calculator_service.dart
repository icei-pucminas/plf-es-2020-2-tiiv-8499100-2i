import 'package:inteligenciaindustrialapp/src/app/models/dto/statistic/CalculatorStatisticDTO.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/library/helpers/global.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/network/network_service.dart';

import 'base_service.dart';

class CalculatorService extends BaseService {
  sendStatistic({String type}) {
    CalculatorStatisticDTO statisticDTO = CalculatorStatisticDTO(
        calculator_type: type, user_id: userController.user.getData?.id ?? '');
    this.request(HttpMethod.POST, 'calculator_view',
        headers: headers, body: statisticDTO.toJson());
  }
}
