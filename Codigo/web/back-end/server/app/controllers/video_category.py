from flask import Blueprint, request, jsonify
from server.app.models.VideoCategory import VideoCategory

video_category = Blueprint('video_category', __name__)


@video_category.route("/video_category", methods=['POST'])
def insert():
    name = request.form['name']

    video_category_model = VideoCategory(None, name)
    video_category_model.insert(video_category_model)

    return "Categoria adicionada"


@video_category.route("/video_category", methods=['GET'])
def get_all():
    video_category_model = VideoCategory(None, None)
    response = video_category_model.get_all()
    return jsonify(response)


@video_category.route("/video_category/<string:video_category_id>", methods=['GET'])
def get(video_category_id):
    video_category_model = VideoCategory(video_category_id, None)
    return video_category_model.get(video_category_id)


@video_category.route("/video_category/<string:video_category_id>", methods=['PUT'])
def update(video_category_id):
    name = request.form['name']

    video_category_model = VideoCategory(None, name)
    video_category_model.update(video_category_id, video_category_model)

    return "Categoria adicionada"


@video_category.route("/video_category/<string:video_category_id>", methods=['DELETE'])
def delete(video_category_id):

    video_category_model = VideoCategory(video_category_id, None)
    video_category_model.delete(video_category_id)

    return "Categoria deletada"
