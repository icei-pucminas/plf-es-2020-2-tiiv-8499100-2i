import 'dart:ui';

class ColorsStyle {
  static final orange = getColorByHex('FF5F11');
  static final orangeLight = getColorByHex('FFE9DD');

  static final purple = getColorByHex('653796');
  static final purpleLight = getColorByHex('E0D7EA');

  static final blue = getColorByHex('0961ea');
  static final blueLight = getColorByHex('CFEFFF');

  static final green = getColorByHex('029C60');
  static final greenLight = getColorByHex('CCEBDF');
  static final greenLight2 = getColorByHex('04DA86');
  static final greenLight3 = getColorByHex('CCEBDF');
  static final greenDark = getColorByHex('017447');

  static final yellow = getColorByHex('FFC700');
  static final yellowLight = getColorByHex('FFEEB3');

  static final red = getColorByHex('E30303');
  static final redLight = getColorByHex('FFDDDD');

  static final gray = getColorByHex('9a9a9a');
  static final grayLight = getColorByHex('E6E6E6');
  static final grayLight2 = getColorByHex('AAAAAA');
  static final grayLight3 = getColorByHex('F8F5F5');
  static final grayDark = getColorByHex('444444');

  static final background = getColorByHex('FFFDFA');

  static Color getColorByHex(String hex) {
    return Color(int.parse("0xFF${hex.replaceAll('#', '')}"));
  }
}
