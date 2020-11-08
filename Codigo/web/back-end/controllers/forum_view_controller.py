from datetime import date
from flask import Blueprint, request, jsonify, Response
from services import forum_view_service
from datetime import datetime

forum_view = Blueprint('forum_view', __name__)


@forum_view.route("/forum_view", methods=['POST'])
def insert():
    data = request.form
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["uid"]
    forum_id = data["forum_id"]

    forum_view_service.add_forum_view(current_date, user_id, forum_id)

    return Response(status=201)

@forum_view.route("/forum_view", methods=['GET'])
def get_all():
    response = forum_view_service.get_all_forum_views()
    return jsonify(response)


@forum_view.route("/forum_view/filter", methods=['GET'])
def get_all_filter():
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    user_id = request.args.get("uid")

    response = forum_view_service.get_all_forum_views()

    if start_date != None:
        response = __filter_start_date(response, start_date)
    if end_date != None:
        response = __filter_end_date(response, end_date)
    if user_id != None:
        response = __filter_user(response, user_id)

    return jsonify(response)


def __filter_start_date(data, str_start_date):
    filtered_list = []

    for d in data:
        start_date = datetime.fromisoformat(str_start_date)
        view_date = datetime.fromisoformat(d['date'])

        if view_date >= start_date:
            filtered_list.append(d)

    return filtered_list


def __filter_end_date(data, str_end_date):
    filtered_list = []

    for d in data:
        end_date = datetime.fromisoformat(str_end_date)
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