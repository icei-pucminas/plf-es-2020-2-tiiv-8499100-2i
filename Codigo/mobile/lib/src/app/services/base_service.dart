import 'dart:convert';

import 'package:get_it/get_it.dart';
import 'package:inteligenciaindustrialapp/src/app/utils/network/network_service.dart';
import 'package:shared_preferences/shared_preferences.dart';

class BaseService {
  Map<String, String> headers = {
    'Authorization':
        'Basic TmpkamNqWTBhSEpqTjJnNE1tNWtNak5xYTNNME4yTjFhMjpwbVpYSnVOM2RvTkdOeU5ETjRaV3QzYm1Ob2NtVnk='
  };

  final _frwkNetwork = GetIt.I<NetworkService>();

  Future<dynamic> request(HttpMethod method, String endpoint,
      {Map headers, body, bool cacheFirst = false}) async {
    // print('cacheFirst: $cacheFirst');
    if (cacheFirst) {
      dynamic response = await this._getCache(endpoint);
      if (response != null) {
        this._doRequest(method, endpoint,
            headers: headers, body: body, saveCache: true);
        return response;
      } else {
        return this._doRequest(method, endpoint,
            headers: headers, body: body, saveCache: true);
      }
    }
    return this._doRequest(method, endpoint,
        headers: headers, body: body, saveCache: false);
  }

  Future<dynamic> _doRequest(HttpMethod method, String endpoint,
      {Map headers, body, bool saveCache}) {
    // print('_doRequest');
    return _frwkNetwork
        .request(method, endpoint, headers: headers, body: body)
        .then((response) async {
      if (saveCache) this.saveCache(endpoint, response);
      return response;
    }).catchError((error) {
      throw (error);
    });
  }

  Future<dynamic> _getCache(String endpoint) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    var str = prefs.getString(endpoint);
    // print('_getCache: $endpoint -> $str');
    if (str == null) return null;
    return json.decode(str);
  }

  saveCache(String key, dynamic map) async {
    // print('_saveCache: $endpoint');
    SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.setString(key, json.encode(map));
  }
}
