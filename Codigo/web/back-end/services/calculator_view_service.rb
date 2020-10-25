from model.calculator_view import CalculatorView
from dao.dao_mysql import insert
from datetime import datetime


def add_calculator_view(current_date, uid, calculator_type):
    date = datetime.now()

    if current_date is None:
        current_date = date
    else:
        publish_date = __parse_date(publish_date)

    calculator_view = CalculatorView(current_date, uid, calculator_type)
    insert(calculator_view)

def __parse_date(date_str):
    if date_str is None:
        return None

    return date_str
