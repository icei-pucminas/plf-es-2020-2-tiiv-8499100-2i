from flask import Blueprint, request, jsonify
from server.app.models.Symbol import Symbol

symbol = Blueprint('symbol', __name__)


@symbol.route("/symbol", methods=['POST'])
def insert():
    title = request.form['title']
    body = request.form['body']
    img = request.files.get('img')
    category_id = request.form['category_id']

    symbol_model = Symbol(None, title, body, img, category_id)
    symbol_model.insert(symbol_model)

    return "Symbol Adicionado"


@symbol.route("/symbol", methods=['GET'])
def get_all():
    symbol_model = Symbol(None, None, None, None, None)
    response = symbol_model.get_all()
    return jsonify(response)


@symbol.route("/symbol/sub_category/<string:symbol_sub_category_id>", methods=['GET'])
def get_all_by_subcategory(symbol_sub_category_id):
    symbol_model = Symbol(None, None, None, None, None)
    formatted_response = []
    response = symbol_model.get_all()
    for c in response:
        if c['sub_category_id'] == symbol_sub_category_id:
            formatted_response.append(c)

    return jsonify(formatted_response)


@symbol.route("/symbol/<string:symbol_id>", methods=['GET'])
def get(symbol_id):
    symbol_model = Symbol(symbol_id, None, None, None, None)
    return symbol_model.get(symbol_id)


@symbol.route("/symbol/<string:symbol_id>", methods=['PUT'])
def update(symbol_id):
    title = request.form['title']
    body = request.form['body']
    img = request.files.get('img')
    category_id = request.form['category_id']

    symbol_model = Symbol(None, title, body, img, category_id)
    return symbol_model.update(symbol_id, symbol_model)


@symbol.route("/symbol/<string:symbol_id>", methods=['DELETE'])
def delete(symbol_id):

    symbol_model = Symbol(symbol_id, None, None, None, None)
    symbol_model.delete(symbol_id)

    return "Symbol deletado"
