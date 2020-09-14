import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:inteligenciaindustrialapp/src/app/components/custom_container.dart';
import 'package:inteligenciaindustrialapp/src/app/screens/calculator/calculator_controller.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/styles/colors_style.dart';
import 'package:intl/intl.dart';

class CalculatorScreen extends StatelessWidget {
  final CalculatorController _controller = CalculatorController();

  var typesCalculator = ['ASME', 'ISO'];

  var _geometricFeatures = [
    DropDownOptionItem(
        path: 'assets/images/geometric/inclinacao.PNG',
        name: 'Inclinação',
        index: 0),
    DropDownOptionItem(
        path: 'assets/images/geometric/paralelismo.png',
        name: 'Paralelismo',
        index: 1),
    DropDownOptionItem(
        path: 'assets/images/geometric/perpendicularidade.PNG',
        name: 'Perpendicularidade',
        index: 2),
    DropDownOptionItem(
        path: 'assets/images/geometric/planicidade.PNG',
        name: 'Planicidade',
        index: 3),
    DropDownOptionItem(
        path: 'assets/images/geometric/posicao.PNG', name: 'Posição', index: 4),
    DropDownOptionItem(
        path: 'assets/images/geometric/retitude.PNG',
        name: 'Retitude',
        index: 5)
  ];

  var _modifiers = [
    DropDownOptionItem(
        path: 'assets/images/geometric/mmc.png', name: 'MMC', index: 0),
    DropDownOptionItem(
        path: 'assets/images/geometric/lmc.png', name: 'LMC', index: 1)
  ];

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScopeNode currentFocus = FocusScope.of(context);

        if (!currentFocus.hasPrimaryFocus) {
          currentFocus.unfocus();
        }
      },
      child: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Padding(
              padding: EdgeInsets.only(left: 20, right: 20, top: 20),
              child: Text(
                'Cálculo de condição virtual',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
              ),
            ),
            _buildDropdownType(),
            _buildContainerElementType(),
            SizedBox(
              height: 10,
            ),
            Observer(
              builder: (_) {
                return Column(
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.only(left: 20, right: 20),
                      child: Row(
                        children: <Widget>[
                          Expanded(
                            child: _buildEditText(
                                name: 'Tamanho',
                                signed: false,
                                decimal: true,
                                index: 0),
                          ),
                          SizedBox(
                            width: 20,
                          ),
                          Expanded(
                            child: _buildEditText(
                                name: 'Tolerância Sup.',
                                signed: true,
                                decimal: true,
                                index: 1),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    Padding(
                      padding: EdgeInsets.only(left: 20, right: 20),
                      child: Row(
                        children: <Widget>[
                          Expanded(
                            child: _buildEditText(
                                name: 'Tolerância Inf.',
                                signed: true,
                                decimal: true,
                                index: 2),
                          ),
                          SizedBox(
                            width: 20,
                          ),
                          Expanded(
                            child: _buildEditText(
                                name: 'Tolerância Geo.',
                                signed: true,
                                decimal: true,
                                index: 3),
                          ),
                        ],
                      ),
                    ),
                    _buildDropdownGeometricFeature(),
                    _buildDropdownModifier(),
                  ],
                );
              },
            ),
            SizedBox(
              height: 20,
            ),
            _buildResults(),
            SizedBox(
              height: 80,
            ),
          ],
        ),
      ),
    );
  }

  _buildDropdownType() {
    return Observer(
      builder: (_) {
        return Padding(
          padding: EdgeInsets.all(20),
          child: Theme(
            data: ThemeData(
              canvasColor: ColorsStyle.grayLight3,
            ),
            child: CustomContainer(
              radius: 4,
              color: ColorsStyle.grayLight3,
              padding: EdgeInsets.only(left: 7, right: 10),
              child: DropdownButton(
                icon: Icon(
                  Icons.keyboard_arrow_down,
                  color: Colors.blue,
                ),
                underline: SizedBox.shrink(),
                value: _controller.typeCalculator,
                items: typesCalculator?.map((String type) {
                  return DropdownMenuItem<String>(
                      value: type,
                      child: Text(
                        type,
                        style: TextStyle(
                            color: ColorsStyle.gray,
                            fontSize: 16,
                            fontWeight: FontWeight.bold),
                      ));
                })?.toList(),
                onChanged: (type) {
                  _controller.typeCalculator = type;
                  _controller.sendStatistic();
                },
              ),
            ),
          ),
        );
      },
    );
  }

  _buildContainerElementType() {
    return Stack(
      children: <Widget>[
        Container(
          width: double.infinity,
          margin: EdgeInsets.fromLTRB(20, 20, 20, 10),
          padding: EdgeInsets.only(bottom: 10),
          decoration: BoxDecoration(
            border: Border.all(
              color: Color.fromARGB(255, 51, 204, 255),
              width: 1,
            ),
            borderRadius: BorderRadius.circular(4),
            shape: BoxShape.rectangle,
          ),
          child: Padding(
            padding: EdgeInsets.only(top: 10, left: 0, right: 10),
            child: Observer(builder: (_) {
              return Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  _buildItemRadioButton(0, 'Interno'),
                  _buildItemRadioButton(1, 'Externo'),
                ],
              );
            }),
          ),
        ),
        Positioned(
            left: 50,
            top: 12,
            child: Observer(builder: (_) {
              return Container(
                padding: EdgeInsets.only(bottom: 10, left: 10, right: 10),
                color: ColorsStyle.background,
                child: Text(
                  'Elemento de tamanho ${_controller.typeCalculator == 'ASME' ? 'regular' : 'linear'}',
                  style: TextStyle(color: Colors.black, fontSize: 14),
                ),
              );
            })),
      ],
    );
  }

  _buildItemRadioButton(int index, String name) {
    return GestureDetector(
      onTap: () {
        _controller.setType(index);
      },
      child: Row(
        children: <Widget>[
          Radio(
              value: index,
              groupValue: _controller.typeElement,
              onChanged: (value) {
                _controller.setType(value);
              }),
          Text(
            name,
            style: TextStyle(fontSize: 16),
          )
        ],
      ),
    );
  }

  _buildEditText({String name, bool signed, bool decimal, int index}) {
    return Observer(
      builder: (_) {
        var errorText;
        switch (index) {
          case 0:
            errorText = _controller.errorTextSize;
            break;
          case 1:
            errorText = _controller.errorTextSuperior;
            break;
          case 2:
            errorText = _controller.errorTextLower;
            break;
          case 3:
            errorText = _controller.errorTextGeometricTolerance;
            break;
        }
        return TextField(
          onChanged: (str) {
            if (str.contains(',')) str = str.replaceAll(',', '.');
            double num = double.parse(str);

            if (num != null) {
              switch (index) {
                case 0:
                  _controller.setSize(num);
                  break;
                case 1:
                  _controller.setSuperiorTolerance(num);
                  break;
                case 2:
                  _controller.setLowerTolerance(num);
                  break;
                case 3:
                  _controller.setGeometricTolerance(num);
                  break;
              }
            } else {
              String errorText = 'Digite um número válido';
              switch (index) {
                case 0:
                  _controller.errorTextSize = errorText;
                  break;
                case 1:
                  _controller.errorTextSuperior = errorText;
                  break;
                case 2:
                  _controller.errorTextLower = errorText;
                  break;
                case 3:
                  _controller.errorTextGeometricTolerance = errorText;
                  break;
              }
            }
          },
          keyboardType:
              TextInputType.numberWithOptions(signed: signed, decimal: decimal),
          cursorColor: Colors.blueAccent,
          decoration: InputDecoration(
              labelText: name,
              fillColor: ColorsStyle.background,
              errorText: errorText ?? null,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(4),
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(4),
                borderSide:
                    BorderSide(color: Color.fromARGB(255, 51, 204, 255)),
              )),
        );
      },
    );
  }

  _buildDropdownGeometricFeature() {
    return Observer(
      builder: (context) {
        return Padding(
          padding: EdgeInsets.only(left: 24, right: 24, top: 20),
          child: Theme(
            data: ThemeData(
              canvasColor: ColorsStyle.grayLight3,
            ),
            child: CustomContainer(
              onTap: () {
                FocusScopeNode currentFocus = FocusScope.of(context);

                if (!currentFocus.hasPrimaryFocus) {
                  currentFocus.unfocus();
                }
              },
              radius: 4,
              color: ColorsStyle.grayLight3,
              padding: EdgeInsets.only(left: 7, right: 10),
              child: DropdownButton(
                icon: Icon(
                  Icons.keyboard_arrow_down,
                  color: Colors.blue,
                ),
                underline: SizedBox.shrink(),
                hint: Text('Característica Geométrica'),
                value: _controller.geometricFeature != null
                    ? _geometricFeatures[_controller.geometricFeature]
                    : null,
                items: _geometricFeatures?.map((DropDownOptionItem item) {
                  return DropdownMenuItem<DropDownOptionItem>(
                      value: item,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Image.asset(
                            item.path,
                            height: item.index == 5 ? 3 : 32,
                          ),
                          SizedBox(width: 10),
                          Text(
                            item.name,
                          ),
                        ],
                      ));
                })?.toList(),
                onChanged: (DropDownOptionItem item) {
                  _controller.geometricFeature = item.index;
                },
              ),
            ),
          ),
        );
      },
    );
  }

  _buildDropdownModifier() {
    return Observer(
      builder: (context) {
        return Padding(
          padding: EdgeInsets.only(left: 24, right: 24, top: 20),
          child: Theme(
            data: ThemeData(
              canvasColor: ColorsStyle.grayLight3,
            ),
            child: CustomContainer(
              onTap: () {
                FocusScopeNode currentFocus = FocusScope.of(context);

                if (!currentFocus.hasPrimaryFocus) {
                  currentFocus.unfocus();
                }
              },
              radius: 4,
              color: ColorsStyle.grayLight3,
              padding: EdgeInsets.only(left: 7, right: 10),
              child: DropdownButton(
                icon: Icon(
                  Icons.keyboard_arrow_down,
                  color: Colors.blue,
                ),
                underline: SizedBox.shrink(),
                hint: Text('Modificador'),
                value: _controller.modifier != null
                    ? _modifiers[_controller.modifier]
                    : null,
                items: _modifiers?.map((DropDownOptionItem item) {
                  return DropdownMenuItem<DropDownOptionItem>(
                      value: item,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Image.asset(
                            item.path,
                            height: item.index == 5 ? 3 : 32,
                          ),
                          SizedBox(width: 10),
                          Text(
                            _controller.typeElement == 0
                                ? item.name.replaceAll('S', 'C')
                                : item.name.replaceAll('C', 'S'),
                          ),
                        ],
                      ));
                })?.toList(),
                onChanged: (DropDownOptionItem item) {
                  _controller.setModifier(item.index);
                },
              ),
            ),
          ),
        );
      },
    );
  }

  _buildResults() {
    return Stack(
      children: <Widget>[
        Container(
          width: double.infinity,
          margin: EdgeInsets.fromLTRB(20, 20, 20, 10),
          padding: EdgeInsets.only(bottom: 10),
          decoration: BoxDecoration(
            border: Border.all(
              color: Color.fromARGB(255, 51, 204, 255),
              width: 1,
            ),
            borderRadius: BorderRadius.circular(4),
            shape: BoxShape.rectangle,
          ),
          child: Padding(
            padding: EdgeInsets.only(top: 10, left: 0, right: 10),
            child: Observer(builder: (_) {
              return Padding(
                padding: EdgeInsets.only(top: 20),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    Column(
                      children: <Widget>[
                        Text(
                          _controller.typeCalculator == 'ASME' ? 'MMC' : 'MMS',
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 18),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        Text(
                          NumberFormat.decimalPattern().format(_controller.mmc),
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.blueAccent,
                              fontSize: 24),
                        ),
                      ],
                    ),
                    Column(
                      children: <Widget>[
                        Text(
                          _controller.typeCalculator == 'ASME' ? 'LMC' : 'LMS',
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 18),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        Text(
                          _controller.lmc.toString(),
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.blueAccent,
                              fontSize: 24),
                        ),
                      ],
                    ),
                    Column(
                      children: <Widget>[
                        Text(
                          'Cond. Virtual',
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 18),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        Text(
                          _controller.virtualCondition.toString(),
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.blueAccent,
                              fontSize: 24),
                        ),
                      ],
                    ),
                  ],
                ),
              );
            }),
          ),
        ),
        Positioned(
            left: 50,
            top: 12,
            child: Container(
              padding: EdgeInsets.only(bottom: 10, left: 10, right: 10),
              color: ColorsStyle.background,
              child: Text(
                'Resultados',
                style: TextStyle(color: Colors.black, fontSize: 14),
              ),
            )),
      ],
    );
  }
}

class DropDownOptionItem {
  String path;
  String name;
  int index;

  DropDownOptionItem({this.path, this.name, this.index});
}
