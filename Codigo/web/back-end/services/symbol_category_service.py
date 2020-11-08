from dto.symbol_category_dto import SymbolCategoryDTO
from model.symbol_category import SymbolCategory
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete


def add_symbol_category(name):
    symbol_category = SymbolCategory(name)
    insert(symbol_category)


def get_all_symbol_categories():
    symbol_categories = get_all(SymbolCategory)
    return format_json(symbol_categories)


def get_symbol_category(id):
    symbol_category = get(SymbolCategory, id)
    symbol_category = symbol_category.__dict__
    return SymbolCategoryDTO(symbol_category['id'], symbol_category['name']).__dict__


def update_symbol_category(id, name):
    s = start_session()

    s.query(SymbolCategory).filter(SymbolCategory.id == id).update({
        'name': name
    })

    close_session(s)


def delete_symbol_category(id):
    delete(SymbolCategory, id)


def format_json(symbol_categories):
    symbol_categories_json = []

    for symbol_category in symbol_categories:
        symbol_category = symbol_category.__dict__
        symbol_categories_json.append(SymbolCategoryDTO(symbol_category['id'], symbol_category['name']).__dict__)
    return symbol_categories_json
