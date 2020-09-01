import json
import pyrebase


def setCredential():
    with open('credentials/TIS3-2I-50f1439d65a7.json') as source:
        info = json.load(source)

    return pyrebase.initialize_app(info)


def signUp(email, password):
    firebase = setCredential()
    auth = firebase.auth()
    return auth.create_user_with_email_and_password(email, password)


def login(email, password):
    firebase = setCredential()
    auth = firebase.auth()
    login_token = auth.sign_in_with_email_and_password(email, password)

    return login_token


def resetPassword(self, email):
    firebase = self.setCredential()
    auth = firebase.auth()
    password_reset = auth.send_password_reset_email(email)
