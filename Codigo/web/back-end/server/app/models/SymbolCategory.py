from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

symbol_category_dao = GenericDao()


class SymbolCategory:

    def __init__(self, symbol_category_id, name):
        self.symbol_category_id = symbol_category_id
        self.name = name

    def get_symbol_category_id(self):
        return self.symbol_category_id

    def set_symbol_category_id(self, symbol_category_id):
        self.symbol_category_id = symbol_category_id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def insert(self, symbol_category):
        symbol_category_dao.insert(symbol_category.__dict__, EnumClass.SYMBOL_CAT.value)

    def get(self, symbol_category_id):
        return symbol_category_dao.get(symbol_category_id, EnumClass.SYMBOL_CAT.value)

    def get_all(self):
        result = symbol_category_dao.get_all(EnumClass.SYMBOL_CAT.value)
        return self.format_json(result)

    def update(self, symbol_category_id, symbol_category):
        symbol_category_dao.update(symbol_category_id, symbol_category.__dict__, EnumClass.SYMBOL_CAT.value)

    def delete(self, symbol_category_id):
        symbol_category_dao.delete(symbol_category_id, EnumClass.SYMBOL_CAT.value)

    def format_json(self, symbol_category):
        categories = []

        for key, value in symbol_category.items():
            data = SymbolCategory(key, value['name'])

            categories.append(data.__dict__)

        return categories
