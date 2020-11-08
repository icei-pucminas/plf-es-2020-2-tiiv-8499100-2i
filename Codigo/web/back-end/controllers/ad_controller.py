from flask import Blueprint, request, jsonify, Response
from services import ad_service

ad = Blueprint('ad', __name__)


@ad.route("/ad", methods=['POST'])
def insert():
    text = request.form['text']
    url = request.form['url']
    img = request.files.get('img')

    ad_service.add_ad(text, img, url)

    return Response(status=201)


@ad.route("/ad", methods=['GET'])
def get_all():
    response = ad_service.get_all_ads()
    return jsonify(response)


@ad.route("/ad/<int:id>", methods=['GET'])
def get(id):
    response = ad_service.get_ad(id)
    return jsonify(response)


@ad.route("/ad/<int:id>", methods=['PUT'])
def update(id):
    text = request.form['text']
    url = request.form['url']
    if len(request.files) > 0:
        img = request.files.get('img')
    else:
        img = None

    ad_service.update_ad(id, text, img, url)

    return Response(status=201)


@ad.route("/ad/<int:id>", methods=['DELETE'])
def delete(id):
    ad_service.delete_ad(id)
    return Response(status=200)
