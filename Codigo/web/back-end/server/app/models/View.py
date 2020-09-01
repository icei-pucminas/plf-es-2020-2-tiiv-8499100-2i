from server.app.dao.genericDao import GenericDao

view_dao = GenericDao()


class View:

    def __init__(self, date, user_id):
        self.date = date
        self.user_id = user_id

    def insert(self, view):
        pass
