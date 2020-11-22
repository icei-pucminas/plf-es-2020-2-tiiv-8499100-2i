from flask import Blueprint, request, jsonify
from services import video_service

video = Blueprint('video', __name__)


@video.route("/video", methods=['POST'])
def insert():
    title = request.form['title']
    youtube_url = request.form['youtube_url']
    date = request.form['date']
    subcategory_id = request.form['subcategory_id']

    video_service.add_video(title, youtube_url, date, subcategory_id)

    return "forum adicionado."


@video.route("/video", methods=['GET'])
def get_all():
    if request.args.get("noads") != None:
        response = video_service.get_all_videos_without_ads()
    else:
        response = video_service.get_all_videos()

    return jsonify(response)


@video.route("/video/category/<int:id>", methods=['GET'])
def get_category(id):
    response = video_service.get_all_videos()
    formatted_categories = []
    for c in response:
        if (c['subcategory_id'] == id):
            formatted_categories.append(c)

    return jsonify(formatted_categories)


@video.route("/video/<int:id>", methods=['GET'])
def get(id):
    response = video_service.get_video(id)
    return jsonify(response)


@video.route("/video/<int:id>", methods=['PUT'])
def update(id):
    title = request.form['title']
    youtube_url = request.form['youtube_url']
    subcategory_id = request.form['subcategory_id']

    video_service.update_video(id, title, youtube_url, subcategory_id)

    return "forum atualizado."


@video.route("/video/<int:id>", methods=['DELETE'])
def delete(id):
    video_service.delete_video(id)
    return "forum deletado"
