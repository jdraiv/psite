
from flask import Flask
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt

import flask_login
import secret
import os


flask_app = Flask(__name__)

# Production Igniter
is_prod = os.environ.get('IS_HEROKU', None)

if not is_prod:
    flask_app.config.update(
        DEBUG=True,
        SECRET_KEY=secret.secret_key,
        MONGO_URI=secret.db_url,
    )
else:
    flask_app.config.update(
        DEBUG=True,
        SECRET_KEY=os.environ.get('DB_URL', None),
        MONGO_URI=os.environ.get('SECRET_KEY', None)
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
