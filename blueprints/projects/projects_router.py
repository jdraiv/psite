from flask import Blueprint, request, render_template, redirect, jsonify
from flask_login import current_user

from server import mongo_app, bcrypt
import json


projects_section = Blueprint('projects', __name__, template_folder='projects')


@projects_section.route('/projects')
def projects():
    return render_template('projects.html')

@projects_section.route('/add_project', methods=['POST'])
def add_project():
    if request.method == 'POST':
        post_data = json.loads(request.data)
        the_key = mongo_app.db.keys.find_one({'keyName': 'projectsKey'})

        if bcrypt.check_password_hash(the_key['key'], post_data['securityKey']):
            mongo_app.db.projects.insert({'name': post_data['name'], 'link': post_data['link']})
            return jsonify(status="Success")
        return jsonify(status="Error")

