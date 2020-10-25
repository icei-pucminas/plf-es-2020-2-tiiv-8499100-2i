from model.post_view import PostView
from dao.dao_mysql import insert
from datetime import datetime


def add_post_view(current_date, uid, post_id):
    date = datetime.now()

    if current_date is None:
        current_date = date
    else:
        publish_date = __parse_date(publish_date)

    post_view = PostView(current_date, uid, post_id)
    insert(post_view)

def __parse_date(date_str):
    if date_str is None:
        return None

    return date_str
