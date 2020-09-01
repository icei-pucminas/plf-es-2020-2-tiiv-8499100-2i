from datetime import date
from flask import Blueprint, request, jsonify
from server.app.models.PostView import PostView

post_view = Blueprint('post_view', __name__)


@post_view.route("/post_view", methods=['POST'])
def insert():
    data = request.get_json()
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["user_id"]
    post_id = data["post_id"]

    post_view_model = PostView(current_date, user_id, post_id)
    post_view_model.insert(post_view_model)

    return "View Contabilizada"
