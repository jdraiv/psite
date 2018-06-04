
from flask import Flask
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt

from transformer import convert_to_js

import flask_login
import secret


flask_app = Flask(__name__)

flask_app.config.update(
    DEBUG=True,
    SECRET_KEY='not-secret',
    MONGO_URI=secret.db_url,
)

mongo_app = PyMongo(flask_app)
bcrypt = Bcrypt(flask_app)

# Blueprints
from views.routes import views
from auth.auth_router import auth
from blueprints.projects.projects_router import projects_section
from blueprints.essays.essays_router import essays_section

flask_app.register_blueprint(views)
flask_app.register_blueprint(auth)
flask_app.register_blueprint(projects_section)
flask_app.register_blueprint(essays_section)


# convert_to_js('Test')