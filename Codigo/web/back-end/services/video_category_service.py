from dto.video_category_dto import VideoCategoryDTO
from model.video_category import VideoCategory
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete


def add_video_category(name):
    video_category = VideoCategory(name)
    insert(video_category)


def get_all_video_categories():
    video_categories = get_all(VideoCategory)
    return format_json(video_categories)


def get_video_category(id):
    video_category = get(VideoCategory, id)
    video_category = video_category.__dict__
    return VideoCategoryDTO(video_category['id'], video_category['name']).__dict__


def update_video_category(id, name):
    s = start_session()

    s.query(VideoCategory).filter(VideoCategory.id == id).update({
        'name': name
    })

    close_session(s)


def delete_video_category(id):
    delete(VideoCategory, id)


def format_json(video_categories):
    video_categories_json = []

    for video_category in video_categories:
        video_category = video_category.__dict__
        video_categories_json.append(VideoCategoryDTO(video_category['id'], video_category['name']).__dict__)
    return video_categories_json
