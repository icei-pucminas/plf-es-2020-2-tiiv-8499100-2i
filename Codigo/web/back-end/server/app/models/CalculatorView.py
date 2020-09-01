from server.app.models.View import View
from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

calculator_view_dao = GenericDao()


class CalculatorView(View):

    def __init__(self, date, user_id, calculator_type):
        super().__init__(date, user_id)
        self.calculator_type = calculator_type

    def insert(self, calculator_view):
        calculator_view_dao.insert(calculator_view.__dict__, EnumClass.CALCULATOR_VIEW.value)
