from flask import Blueprint, render_template, request, jsonify
from flask_login import current_user
from app import mongo_app, bcrypt
import json, datetime, requests

essays_section = Blueprint('essays', __name__, template_folder='essays')

@essays_section.route('/essays')
def essays():
    return render_template('essays.html')

@essays_section.route('/essays/<title>')
def read_essay(title):
    print(title)
    return render_template('essay.html')

@essays_section.route('/editor')
def editor():
    return render_template('editor.html')

@essays_section.route('/post_essay', methods=['POST'])
def post_essay():
    if request.method == 'POST':
        post_data = json.loads(request.data)
        the_key = mongo_app.db.keys.find_one({'keyName': 'essaysKey'})

        if bcrypt.check_password_hash(the_key['key'], post_data['key']):
            mongo_app.db.essays.insert({
                'title': post_data['title'],
                'data': {
                    
                }
            })
            return jsonify(status="success")
        return jsonify(status="error")

@essays_section.route('/get_essays', methods=['GET'])
def get_essays():
    col_data = mongo_app.db.essays.find({})
    result = []

    for document in col_data:
        result.append({
            'title': document['title'],
            'date': document['date'],
            'image': document['image'],
            'content': document['content']
            })
    return jsonify(result)

