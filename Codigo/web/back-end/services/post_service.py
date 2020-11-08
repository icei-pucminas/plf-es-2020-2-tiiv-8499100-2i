from dto.post_dto import PostDTO
from dto.author_dto import AuthorDTO
from model.post import Post
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete
from utils.validate_params import validate_text_param, validate_date_param, validate_boolean_param
from services.ad_service import get_all_ads
from datetime import datetime
from credentials import storage
import math
import random


def add_post(title, body, publish_date, img, requires_login, author_id):
    date = datetime.now()

    if publish_date is None:
        publish_date = date
    else:
        publish_date = __parse_date(publish_date)

    requires_login = __parse_bool(requires_login.lower())
    __validate_params(title, body, publish_date, requires_login)

    img_path = storage.upload_image_file(img, "post")

    post = Post(title, body, date, publish_date, img_path, requires_login, author_id)
    insert(post)


def get_all_posts():
    posts = get_all(Post)
    return format_json(posts, True)

def get_all_posts_without_ads():
    posts = get_all(Post)
    return format_json(posts, False)

def get_post(id):
    post = get(Post, id)
    author = AuthorDTO(post.author.id, post.author.name, post.author.biography).__dict__
    post = post.__dict__
    return PostDTO(post['id'], post['title'], post['body'], post['date'].isoformat(), post['img'], post['requires_login'], author).__dict__


def update_post(id, title, body, publish_date, img, requires_login, author_id):
    s = start_session()

    if img == None:
        post = get_post(id)
        img_path = post['img']
    else:
        img_path = storage.upload_image_file(img, "post")

    s.query(Post).filter(Post.id == id).update({
        'title': title,
        'body': body,
        'publish_date': publish_date,
        'img': img_path,
        'requires_login': requires_login == 'true',
        'author_id': author_id
    })

    close_session(s)


def delete_post(id):
    delete(Post, id)


def format_json(posts, ads_shown):
    posts_json = []

    for post in posts:
        author = AuthorDTO(post.author.id, post.author.name, post.author.biography).__dict__
        post = post.__dict__
        if ads_shown and post['publish_date'] > datetime.now().date():
            continue

        posts_json.append(
            PostDTO(
                post['id'],
                post['title'],
                post['body'],
                post['date'].isoformat(),
                post['img'],
                post['requires_login'],
                author
            ).__dict__
        )

    if ads_shown:
        ads = get_all_ads()
        ads_number = math.floor(len(posts) / 4)
        i = len(posts) - 1
        for _ in reversed(posts_json):
            if i != 0 and i % ads_number == 0 and len(ads) > 0:
                posts_json.insert(i, random.choice(ads))
            i = i - 1

    return posts_json


def __validate_params(title, body, publish_date, requires_login):
    validate_text_param(title)
    validate_text_param(body)
    validate_date_param(publish_date)
    validate_boolean_param(requires_login)


def __parse_bool(string):
    d = {'true': True, 'false': False}
    return d.get(string, string)


def __parse_date(date_str):
    if date_str is None:
        return None

    return date_str
    # try:
        # return datetime.strptime(date_str, "%d/%m/%Y %H:%M:%S")
    # except ValueError as error:
    #     raise ExceptionUtils.handle_param_exception(ValidationException(ParamsError.INVALID_VALUE.value.format(
            # 'Could not parse date: ' + str(error))))
    # except TypeError as error:
    #     raise ExceptionUtils.handle_param_exception(ValidationException(ParamsError.INVALID_TYPE.value.format(
            # 'Could not parse date: ' + str(error))))