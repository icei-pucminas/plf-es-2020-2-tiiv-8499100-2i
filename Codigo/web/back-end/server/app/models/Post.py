from server.app.credentials import storage
from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass
from server.app.models.Author import Author

post_dao = GenericDao()


class Post:

    def __init__(self, post_id, title, body, date, img, author_id, user_required):
        self.post_id = post_id
        self.title = title
        self.body = body
        self.date = date
        self.img = img
        self.author_id = author_id
        self.user_required = user_required

    def get_post_id(self):
        return self.post_id

    def set_post_id(self, post_id):
        self.post_id = post_id

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title

    def get_body(self):
        return self.body

    def set_body(self, body):
        self.body = body

    def get_date(self):
        return self.date

    def set_date(self, date):
        self.date = date

    def get_img(self):
        return self.img

    def set_img(self, img):
        self.img = img

    def get_author_id(self):
        return self.author_id

    def set_author_id(self, author_id):
        self.author_id = author_id

    def get_user_required(self):
        return self.user_required

    def set_user_required(self, user_required):
        self.user_required = user_required

    def insert(self, post):
        post.set_img(storage.upload_image_file(post.get_img(), EnumClass.POST.value))
        post_dao.insert(post.__dict__, EnumClass.POST.value)

    def get(self, post_id):
        return post_dao.get(post_id, EnumClass.POST.value)

    def get_all(self):
        result = post_dao.get_all(EnumClass.POST.value)
        return self.format_json(result)

    def update(self, post_id, post):
        post.set_img(storage.upload_image_file(post.get_img(), EnumClass.POST.value))
        post_dao.update(post_id, post.__dict__, EnumClass.POST.value)

    def delete(self, post_id):
        post_dao.delete(post_id, EnumClass.POST.value)

    def format_json(self, post):
        posts = []

        for key, value in post.items():
            data = Post(key, value['title'], value['body'], value['date'], value['img'],
                        value['author_id'], value['user_required'])
            data.__dict__['author'] = self.concat_author(value['author_id'])

            posts.append(data.__dict__)

        return posts

    def concat_author(self, author_id):
        author = Author.get(None, author_id)
        return author