from flask import Flask
from flask_cors import CORS

from server.app.middlewares.security import Security

from server.app.controllers.ad import ad
from server.app.controllers.post import post
from server.app.controllers.user import user
from server.app.controllers.video import video
from server.app.controllers.author import author
from server.app.controllers.symbol import symbol
from server.app.controllers.video_category import video_category
from server.app.controllers.symbol_category import symbol_category
from server.app.controllers.video_sub_category import video_sub_category
from server.app.controllers.symbol_sub_category import symbol_sub_category
from server.app.controllers.post_view import post_view
from server.app.controllers.symbol_view import symbol_view
from server.app.controllers.video_view import video_view
from server.app.controllers.calculator_view import calculator_view

app = Flask(__name__)
app.config.from_pyfile("credentials/config.py")
app.wsgi_app = app.wsgi_app

app.register_blueprint(post)
app.register_blueprint(author)
app.register_blueprint(symbol)
app.register_blueprint(symbol_category)
app.register_blueprint(symbol_sub_category)
app.register_blueprint(video)
app.register_blueprint(video_category)
app.register_blueprint(video_sub_category)
app.register_blueprint(ad)
app.register_blueprint(user)

app.register_blueprint(post_view)
app.register_blueprint(symbol_view)
app.register_blueprint(video_view)
app.register_blueprint(calculator_view)

CORS(app)


@app.route("/")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run()
