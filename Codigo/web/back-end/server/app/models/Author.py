from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass

author_dao = GenericDao()


class Author:

    def __init__(self, author_id, name, biography):
        self.author_id = author_id
        self.name = name
        self.biography = biography

    def get_author_id(self):
        return self.author_id

    def set_author_id(self, author_id):
        self.author_id = author_id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_biography(self):
        return self.biography

    def set_biography(self, biography):
        self.biography = biography

    def insert(self, author):
        author_dao.insert(author.__dict__, EnumClass.AUTHOR.value)

    def get(self, author_id):
        return author_dao.get(author_id, EnumClass.AUTHOR.value)

    def get_all(self):
        result = author_dao.get_all(EnumClass.AUTHOR.value)
        return self.format_json(result)

    def update(self, author_id, author):
        author_dao.update(author_id, author.__dict__, EnumClass.AUTHOR.value)

    def delete(self, author_id):
        author_dao.delete(author_id, EnumClass.AUTHOR.value)

    def format_json(self, author):
        authors = []

        for key, value in author.items():
            data = Author(key, value['name'], value['biography'])

            authors.append(data.__dict__)

        return authors
