from datetime import date
from flask import Blueprint, request, jsonify
from server.app.models.VideoView import VideoView

video_view = Blueprint('video_view', __name__)


@video_view.route("/video_view", methods=['POST'])
def insert():
    data = request.get_json()
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["user_id"]
    video_id = data["video_id"]

    video_view_model = VideoView(current_date, user_id, video_id)
    video_view_model.insert(video_view_model)

    return "View Contabilizada"
