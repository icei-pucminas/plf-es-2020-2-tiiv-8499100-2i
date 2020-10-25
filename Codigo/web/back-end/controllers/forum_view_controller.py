from datetime import date
from flask import Blueprint, request, jsonify, Response
from services import forum_view_service

forum_view = Blueprint('forum_view', __name__)


@forum_view.route("/forum_view", methods=['POST'])
def insert():
    data = request.get_json()
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["user_id"]
    forum_id = data["forum_id"]

    forum_view_service.add_forum_view(current_date, user_id, forum_id)

    return Response(status=201)
