from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

video_category_dao = GenericDao()


class VideoCategory:

    def __init__(self, video_category_id, name):
        self.video_category_id = video_category_id
        self.name = name

    def get_video_category_id(self):
        return self.video_category_id

    def set_video_category_id(self, video_category_id):
        self.video_category_id = video_category_id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def insert(self, video_category):
        video_category_dao.insert(video_category.__dict__, EnumClass.VIDEO_CAT.value)

    def get(self, video_category_id):
        return video_category_dao.get(video_category_id, EnumClass.VIDEO_CAT.value)

    def get_all(self):
        result = video_category_dao.get_all(EnumClass.VIDEO_CAT.value)
        return self.format_json(result)

    def update(self, video_category_id, video_category):
        video_category_dao.update(video_category_id, video_category.__dict__, EnumClass.VIDEO_CAT.value)

    def delete(self, video_category_id):
        video_category_dao.delete(video_category_id, EnumClass.VIDEO_CAT.value)

    def format_json(self, video_category):
        categories = []

        for key, value in video_category.items():
            data = VideoCategory(key, value['name'])

            categories.append(data.__dict__)

        return categories
