from flask import Flask, request, jsonify
from flask_cors import CORS
from gpt import talk_to_gpt

app = Flask(__name__)
CORS(app)

@app.route('/gpt', methods=['POST'])
def chat_gpt():
    try:
        return jsonify({'message': talk_to_gpt(request.json['message'])})
    
    except Exception as e:
        return jsonify({'error': str(e)})
    
if __name__ == '__main__':
    app.run(debug=True)
