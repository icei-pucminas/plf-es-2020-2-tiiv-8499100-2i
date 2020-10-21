from datetime import date
from flask import Blueprint, request, jsonify, Response
from services import post_view_service

post_view = Blueprint('post_view', __name__)


@post_view.route("/post_view", methods=['POST'])
def insert():
    data = request.get_json()
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["user_id"]
    post_id = data["post_id"]

    post_view_service.add_post_view(current_date, user_id, post_id)

    return Response(status=201)
