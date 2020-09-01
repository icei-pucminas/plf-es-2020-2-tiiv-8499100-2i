from flask import Blueprint, request, jsonify
from server.app.models.Video import Video

video = Blueprint('video', __name__)


@video.route("/video", methods=['POST'])
def insert():
    title = request.form['title']
    youtube_url = request.form['youtube_url']
    category_id = request.form['category_id']
    date = request.form['date']

    video_model = Video(None, title, youtube_url, category_id, date)
    video_model.insert(video_model)

    return "Video Adicionado"


@video.route("/video", methods=['GET'])
def get_all():
    video_model = Video(None, None, None, None, None)
    response = video_model.get_all()
    return jsonify(response)


@video.route("/video/category/<string:video_sub_category_id>", methods=['GET'])
def get_all_by_subcategory(video_sub_category_id):
    video_model = Video(None, None, None, None, None)
    formatted_response = []
    response = video_model.get_all()

    for c in response:
        if c['category_id'] == video_sub_category_id:
            formatted_response.append(c)

    return jsonify(formatted_response)


@video.route("/video/<string:video_id>", methods=['GET'])
def get(video_id):
    author_model = Video(video_id, None, None, None, None)
    return author_model.get(video_id)


@video.route("/video/<string:video_id>", methods=['PUT'])
def update(video_id):
    title = request.form['title']
    youtube_url = request.form['youtube_url']
    category_id = request.form['category_id']

    video_model = Video(None, title, youtube_url, category_id)
    video_model.update(video_id, video_model)
    return "Video atualizado."


@video.route("/video/<string:video_id>", methods=['DELETE'])
def delete(video_id):
    video_model = Video(video_id, None, None, None, None)
    video_model.delete(video_id)
    return "Video deletado."
