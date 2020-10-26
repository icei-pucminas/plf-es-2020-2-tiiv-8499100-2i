from datetime import date
from flask import Blueprint, request, jsonify, Response
from services import symbol_view_service
from datetime import datetime

symbol_view = Blueprint('symbol_view', __name__)


@symbol_view.route("/symbol_view", methods=['POST'])
def insert():
    data = request.form
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["uid"]
    symbol_id = data["symbol_id"]

    symbol_view_service.add_symbol_view(current_date, user_id, 0, symbol_id)

    return Response(status=201)

@symbol_view.route("/symbol_view", methods=['GET'])
def get_all():
    response = symbol_view_service.get_all_symbol_views()
    return jsonify(response)


@symbol_view.route("/symbol_view/filter", methods=['GET'])
def get_all_filter():
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    user_id = request.args.get("uid")

    response = symbol_view_service.get_all_symbol_views()

    if start_date != None:
        response = __filter_start_date(response, start_date)
    if end_date != None:
        response = __filter_end_date(response, end_date)
    if user_id != None:
        response = __filter_user(response, user_id)

    return jsonify(response)


def __filter_start_date(data, start_date):
    filtered_list = []

    for d in data:
        start_date = datetime.fromisoformat(start_date)
        view_date = datetime.fromisoformat(d['date'])

        if view_date >= start_date:
            filtered_list.append(d)

    return filtered_list


def __filter_end_date(data, end_date):
    filtered_list = []

    for d in data:
        end_date = datetime.fromisoformat(end_date)
        view_date = datetime.fromisoformat(d['date'])

        if view_date <= end_date:
            filtered_list.append(d)

    return filtered_list


def __filter_user(data, uid):
    filtered_list = []

    for d in data:
        if (d['uid'] == uid):
            filtered_list.append(d)

    return filtered_list