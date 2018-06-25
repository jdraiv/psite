
from flask import Flask
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt

import flask_login
import os

flask_app = Flask(__name__)

# Production Igniter

flask_app.config.update(
    DEBUG=True,
    SECRET_KEY=os.environ.get('SECRET_KEY', None),
    MONGO_URI=os.environ.get('DB_URL', None)
)


mongo_app = PyMongo(flask_app)
bcrypt = Bcrypt(flask_app)

# Blueprints
from views.routes import views
from auth.auth_router import auth
from blueprints.projects.projects_router import projects_section

flask_app.register_blueprint(views)
flask_app.register_blueprint(auth)
flask_app.register_blueprint(projects_section)
