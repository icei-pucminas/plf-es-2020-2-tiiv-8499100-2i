from model.forum_view import ForumView
from dao.dao_mysql import insert
from datetime import datetime


def add_forum_view(current_date, uid, forum_id):
    date = datetime.now()

    if current_date is None:
        current_date = date
    else:
        publish_date = __parse_date(publish_date)

    forum_view = ForumView(current_date, uid, forum_id)
    insert(forum_view)

def __parse_date(date_str):
    if date_str is None:
        return None

    return date_str
