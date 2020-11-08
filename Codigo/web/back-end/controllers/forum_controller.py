import datetime
from flask import Blueprint, request, jsonify, Response
from services import forum_service

forum = Blueprint('forum', __name__)


@forum.route("/forum", methods=['POST'])
def insert():
    title = request.form['title']
    body = request.form['body']
    uid = request.form['uid']

    forum_service.add_forum(title, body, uid)

    return Response(status=201)


@forum.route("/forum", methods=['GET'])
def get_all():
    response = forum_service.get_all_forums()
    return jsonify(response)


@forum.route("/forum/<int:id>", methods=['GET'])
def get(id):
    response = forum_service.get_forum(id)
    return jsonify(response)


@forum.route("/forum/<int:id>", methods=['PUT'])
def update(id):
    title = request.form['title']
    forum_service.update_forum(id, title)

    return Response(status=201)


@forum.route("/forum/<int:forum_id>", methods=['DELETE'])
def delete(forum_id):
    forum_service.delete_forum(forum_id)
    return Response(status=200)


@forum.route("/forum/<int:forum_id>/add_response", methods=['POST'])
def insert_post(forum_id):
    body = request.form['body']
    uid = request.form['uid']
    date = datetime.datetime.now().isoformat()
    is_original_post = False


    forum_service.add_post(body, date, is_original_post, uid, forum_id)
    return "forum adicionado."


@forum.route("/forum/<int:post_id>/delete_post", methods=['DELETE'])
def delete_post(post_id):
    forum_service.remove_post(post_id)
    return "forum adicionado."