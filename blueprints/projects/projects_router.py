from flask import Blueprint, request, render_template, redirect, jsonify
from flask_login import current_user
from server import mongo_app, bcrypt
import json


projects_section = Blueprint('projects', __name__, template_folder='projects')


@projects_section.route('/projects')
def projects():
    col_data = mongo_app.db.projects.find({})
    result = {}

    for document in col_data:
        if document['category'] not in result:
            result[document['category']] = [{'name': document['name'], 'link': document['link']}]
        else:
            result[document['category']].append({'name': document['name'], 'link': document['link']})

    return jsonify(result)
    
@projects_section.route('/add_project', methods=['POST'])
def add_project():
    if request.method == 'POST':
        post_data = json.loads(request.data)
        the_key = mongo_app.db.keys.find_one({'keyName': 'projectsKey'})

        if bcrypt.check_password_hash(the_key['key'], post_data['securityKey']):
            mongo_app.db.projects.insert({
                'name': post_data['name'], 
                'category': post_data['category'], 
                'link': post_data['link']
                })
            print("Success")
            return jsonify(status="Success")
        print("error")
        return jsonify(status="Error")

