from flask import Blueprint, request, jsonify
from server.app.models.Ad import Ad

ad = Blueprint('ad', __name__)


@ad.route("/ad", methods=['POST'])
def insert():
    text = request.form['text']
    img = request.files.get('img')

    ad_model = Ad(None, text, img)
    ad_model.insert(ad_model)
    return "Ad adicionado."


@ad.route("/ad", methods=['GET'])
def get_all():
    ad_model = Ad(None, None, None)
    response = ad_model.get_all()
    return jsonify(response)


@ad.route("/ad/<string:ad_id>", methods=['GET'])
def get(ad_id):
    ad_model = Ad(ad_id, None, None)
    response = ad_model.get(ad_id)
    return jsonify(response)


@ad.route("/ad/<string:ad_id>", methods=['PUT'])
def update(ad_id):
    text = request.form['text']
    img = request.files.get('img')

    ad_model = Ad(None, text, img)
    ad_model.update(ad_id, ad_model)
    return "Ad atualizado."


@ad.route("/ad/<string:ad_id>", methods=['DELETE'])
def delete(ad_id):
    ad_model = Ad(ad_id, None, None)
    ad_model.delete(ad_id)

    return "Ad deletado"
