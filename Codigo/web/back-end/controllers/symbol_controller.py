from flask import Blueprint, request, jsonify
from services import symbol_service

symbol = Blueprint('symbol', __name__)


@symbol.route("/symbol", methods=['POST'])
def insert():
    title = request.form['title']
    body = request.form['body']
    img = request.files.get('img')
    subcategory_id = request.form['subcategory_id']

    symbol_service.add_symbol(title, body, img, subcategory_id)

    return "forum adicionado."


@symbol.route("/symbol", methods=['GET'])
def get_all():
    response = symbol_service.get_all_symbols()
    return jsonify(response)


@symbol.route("/symbol/category/<int:id>", methods=['GET'])
def get_category(id):
    response = symbol_service.get_all_symbols()
    formatted_categories = []
    for c in response:
        if (c['subcategory_id'] == id):
            formatted_categories.append(c)

    return jsonify(formatted_categories)


@symbol.route("/symbol/<int:id>", methods=['GET'])
def get(id):
    response = symbol_service.get_symbol(id)
    return jsonify(response)


@symbol.route("/symbol/<int:id>", methods=['PUT'])
def update(id):
    title = request.form['title']
    body = request.form['body']
    if len(request.files) > 0:
        img = request.files.get('img')
    else:
        img = None
    subcategory_id = request.form['subcategory_id']

    symbol_service.update_symbol(id, title, body, img, subcategory_id)

    return "forum atualizado."


@symbol.route("/symbol/<int:id>", methods=['DELETE'])
def delete(id):
    symbol_service.delete_symbol(id)
    return "forum deletado"
