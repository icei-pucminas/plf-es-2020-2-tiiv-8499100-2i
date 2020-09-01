from flask import Blueprint, request, jsonify
from server.app.models.SymbolCategory import SymbolCategory

symbol_category = Blueprint('symbol_category', __name__)


@symbol_category.route("/symbol_category", methods=['POST'])
def insert():
    name = request.form['name']

    symbol_model = SymbolCategory(None, name)
    symbol_model.insert(symbol_model)

    return "Categoria adicionada"


@symbol_category.route("/symbol_category", methods=['GET'])
def get_all():
    symbol_model = SymbolCategory(None, None)
    response = symbol_model.get_all()
    return jsonify(response)


@symbol_category.route("/symbol_category/<string:symbol_category_id>", methods=['GET'])
def get(symbol_category_id):
    symbol_model = SymbolCategory(symbol_category_id, None)
    return symbol_model.get(symbol_category_id)


@symbol_category.route("/symbol_category/<string:symbol_category_id>", methods=['PUT'])
def update(symbol_category_id):
    name = request.form['name']

    symbol_model = SymbolCategory(None, name)
    symbol_model.update(symbol_category_id, symbol_model)

    return "Categoria adicionada"


@symbol_category.route("/symbol_category/<string:symbol_category_id>", methods=['DELETE'])
def delete(symbol_category_id):

    symbol_model = SymbolCategory(symbol_category_id, None)
    symbol_model.delete(symbol_category_id)

    return "Categoria deletada"
