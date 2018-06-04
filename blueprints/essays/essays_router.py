from flask import Blueprint, render_template, request
from flask_login import current_user


essays_section = Blueprint('essays', __name__, template_folder='essays')


@essays_section.route('/editor')
def editor():
    return render_template('editor.html')