from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api', methods=['GET'])
def get_data():
    return {'message': '✅'}
