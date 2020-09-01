from flask import Blueprint, request, jsonify
from server.app.models.VideoSubCategory import VideoSubCategory

video_sub_category = Blueprint('video_sub_category', __name__)


@video_sub_category.route("/video_sub_category", methods=['POST'])
def insert():
    name = request.form['name']
    category_id = request.form['category_id']

    video_sub_category_model = VideoSubCategory(None, name, category_id)
    video_sub_category_model.insert(video_sub_category_model)

    return "Subcategoria adicionada"


@video_sub_category.route("/video_sub_category", methods=['GET'])
def get_all():
    video_sub_category_model = VideoSubCategory(None, None, None)
    response = video_sub_category_model.get_all()
    return jsonify(response)


@video_sub_category.route("/video_sub_category/<string:video_category_id>", methods=['GET'])
def get_all_by_category(video_category_id):
    video_sub_category_model = VideoSubCategory(None, None, None)
    formatted_response = []
    response = video_sub_category_model.get_all()

    for c in response:
        if c['category_id'] == video_category_id:
            formatted_response.append(c)

    return jsonify(response)


@video_sub_category.route("/video_sub_category/<string:video_sub_category_id>", methods=['GET'])
def get(video_sub_category_id):
    video_sub_category_model = VideoSubCategory(video_sub_category_id, None, None)
    return video_sub_category_model.get(video_sub_category_id)


@video_sub_category.route("/video_sub_category/<string:video_sub_category_id>", methods=['PUT'])
def update(video_sub_category_id):
    name = request.form['name']
    category_id = request.form['category_id']

    video_sub_category_model = VideoSubCategory(None, name, category_id)
    video_sub_category_model.update(video_sub_category_id, video_sub_category_model)

    return "Subcategoria atualizada"


@video_sub_category.route("/video_sub_category/<string:video_sub_category_id>", methods=['DELETE'])
def delete(video_sub_category_id):
    video_sub_category_model = VideoSubCategory(video_sub_category_id, None, None)
    video_sub_category_model.delete(video_sub_category_id)

    return "Subcategoria deletada"
