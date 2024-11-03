let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1; // Número secreto entre 1 y 20
    attempts = 0; // Reinicia los intentos
    document.getElementById("feedback").textContent = ""; // Limpia el mensaje de feedback
    document.getElementById("guess-input").value = ""; // Limpia el campo de entrada
}

function checkGuess() {
    const guess = Number(document.getElementById("guess-input").value);
    attempts++;

    if (guess < 1 || guess > 20) {
        alert("Por favor, introduce un número entre 1 y 20.");
        return;
    }

    if (guess === secretNumber) {
        document.getElementById("feedback").textContent = `¡Correcto! El número era ${secretNumber}.`;
        document.querySelector(".restart-button").style.display = "block"; // Muestra el botón para reiniciar
    } else if (guess < secretNumber) {
        document.getElementById("feedback").textContent = "Demasiado bajo. Intenta de nuevo.";
    } else {
        document.getElementById("feedback").textContent = "Demasiado alto. Intenta de nuevo.";
    }
}

function restartGame() {
    startGame();
    document.querySelector(".restart-button").style.display = "none"; // Oculta el botón para reiniciar
}

// Inicia el juego cuando se carga la página
window.onload = startGame;
