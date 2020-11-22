from dto.video_dto import VideoDTO
from model.video import Video
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete
from services.ad_service import get_all_ads
import math
import random


def add_video(title, youtube_url, date, subcategory_id):
    video = Video(title, youtube_url, date, subcategory_id)
    insert(video)


def get_all_videos():
    videos = get_all(Video)
    return format_json(videos, True)


def get_all_videos_without_ads():
    videos = get_all(Video)
    return format_json(videos, False)


def get_video(id):
    video = get(Video, id)
    video = video.__dict__
    return VideoDTO(video['id'], video['title'], video['date'].isoformat(), video['youtube_url'], video['subcategory_id']).__dict__


def update_video(id, title, youtube_url, subcategory_id):
    s = start_session()

    s.query(Video).filter(Video.id == id).update({
        'title': title,
        'youtube_url': youtube_url,
        'subcategory_id': subcategory_id
    })

    close_session(s)


def delete_video(id):
    delete(Video, id)


def format_json(videos, ads_shown):
    videos_json = []

    for video in videos:
        video = video.__dict__
        videos_json.append(VideoDTO(video['id'], video['title'], video['date'].isoformat(), video['youtube_url'], video['subcategory_id']).__dict__)

    if ads_shown:
        ads = get_all_ads()
        ads_number = math.floor(len(videos) / 8)
        i = len(videos) - 1
        for _ in reversed(videos_json):
            if i != 0 and ads_number > 0 and  i % ads_number == 0 and len(ads) > 0:
                videos_json.insert(i, random.choice(ads))
            i = i - 1
    return videos_json
