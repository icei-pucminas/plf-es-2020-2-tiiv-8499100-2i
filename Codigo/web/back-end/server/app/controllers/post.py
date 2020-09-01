from flask import Blueprint, request, jsonify
from server.app.models.Post import Post

post = Blueprint('post', __name__)


@post.route("/post", methods=['POST'])
def insert():
    title = request.form['title']
    body = request.form['body']
    img = request.files.get('img')
    date = request.form['date']
    author_id = request.form['author_id']
    user_required = request.form['user_required']

    post_model = Post(None, title, body, date, img, author_id, user_required)
    post_model.insert(post_model)
    return "Post adicionado."


@post.route("/post", methods=['GET'])
def get_all():
    post_model = Post(None, None, None, None, None, None, None)
    response = post_model.get_all()
    return jsonify(response)


@post.route("/post/<string:post_id>", methods=['GET'])
def get(post_id):
    post_model = Post(post_id, None, None, None, None, None, None)
    response = post_model.get(post_id)
    return jsonify(response)


@post.route("/post/<string:post_id>", methods=['PUT'])
def update(post_id):
    title = request.form['title']
    body = request.form['body']
    img = request.files.get('img')
    date = request.form['date']
    author_id = request.form['author_id']
    user_required = request.form['user_required']

    post_model = Post(None, title, body, date, img, author_id, user_required)
    post_model.update(post_id, post_model)
    return "Post atualizado."


@post.route("/post/<string:post_id>", methods=['DELETE'])
def delete(post_id):
    post_model = Post(post_id, None, None, None, None, None, None)
    post_model.delete(post_id)

    return "Post deletado"
