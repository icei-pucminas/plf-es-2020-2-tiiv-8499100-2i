from datetime import date
from flask import Blueprint, request, jsonify, Response
from services import post_view_service
from datetime import datetime

post_view = Blueprint('post_view', __name__)


@post_view.route("/post_view", methods=['POST'])
def insert():
    data = request.form
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["uid"]
    post_id = data["post_id"]

    post_view_service.add_post_view(current_date, user_id, 0, post_id)

    return Response(status=201)

@post_view.route("/post_view", methods=['GET'])
def get_all():
    response = post_view_service.get_all_post_views()
    return jsonify(response)


@post_view.route("/post_view/filter", methods=['GET'])
def get_all_filter():
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    user_id = request.args.get("uid")

    response = post_view_service.get_all_post_views()

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