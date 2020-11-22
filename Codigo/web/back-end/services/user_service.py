from dto.user_dto import UserDTO
from model.user import User
from dao.dao_mysql import insert_user, get_all, get, start_session, close_session, delete
from utils.validate_params import validate_text_param


def add_user(email, password, name, document, phone, business_name):
    validate_params(name)
    user = User(None, name, document, phone, business_name, False)
    user.create_firebase_user(email, password)
    insert_user(user)


def get_all_users():
    users = get_all(User)
    return format_json(users)


def get_user(uid):
    user = get(User, uid)
    user = user.__dict__
    return UserDTO(user['uid'], user['name'], user['document'], user['phone'], user['business_name'], user['is_admin'], user['email']).__dict__


def update_user(uid, name, document, phone, business_name):
    s = start_session()

    s.query(User).filter(User.uid == uid).update({
        'name': name,
        'document': document,
        'phone': phone,
        'business_name': business_name
    })

    close_session(s)


def delete_user(uid):
    delete(User, uid)


def format_json(users):
    users_json = []

    for user in users:
        user = user.__dict__
        users_json.append(UserDTO(user['uid'], user['name'], user['document'], user['phone'], user['business_name'], user['is_admin'], user['email']).__dict__)
    return users_json


def validate_params(name):
    validate_text_param(name)