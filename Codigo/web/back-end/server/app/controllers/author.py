from flask import Blueprint, request, jsonify
from server.app.models.Author import Author

author = Blueprint('author', __name__)


@author.route("/author", methods=['POST'])
def insert():
    name = request.form['name']
    biography = request.form['biography']

    author_model = Author(None, name, biography)
    author_model.insert(author_model)

    return "Autor Adicionado"


@author.route("/author", methods=['GET'])
def get_all():
    author_model = Author(None, None, None)
    response = author_model.get_all()
    return jsonify(response)


@author.route("/author/<string:author_id>", methods=['GET'])
def get(author_id):
    author_model = Author(author_id, None, None)
    return author_model.get(author_id)


@author.route("/author/<string:author_id>", methods=['PUT'])
def update(author_id):
    name = request.form['name']
    biography = request.form['biography']

    author_model = Author(None, name, biography)
    author_model.update(author_id, author_model)
    return "Autor atualizado."


@author.route("/author/<string:author_id>", methods=['DELETE'])
def delete(author_id):
    author_model = Author(author_id, None, None)
    author_model.delete(author_id)
    return "Autor deletado."