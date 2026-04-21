from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model
with open('SVM.pickle', 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def home():
    return "Iris Classifier API is running"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array(data['features']).reshape(1, -1)
    prediction = model.predict(features)
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)