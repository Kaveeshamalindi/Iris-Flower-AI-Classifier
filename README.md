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


