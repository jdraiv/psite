
from flask import Blueprint, render_template


views = Blueprint('views', __name__, template_folder='templates')


@views.route('/')
def homepage_view():
    return 'Homepage!'


@views.route('/login')
def login_view():
    return render_template('login.html')

