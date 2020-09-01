from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

symbol_sub_category_dao = GenericDao()


class SymbolSubCategory:

    def __init__(self, symbol_sub_category_id, name, category_id):
        self.symbol_sub_category_id = symbol_sub_category_id
        self.name = name
        self.category_id = category_id

    def get_symbol_sub_category_id(self):
        return self.symbol_sub_category_id

    def set_symbol_sub_category_id(self, symbol_sub_category_id):
        self.symbol_sub_category_id = symbol_sub_category_id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_category(self):
        return self.category_id

    def set_category(self, category_id):
        self.category_id = category_id

    def insert(self, symbol_sub_category):
        symbol_sub_category_dao.insert(symbol_sub_category.__dict__, EnumClass.SYMBOL_SUB_CAT.value)

    def get(self, symbol_sub_category_id):
        return symbol_sub_category_dao.get(symbol_sub_category_id, EnumClass.SYMBOL_SUB_CAT.value)

    def get_all(self):
        result = symbol_sub_category_dao.get_all(EnumClass.SYMBOL_SUB_CAT.value)
        return self.format_json(result)

    def update(self, symbol_sub_category_id, symbol_sub_category):
        symbol_sub_category_dao.update(symbol_sub_category_id, symbol_sub_category.__dict__,
                                       EnumClass.SYMBOL_SUB_CAT.value)

    def delete(self, symbol_sub_category_id):
        symbol_sub_category_dao.delete(symbol_sub_category_id, EnumClass.SYMBOL_SUB_CAT.value)

    def format_json(self, symbol_sub_category):
        sub_categories = []

        for key, value in symbol_sub_category.items():
            data = SymbolSubCategory(key, value['name'], value['category_id'])

            sub_categories.append(data.__dict__)

        return sub_categories
