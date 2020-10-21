from model.symbol_view import SymbolView
from dao.dao_mysql import insert
from datetime import datetime


def add_symbol_view(current_date, uid, symbol_id):
    date = datetime.now()

    if current_date is None:
        current_date = date
    else:
        publish_date = __parse_date(publish_date)

    symbol_view = SymbolView(current_date, uid, symbol_id)
    insert(symbol_view)

def __parse_date(date_str):
    if date_str is None:
        return None

    return date_str
