from dto.symbol_dto import SymbolDTO
from model.symbol import Symbol
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete
from utils.validate_params import validate_text_param
from credentials import storage
from services.ad_service import get_all_ads
import math
import random

def add_symbol(title, body, img, subcategory_id):
    img_path = storage.upload_image_file(img, "symbol")

    symbol = Symbol(title, body, img_path, subcategory_id)
    insert(symbol)


def get_all_symbols():
    symbols = get_all(Symbol)
    return format_json(symbols)


def get_symbol(id):
    symbol = get(Symbol, id)
    symbol = symbol.__dict__
    return SymbolDTO(symbol['id'], symbol['title'], symbol['body'], symbol['img'], symbol['subcategory_id']).__dict__


def update_symbol(id, title, body, img, subcategory_id):
    s = start_session()
    if img == None:
        symbol = get_symbol(id)
        img_path = symbol['img']
    else:
        img_path = storage.upload_image_file(img, "symbol")

    s.query(Symbol).filter(Symbol.id == id).update({
        'title': title,
        'body': body,
        'img': img_path,
        'subcategory_id': subcategory_id
    })

    close_session(s)


def delete_symbol(id):
    delete(Symbol, id)


def format_json(symbols):
    symbols_json = []

    for symbol in symbols:
        symbol = symbol.__dict__
        symbols_json.append(
            SymbolDTO(symbol['id'], symbol['title'], symbol['body'], symbol['img'], symbol['subcategory_id']).__dict__)

    return symbols_json


def validate_params(title, body):
    validate_text_param(title)
    validate_text_param(body)
