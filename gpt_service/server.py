from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
from gpt import talk_to_gpt

load_dotenv()
app = Flask(__name__)
CORS(app)

@app.route('/gpt', methods=['POST'])
def chat_gpt():
    return jsonify({'message': talk_to_gpt(request.json['message'])})
    
if __name__ == '__main__':
    app.run(debug=True)
