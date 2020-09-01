from datetime import date
from flask import Blueprint, request, jsonify
from server.app.models.SymbolView import SymbolView

symbol_view = Blueprint('symbol_view', __name__)


@symbol_view.route("/symbol_view", methods=['POST'])
def insert():
    data = request.get_json()
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["user_id"]
    symbol_id = data["symbol_id"]

    symbol_view_model = SymbolView(current_date, user_id, symbol_id)
    symbol_view_model.insert(symbol_view_model)

    return "View Contabilizada"
