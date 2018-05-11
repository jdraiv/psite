
from flask import Blueprint, request, render_template, redirect
from .User import UserModel

import flask_login


auth = Blueprint('auth', __name__, template_folder='auth')


@auth.route('/login_post', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        pwd = request.form['password']

        user = UserModel()
        user.id = email

        flask_login.login_user(user)

        return redirect('/protected')

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
