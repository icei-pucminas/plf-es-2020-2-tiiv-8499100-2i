from server.app.dao.genericDao import GenericDao
from server.app.models.EnumClass import EnumClass
from server.app.service.firebaseauth import signUp

user_dao = GenericDao()


class User:

    def __init__(self, user_id, name, document, phone, business_name, is_admin):
        self.user_id = user_id
        self.name = name
        self.document = document
        self.phone = phone
        self.business_name = business_name
        self.is_admin = is_admin

    def get_user_id(self):
        return self.user_id

    def set_user_id(self, user_id):
        self.user_id = user_id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_document(self):
        return self.document

    def set_document(self, document):
        self.document = document

    def get_phone(self):
        return self.phone

    def set_phone(self, phone):
        self.phone = phone

    def get_business_name(self):
        return self.business_name

    def set_business_name(self, business_name):
        self.business_name = business_name

    def get_is_admin(self):
        return self.is_admin

    def set_is_admin(self, is_admin):
        self.is_admin = is_admin

    def insert(self, user, email, password):
        response = signUp(email, password)
        self.set_user_id(response['localId'])
        user_dao.insertKey(user.__dict__, response['localId'], EnumClass.USER.value)

    def get(self, user_id):
        return user_dao.get(user_id, EnumClass.USER.value)

    def get_all(self):
        result = user_dao.get_all(EnumClass.USER.value)
        return self.format_json(result)

    def update(self, user_id, user):
        user_dao.update(user_id, user.__dict__, EnumClass.USER.value)

    def delete(self, user_id):
        user_dao.delete(user_id, EnumClass.USER.value)

    def format_json(self, user):
        users = []

        for key, value in user.items():
            data = User(key, value['name'], value['document'], value['phone'], value['business_name'], value['is_admin'])

            users.append(data.__dict__)

        return users
