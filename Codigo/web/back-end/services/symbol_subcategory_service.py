from dto.symbol_subcategory_dto import SymbolSubcategoryDTO
from model.symbol_subcategory import SymbolSubcategory
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete


def add_symbol_subcategory(name, category_id):
    symbol_subcategory = SymbolSubcategory(name, category_id)
    insert(symbol_subcategory)


def get_all_symbol_subcategories():
    symbol_subcategories = get_all(SymbolSubcategory)
    return format_json(symbol_subcategories)


def get_symbol_subcategory(id):
    symbol_subcategory = get(SymbolSubcategory, id)
    symbol_subcategory = symbol_subcategory.__dict__
    return SymbolSubcategoryDTO(symbol_subcategory['id'], symbol_subcategory['name'], symbol_subcategory['category_id']).__dict__


def update_symbol_subcategory(id, name, category_id):
    s = start_session()

    s.query(SymbolSubcategory).filter(SymbolSubcategory.id == id).update({
        'name': name,
        'category_id': category_id
    })

    close_session(s)


def delete_symbol_subcategory(id):
    delete(SymbolSubcategory, id)


def format_json(symbol_subcategories):
    symbol_subcategories_json = []

    for symbol_subcategory in symbol_subcategories:
        symbol_subcategory = symbol_subcategory.__dict__
        symbol_subcategories_json.append(SymbolSubcategoryDTO(symbol_subcategory['id'], symbol_subcategory['name'], symbol_subcategory['category_id']).__dict__)
    return symbol_subcategories_json
