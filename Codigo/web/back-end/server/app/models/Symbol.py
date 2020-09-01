from server.app.credentials import storage
from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

symbol_dao = GenericDao()


class Symbol:

    def __init__(self, symbol_id, title, body, img, sub_category_id):
        self.symbol_id = symbol_id
        self.title = title
        self.body = body
        self.img = img
        self.sub_category_id = sub_category_id

    def get_symbol_id(self):
        return self.symbol_id

    def set_symbol_id(self, symbol_id):
        self.symbol_id = symbol_id

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title

    def get_body(self):
        return self.body

    def set_body(self, body):
        self.body = body

    def get_img(self):
        return self.img

    def set_img(self, img):
        self.img = img

    def get_sub_category_id(self):
        return self.sub_category_id

    def set_sub_category_id(self, sub_category_id):
        self.sub_category_id = sub_category_id

    def insert(self, symbol):
        symbol.set_img(storage.upload_image_file(symbol.get_img(), EnumClass.SYMBOL.value))
        symbol_dao.insert(symbol.__dict__, EnumClass.SYMBOL.value)

    def get(self, symbol_id):
        return symbol_dao.get(symbol_id, EnumClass.SYMBOL.value)

    def get_all(self):
        result = symbol_dao.get_all(EnumClass.SYMBOL.value)
        return self.format_json(result)

    def update(self, symbol_id, symbol):
        symbol.set_img(storage.upload_image_file(symbol.get_img(), EnumClass.SYMBOL.value))
        symbol_dao.update(symbol_id, symbol.__dict__, EnumClass.SYMBOL.value)

    def delete(self, symbol_id):
        symbol_dao.delete(symbol_id, EnumClass.SYMBOL.value)

    def format_json(self, symbol):
        symbols = []

        for key, value in symbol.items():
            data = Symbol(key, value['title'], value['body'], value['img'], value['sub_category_id'])

            symbols.append(data.__dict__)

        return symbols
