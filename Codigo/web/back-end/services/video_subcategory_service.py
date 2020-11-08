from dto.video_subcategory_dto import VideoSubcategoryDTO
from model.video_subcategory import VideoSubcategory
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete


def add_video_subcategory(name, category_id):
    video_subcategory = VideoSubcategory(name, category_id)
    insert(video_subcategory)


def get_all_video_subcategories():
    video_subcategories = get_all(VideoSubcategory)
    return format_json(video_subcategories)


def get_video_subcategory(id):
    video_subcategory = get(VideoSubcategory, id)
    video_subcategory = video_subcategory.__dict__
    return VideoSubcategoryDTO(video_subcategory['id'], video_subcategory['name'], video_subcategory['category_id']).__dict__


def update_video_subcategory(id, name, category_id):
    s = start_session()

    s.query(VideoSubcategory).filter(VideoSubcategory.id == id).update({
        'name': name,
        'category_id': category_id
    })

    close_session(s)


def delete_video_subcategory(id):
    delete(VideoSubcategory, id)


def format_json(video_subcategories):
    video_subcategories_json = []

    for video_subcategory in video_subcategories:
        video_subcategory = video_subcategory.__dict__
        video_subcategories_json.append(VideoSubcategoryDTO(video_subcategory['id'], video_subcategory['name'], video_subcategory['category_id']).__dict__)
    return video_subcategories_json
