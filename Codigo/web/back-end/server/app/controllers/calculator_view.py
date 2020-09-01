from datetime import date
from flask import Blueprint, request, jsonify
from server.app.models.CalculatorView import CalculatorView

calculator_view = Blueprint('calculator_view', __name__)


@calculator_view.route("/calculator_view", methods=['POST'])
def insert():
    data = request.get_json()
    current_date = date.today().strftime("%Y-%m-%d")
    user_id = data["user_id"]
    calculator_type = data["calculator_type"]

    calculator_view_model = CalculatorView(current_date, user_id, calculator_type)
    calculator_view_model.insert(calculator_view_model)

    return "View Contabilizada"
