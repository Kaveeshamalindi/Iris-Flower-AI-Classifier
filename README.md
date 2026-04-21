# 🌸 Iris Flower AI Classifier 🌸

An end-to-end **Machine Learning** + **Flask Web Application** that classifies Iris flowers into **Setosa**, **Versicolor**, 
or **Virginica** using an **SVM (Support Vector Machine) model** trained on the classic Iris dataset.

---

## 🚀 Project Overview

This project combines:

- Machine Learning model training (Scikit-learn)
- Model deployment using Flask API
- Frontend UI (HTML, CSS, JavaScript)
- Real-time prediction of Iris flower species

Users can input flower measurements and get instant predictions powered by an AI model.

---

## 🧠 Machine Learning Model

- Algorithm: Support Vector Machine (SVM)
- Dataset: Iris dataset

### Features:
- Sepal Length
- Sepal Width
- Petal Length
- Petal Width

### Output:
- Setosa
- Versicolor
- Virginica

The trained model is saved as:

```
SVM.pickle
```

---

## 🏗️ Project Structure

```
Iris-Flower-AI-Classifier/
│
├── app.py                # Flask backend API
├── SVM.pickle           # Trained ML model
├── index.html           # Frontend UI
├── style.css            # Styling
├── script.js            # Frontend logic
└── README.md
```

---

## ⚙️ Technologies Used

### Backend
- Python
- Flask
- Flask-CORS
- NumPy
- Pickle

### Machine Learning
- Scikit-learn
- Pandas
- Seaborn
- Matplotlib

### Frontend
- HTML5
- CSS3
- JavaScript

---

## 📡 Flask API

### ➤ Home Route

```
GET /
```

**Returns:**

```
Iris Classifier API is running
```

### ➤ Prediction Route

```
POST /predict
```

**Request Body (JSON):**

```
{
  "features": [5.1, 3.5, 1.4, 0.2]
}
```

**Response:**

```
{
  "prediction": "setosa"
}
```

---

## ▶️ How to Run the Project

1. Clone the Repository

```
git clone https://github.com/Kaveeshamalindi/Iris-Flower-AI-Classifier.git
cd Iris-Flower-AI-Classifier
```

2. Install Dependencies

```
pip install flask flask-cors numpy scikit-learn
```

3. Run Flask Server

```
python app.py
```

Server will run at:

```
http://127.0.0.1:5000/
```

---

## 🌐 Frontend Usage

1. Open index.html in a browser
2. Enter:
- Sepal Length
- Sepal Width
- Petal Length
- Petal Width
3. Click **Predict**
4. Get instant AI prediction 🎯

---

## 📊 Model Training

The model was trained using the Iris dataset:

Dataset Source:

```
https://raw.githubusercontent.com/jbrownlee/Datasets/master/iris.csv
```

Steps:

1. Data exploration & visualization
2. Train-test split (80/20)
3. SVM training
4. Model evaluation (accuracy, confusion matrix)
5. Save model using pickle

---

## 📈 Model Performance

- High accuracy on test dataset
- Evaluated using:
Accuracy Score
Classification Report
Confusion Matrix

---

## 🌟 Features
- Real-time prediction API
- Simple and clean UI
- Machine learning model integration
- Fully responsive frontend
- Easy to extend with other models

## 📌 Future Improvements
- Add more ML models (Random Forest, KNN, etc.)
- Deploy on cloud (Render / Heroku / AWS)
- Add database logging for predictions
- Improve UI with React

---

👨‍💻 Author

Kaveesha Malindi

