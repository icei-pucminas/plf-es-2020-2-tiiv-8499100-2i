from flask import Blueprint, request, jsonify
from services.firebaseauth import login
from services import user_service

user = Blueprint('user', __name__)


@user.route("/user", methods=['POST'])
def insert():
    email = request.form['email']
    password = request.form['password']
    name = request.form['name']
    document = request.form['document']
    phone = request.form['phone']
    business_name = request.form['business_name']
    res = ""

    try:
        user_service.add_user(email, password, name, document, phone, business_name)
        res = jsonify({"message": "Ok"})
    except Exception as error:
        if error.args != None and "EMAIL_EXISTS" in error.args[1]:
            res = jsonify({"message": "Já existe um usuário com este e-mail"})

    return res


@user.route("/user", methods=['GET'])
def get_all():
    response = user_service.get_all_users()
    return jsonify(response)


@user.route("/user/<string:uid>", methods=['GET'])
def get(uid):
    response = user_service.get_user(uid)
    return jsonify(response)


@user.route("/user/login", methods=['POST'])
def login_with_email_and_password():
    email = request.form['email']
    password = request.form['password']
    auth = login(email, password)
    uid = auth['localId']

    user = user_service.get_user(uid)

    return jsonify(user)


@user.route("/user/<string:uid>", methods=['PUT'])
def update(uid):
    name = request.form['name']
    document = request.form['document']
    phone = request.form['phone']
    business_name = request.form['business_name']

    user_service.update_user(uid, name, document, phone, business_name)
    return "Usuário atualizado."


@user.route("/user/<string:uid>", methods=['DELETE'])
def delete(uid):
    user_service.delete_user(uid)
    return "Usuário deletado."