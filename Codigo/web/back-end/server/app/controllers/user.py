from flask import Blueprint, request, jsonify
from server.app.models.User import User
from server.app.service.firebaseauth import login

user = Blueprint('user', __name__)


@user.route("/user", methods=['POST'])
def insert():
    email = request.form['email']
    password = request.form['password']
    name = request.form['name']
    document = request.form['document']
    phone = request.form['phone']
    business_name = request.form['business_name']

    user_model = User(None, name, document, phone, business_name, False)
    try:
        user_model.insert(user_model, email, password)
        res = jsonify({"user_id": user_model.get_user_id()})
    except Exception as error:
        if "EMAIL_EXISTS" in error.args[1]:
            res = jsonify({"message": "Já existe um usuário com este e-mail"})

    return res


@user.route("/user", methods=['GET'])
def get_all():
    user_model = User(None, None, None, None, None, None)
    response = user_model.get_all()
    return jsonify(response)


@user.route("/user/<string:user_id>", methods=['GET'])
def get(user_id):
    user_model = User(user_id, None, None, None, None, None)
    return user_model.get(user_id)


@user.route("/user/login", methods=['POST'])
def login_with_email_and_password():
    email = request.form['email']
    password = request.form['password']
    auth = login(email, password)

    user_model = User(auth['localId'], None, None, None, None, None)

    return user_model.get(auth['localId'])


@user.route("/user/<string:user_id>", methods=['PUT'])
def update(user_id):
    name = request.form['name']
    document = request.form['document']
    phone = request.form['phone']
    business_name = request.form['business_name']
    is_admin = request.form['is_admin']

    user_model = User(user_id, name, document, phone, business_name, is_admin)
    user_model.update(user_id, user_model)
    return "Usuário atualizado."


@user.route("/user/<string:user_id>", methods=['DELETE'])
def delete(user_id):
    user_model = User(user_id, None, None, None, None, None)
    user_model.delete(user_id)
    return "Usuário deletado."