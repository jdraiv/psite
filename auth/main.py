
from flask import Blueprint, request, render_template, redirect
from .User import User
from server import flask_app, mongo_app, bcrypt
import flask_login


auth = Blueprint('auth', __name__, template_folder='auth')

# Setup
login_manager = flask_login.LoginManager()
login_manager.init_app(flask_app)
login_manager.session_protection = "strong"


@login_manager.user_loader
def load_user(user_id):
    c_user = User()
    c_user.id = user_id
    return c_user


@auth.route('/login_post', methods=['POST'])
def login():
    if request.method == 'POST':
        user = request.form['username']
        pw = request.form['password']

        collection = mongo_app.db.user
        valid_user = collection.find_one({'userID': user})

        if valid_user:
            if bcrypt.check_password_hash(valid_user['pw'], pw):
                user_class = User()
                user_class.id = user
                flask_login.login_user(user_class)
                return redirect('/protected')
        return redirect('/')


@auth.route('/logout')
@flask_login.login_required
def logout():
    flask_login.logout_user()
    return redirect('/')


# Protected routes
@auth.route('/protected')
@flask_login.login_required
def protected():
    return 'Logged in as: ' + flask_login.current_user.id
