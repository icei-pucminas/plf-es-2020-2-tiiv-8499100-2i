import 'package:inteligenciaindustrialapp/src/app/services/calculator_service.dart';
import 'package:mobx/mobx.dart';

part 'calculator_controller.g.dart';

class CalculatorController = _CalculatorControllerBase
    with _$CalculatorController;

abstract class _CalculatorControllerBase with Store {
  final _calculatorService = CalculatorService();

  @observable
  String typeCalculator = 'ASME';

  @observable
  int typeElement = 0;

  @action
  setType(int value) {
    typeElement = value;

    calculate();
  }

  @observable
  double size = 0;

  @action
  setSize(double value) {
    size = value;
    calculate();
  }

  @observable
  String errorTextSize;

  @observable
  double superiorTolerance = 0;

  @action
  setSuperiorTolerance(double value) {
    superiorTolerance = value;
    calculate();
  }

  @observable
  String errorTextSuperior;

  @observable
  double lowerTolerance = 0;

  @action
  setLowerTolerance(double value) {
    lowerTolerance = value;
    calculate();
  }

  @observable
  String errorTextLower;

  @observable
  double geometricTolerance = 0;

  @action
  setGeometricTolerance(double value) {
    geometricTolerance = value;
    calculate();
  }

  @observable
  String errorTextGeometricTolerance;

  @observable
  int geometricFeature;

  @observable
  num modifier;

  @action
  setModifier(num value) {
    modifier = value;

    calculate();
  }

  @observable
  num mmc = 0;

  @action
  calculateMMC() {
    if (typeElement == 0) {
      mmc = size + lowerTolerance;
    } else {
      mmc = size + superiorTolerance;
    }
  }

  @observable
  num lmc = 0;

  @action
  calculateLMC() {
    if (typeElement == 0) {
      lmc = size + superiorTolerance;
    } else {
      lmc = size + lowerTolerance;
    }
  }

  @observable
  num virtualCondition = 0;

  @action
  calculateVirtualCondition() {
    if (virtualCondition == null) return;

    if (typeElement == 0) {
      if (modifier == 0)
        virtualCondition = mmc - geometricTolerance;
      else
        virtualCondition = lmc + geometricTolerance;
    } else {
      if (modifier == 0)
        virtualCondition = mmc + geometricTolerance;
      else
        virtualCondition = lmc - geometricTolerance;
    }
  }

  @action
  calculate() {
    calculateLMC();
    calculateMMC();

    if (virtualCondition != null) calculateVirtualCondition();
  }

  @action
  sendStatistic() {
    _calculatorService.sendStatistic(type: typeCalculator);
  }
}
