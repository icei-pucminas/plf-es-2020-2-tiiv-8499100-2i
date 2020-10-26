from dto.forum_dto import ForumDTO
from dto.forum_post_dto import ForumPostDTO
from model.forum import Forum
from dao.dao_mysql import insert, get_all, get, update, delete, delete_all_from_fk, start_session, close_session
from model.forum_post import ForumPost
from datetime import datetime

from utils.validate_params import validate_text_param


def add_forum(title, body, uid):
    validate_params(title, body)
    forum = Forum(title)

    id = insert(forum)
    add_post(body, datetime.now().isoformat(), True, uid, id)


def get_all_forums():
    forums = get_all(Forum)
    return format_json(forums)


def get_forum(id):
    forum = get(Forum, id)
    forum_posts_json = []
    original_post = False

    for forum_post in forum.forum_posts:
        user = forum_post.user.name
        forum_post = forum_post.__dict__

        if (forum_post['is_original_post'] == True):
            original_post = ForumPostDTO(
                forum_post['id'],
                forum_post['body'],
                forum_post['date'].isoformat(),
                forum_post['is_original_post'],
                user
            ).__dict__
        else:
            forum_posts_json.append(
                ForumPostDTO(
                    forum_post['id'],
                    forum_post['body'],
                    forum_post['date'].isoformat(),
                    forum_post['is_original_post'],
                    user
                ).__dict__
            )

    forum.forum_posts = reversed(forum.forum_posts)
    forum = forum.__dict__
    return ForumDTO(forum['id'], forum['title'], forum_posts_json, original_post).__dict__


def update_forum(id, title):
    validate_text_param(title)
    forum = Forum(title)
    update(Forum, id, forum)


def delete_forum(id):
    delete_all_from_fk(ForumPost, id)
    delete(Forum, id)


def add_post(body, date, is_original_post, uid, forum_id):
    forum_post = ForumPost(body, date, is_original_post, uid, forum_id)
    insert(forum_post)


def remove_post(id):
    s = start_session()
    s.query(ForumPost).filter(ForumPost.id == id).update({'body': 'Este post foi deletado.'})

    close_session(s)


def format_json(forums):
    forums_json = []

    for forum in forums:
        forum_posts_json = []
        original_post = None

        for forum_post in forum.forum_posts:
            user = forum_post.user.name
            forum_post = forum_post.__dict__

            if (forum_post['is_original_post'] == True):
                original_post = ForumPostDTO(
                    forum_post['id'],
                    forum_post['body'],
                    forum_post['date'].isoformat(),
                    forum_post['is_original_post'],
                    user
                ).__dict__
            else:
                forum_posts_json.append(
                    ForumPostDTO(
                        forum_post['id'],
                        forum_post['body'],
                        forum_post['date'].isoformat(),
                        forum_post['is_original_post'],
                        user
                    ).__dict__
                )

        forum = forum.__dict__
        forums_json.append(ForumDTO(forum['id'], forum['title'], forum_posts_json, original_post).__dict__)
    forums_json.reverse()
    return forums_json


def validate_params(title, body):
    validate_text_param(title)
    validate_text_param(body)
