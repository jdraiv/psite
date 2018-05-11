
from flask import Flask

# Blueprints
from views.routes import views
from auth.main import auth
from auth.User import UserModel

import flask_login


flask_app = Flask(__name__)

flask_app.config.update(
    DEBUG=True,
    SECRET_KEY='not-secret'
)

flask_app.register_blueprint(views)
flask_app.register_blueprint(auth)


login_manager = flask_login.LoginManager()
login_manager.init_app(flask_app)
login_manager.session_protection = "strong"


@login_manager.user_loader
def load_user(user_id):
    user = UserModel()
    user.id = user_id
    return user