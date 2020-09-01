from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

video_sub_category_dao = GenericDao()


class VideoSubCategory:

    def __init__(self, video_sub_category_id, name, category_id):
        self.video_sub_category_id = video_sub_category_id
        self.name = name
        self.category_id = category_id

    def get_video_sub_category_id(self):
        return self.video_sub_category_id

    def set_video_sub_category_id(self, video_sub_category_id):
        self.video_sub_category_id = video_sub_category_id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_video_sub_category_id(self):
        return self.video_sub_category_id

    def set_video_sub_category_id(self, video_sub_category_id):
        self.video_sub_category_id = video_sub_category_id

    def insert(self, video_sub_category):
        video_sub_category_dao.insert(video_sub_category.__dict__, EnumClass.VIDEO_SUB_CAT.value)

    def get(self, video_sub_category_id):
        return video_sub_category_dao.get(video_sub_category_id, EnumClass.VIDEO_SUB_CAT.value)

    def get_all(self):
        result = video_sub_category_dao.get_all(EnumClass.VIDEO_SUB_CAT.value)
        return self.format_json(result)

    def update(self, video_sub_category_id, video_sub_category):
        video_sub_category_dao.update(video_sub_category_id, video_sub_category.__dict__, EnumClass.VIDEO_SUB_CAT.value)

    def delete(self, video_sub_category_id):
        video_sub_category_dao.delete(video_sub_category_id, EnumClass.VIDEO_SUB_CAT.value)

    def format_json(self, video_sub_category):
        categories = []

        for key, value in video_sub_category.items():
            data = VideoSubCategory(key, value['name'], value['category_id'])

            categories.append(data.__dict__)

        return categories
