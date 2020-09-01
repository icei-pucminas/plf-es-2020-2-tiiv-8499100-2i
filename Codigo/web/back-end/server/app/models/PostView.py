from server.app.models.View import View
from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

post_view_dao = GenericDao()


class PostView(View):

    def __init__(self, date, user_id, post_id):
        super().__init__(date, user_id)
        self.post_id = post_id

    def insert(self, post_view):
        post_view_dao.insert(post_view.__dict__, EnumClass.POST_VIEW.value)
