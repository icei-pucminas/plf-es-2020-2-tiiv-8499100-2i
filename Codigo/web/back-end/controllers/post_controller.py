import datetime
from flask import Blueprint, request, jsonify, Response
from services import post_service

post = Blueprint('post', __name__)


@post.route("/post", methods=['POST'])
def insert():
    title = request.form['title']
    body = request.form['body']
    img = request.files.get('img')
    publish_date = request.form['publish_date']
    author_id = request.form['author_id']
    requires_login = request.form['requires_login']

    post_service.add_post(title, body, publish_date, img, requires_login, author_id)

    return Response(status=201)


@post.route("/post", methods=['GET'])
def get_all():
    if request.args.get("noads") != None:
        response = post_service.get_all_posts_without_ads()
    else:
        response = post_service.get_all_posts()

    return jsonify(response)


@post.route("/post/<int:id>", methods=['GET'])
def get(id):
    response = post_service.get_post(id)
    return jsonify(response)


@post.route("/post/<int:id>", methods=['PUT'])
def update(id):
    title = request.form['title']
    body = request.form['body']
    if len(request.files) > 0:
        img = request.files.get('img')
    else:
        img = None
    publish_date = request.form['publish_date']
    author_id = request.form['author_id']
    requires_login = request.form['requires_login']

    post_service.update_post(id, title, body, publish_date, img, requires_login, author_id)

    return Response(status=201)


@post.route("/post/<int:id>", methods=['DELETE'])
def delete(id):
    post_service.delete_post(id)
    return Response(status=200)
