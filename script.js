function predict() {

    const sl = document.getElementById("sl").value;
    const sw = document.getElementById("sw").value;
    const pl = document.getElementById("pl").value;
    const pw = document.getElementById("pw").value;

    const result = document.getElementById("result");
    const error = document.getElementById("error");

    result.innerText = "";
    error.innerText = "";

    if (!sl || !sw || !pl || !pw) {
        error.innerText = "⚠️ Please enter all values";
        return;
    }

    fetch('http://127.0.0.1:5000/predict', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            features: [parseFloat(sl), parseFloat(sw), parseFloat(pl), parseFloat(pw)]
        })
    })
    .then(res => res.json())
    .then(data => {
        result.innerText = "🌼 Prediction: " + data.prediction;
    });
}


function showInfo(type) {

    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");

    let message = "";

    if (type === "setosa") {
        message = "🌸 Setosa: Small petals, easiest to classify. Usually found in colder regions.";
    }
    else if (type === "versicolor") {
        message = "🌼 Versicolor: Medium-sized petals, very common iris species.";
    }
    else if (type === "virginica") {
        message = "🌺 Virginica: Large petals, grows in wetter environments.";
    }

    text.innerText = message;
    modal.style.display = "flex";
}

// close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// optional: click outside to close
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}