from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

video_dao = GenericDao()


class Video:

    def __init__(self, video_id, title, youtube_url, category_id, date):
        self.video_id = video_id
        self.title = title
        self.youtube_url = youtube_url
        self.category_id = category_id
        self.date = date

    def get_video_id(self):
        return self.video_id

    def set_video_id(self, video_id):
        self.video_id = video_id

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title

    def get_youtube_url(self):
        return self.youtube_url

    def set_youtube_url(self, youtube_url):
        self.youtube_url = youtube_url

    def get_category_id(self):
        return self.category_id

    def set_category_id(self, category_id):
        self.category_id = category_id

    def get_date(self):
        return self.date

    def set_date(self, date):
        self.date = date

    def insert(self, video):
        video_dao.insert(video.__dict__, EnumClass.VIDEO.value)

    def get(self, video_id):
        return video_dao.get(video_id, EnumClass.VIDEO.value)

    def get_all(self):
        result = video_dao.get_all(EnumClass.VIDEO.value)
        return self.format_json(result)

    def update(self, video_id, video):
        video_dao.update(video_id, video.__dict__, EnumClass.VIDEO.value)

    def delete(self, video_id):
        video_dao.delete(video_id, EnumClass.VIDEO.value)

    def format_json(self, video):
        videos = []

        for key, value in video.items():
            data = Video(key, value['title'], value['youtube_url'], value['category_id'], value['date'])

            videos.append(data.__dict__)

        return videos
