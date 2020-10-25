from datetime import date
from flask import Blueprint, request, jsonify, Response
from services import symbol_view_service

symbol_view = Blueprint('symbol_view', __name__)


@symbol_view.route("/symbol_view", methods=['POST'])
def insert():
    data = request.get_json()
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["user_id"]
    symbol_id = data["symbol_id"]

    symbol_view_service.add_symbol_view(current_date, user_id, symbol_id)

    return Response(status=201)
