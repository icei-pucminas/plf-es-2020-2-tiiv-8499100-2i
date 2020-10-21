from model.View import View
from dao.genericDao import GenericDao
from model.EnumClass import EnumClass

forum_view_dao = GenericDao()


class ForumView(View):

    def __init__(self, date, user_id, forum_id):
        super().__init__(date, user_id)
        self.forum_id = forum_id

    def insert(self, forum_view):
        forum_view_dao.insert(forum_view.__dict__, EnumClass.FORUM_VIEW.value)
