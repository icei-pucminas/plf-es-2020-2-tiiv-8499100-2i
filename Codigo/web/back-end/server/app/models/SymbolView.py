from server.app.models.View import View
from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

symbol_view_dao = GenericDao()


class SymbolView(View):

    def __init__(self, date, user_id, symbol_id):
        super().__init__(date, user_id)
        self.symbol_id = symbol_id

    def insert(self, symbol_view):
        symbol_view_dao.insert(symbol_view.__dict__, EnumClass.SYMBOL_VIEW.value)
