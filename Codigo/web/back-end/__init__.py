from flask import Flask, render_template
from flask_cors import CORS

from controllers.ad_controller import ad
from controllers.post_controller import post
from controllers.forum_controller import forum
from controllers.user_controller import user
from controllers.video_controller import video
from controllers.author_controller import author
from controllers.symbol_controller import symbol
from controllers.video_category_controller import video_category
from controllers.symbol_category_controller import symbol_category
from controllers.video_subcategory_controller import video_subcategory
from controllers.symbol_subcategory_controller import symbol_subcategory
from controllers.post_view_controller import post_view
from controllers.symbol_view_controller import symbol_view
from controllers.video_view_controller import video_view
from controllers.calculator_view_controller import calculator_view
from controllers.forum_view_controller import forum_view

from middlewares.security import Security

app = Flask(__name__)
app.config.from_pyfile("credentials/config.py")
app.wsgi_app = Security(app.wsgi_app)

app.register_blueprint(post)
app.register_blueprint(forum)
app.register_blueprint(author)
app.register_blueprint(symbol)
app.register_blueprint(symbol_category)
app.register_blueprint(symbol_subcategory)
app.register_blueprint(video)
app.register_blueprint(video_category)
app.register_blueprint(video_subcategory)
app.register_blueprint(ad)
app.register_blueprint(user)

app.register_blueprint(post_view)
app.register_blueprint(symbol_view)
app.register_blueprint(video_view)
app.register_blueprint(calculator_view)
app.register_blueprint(forum_view)

CORS(app)


@app.route("/")
def hello():
    return "2i API"


if __name__ == "__main__":
    app.run()
