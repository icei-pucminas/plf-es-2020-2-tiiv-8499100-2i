from server.app.credentials import storage
from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

ad_dao = GenericDao()


class Ad:

    def __init__(self, ad_id, text, img):
        self.ad_id = ad_id
        self.text = text
        self.img = img

    def get_ad_id(self):
        return self.ad_id

    def set_ad_id(self, ad_id):
        self.ad_id = ad_id

    def get_text(self):
        return self.ad_id

    def set_text(self, text):
        self.text = text

    def get_img(self):
        return self.img

    def set_img(self, img):
        self.img = img

    def insert(self, ad):
        ad.set_img(storage.upload_image_file(ad.get_img(), EnumClass.AD.value))
        ad_dao.insert(ad.__dict__, EnumClass.AD.value)

    def get(self, ad_id):
        return ad_dao.get(ad_id, EnumClass.AD.value)

    def get_all(self):
        result = ad_dao.get_all(EnumClass.AD.value)
        return self.format_json(result)

    def update(self, ad_id, ad):
        ad.set_img(storage.upload_image_file(ad.get_img(), EnumClass.AD.value))
        ad_dao.update(ad_id, ad.__dict__, EnumClass.AD.value)

    def delete(self, ad_id):
        ad_dao.delete(ad_id, EnumClass.AD.value)

    def format_json(self, ad):
        ads = []

        for key, value in ad.items():
            data = Ad(key, value['text'], value['img'])

            ads.append(data.__dict__)

        return ads

