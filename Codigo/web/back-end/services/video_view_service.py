from model.video_view import VideoView
from dao.dao_mysql import insert
from datetime import datetime


def add_video_view(current_date, uid, video_id):
    date = datetime.now()

    if current_date is None:
        current_date = date
    else:
        publish_date = __parse_date(publish_date)

    video_view = VideoView(current_date, uid, video_id)
    insert(video_view)

def __parse_date(date_str):
    if date_str is None:
        return None

    return date_str
