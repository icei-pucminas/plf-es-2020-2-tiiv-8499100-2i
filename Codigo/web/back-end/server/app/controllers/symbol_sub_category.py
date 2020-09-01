from flask import Blueprint, request, jsonify
from server.app.models.SymbolSubCategory import SymbolSubCategory

symbol_sub_category = Blueprint('symbol_sub_category', __name__)


@symbol_sub_category.route("/symbol_sub_category", methods=['POST'])
def insert():
    name = request.form['name']
    category_id = request.form['category_id']

    symbol_sub_category_model = SymbolSubCategory(None, name, category_id)
    symbol_sub_category_model.insert(symbol_sub_category_model)

    return "Subcategoria adicionada"


@symbol_sub_category.route("/symbol_sub_category", methods=['GET'])
def get_all():
    symbol_sub_category_model = SymbolSubCategory(None, None, None)
    response = symbol_sub_category_model.get_all()
    return jsonify(response)


@symbol_sub_category.route("/symbol_sub_category/category/<string:symbol_category_id>", methods=['GET'])
def get_all_by_category(symbol_category_id):
    symbol_sub_category_model = SymbolSubCategory(None, None, None)
    formatted_response = []
    response = symbol_sub_category_model.get_all()
    for c in response:
        if c['category_id'] == symbol_category_id:
            formatted_response.append(c)

    return jsonify(formatted_response)


@symbol_sub_category.route("/symbol_sub_category/<string:symbol_sub_category_id>", methods=['GET'])
def get(symbol_sub_category_id):
    symbol_sub_category_model = SymbolSubCategory(symbol_sub_category_id, None, None)
    return symbol_sub_category_model.get(symbol_sub_category_id)


@symbol_sub_category.route("/symbol_sub_category/<string:symbol_sub_category_id>", methods=['PUT'])
def update(symbol_sub_category_id):
    name = request.form['name']
    category_id = request.form['category_id']

    symbol_sub_category_model = SymbolSubCategory(None, name, None)
    symbol_sub_category_model.update(symbol_sub_category_id, symbol_sub_category_model)

    return "Subcategoria adicionada"


@symbol_sub_category.route("/symbol_sub_category/<string:symbol_sub_category_id>", methods=['DELETE'])
def delete(symbol_sub_category_id):
    symbol_sub_category_model = SymbolSubCategory(symbol_sub_category_id, None, None)
    symbol_sub_category_model.delete(symbol_sub_category_id)

    return "Subcategoria deletada"
