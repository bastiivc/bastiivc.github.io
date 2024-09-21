console.log("El script se está ejecutando");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const audioElement = document.getElementById("backgroundMusic");


audioElement.volume = 0.1; // Ajusta el volumen al 50%
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFlower(x, y, radius, petals, color) {
    // Dibuja el tallo
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 301);
    ctx.strokeStyle = "black"; // Color negro para el contorno
    ctx.lineWidth = 21; // Grosor del contorno
    ctx.stroke(); // Dibuja el contorno del tallo

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 300);
    ctx.strokeStyle = "green"; // Color verde para el tallo
    ctx.lineWidth = 20; // Grosor del tallo
    ctx.stroke(); // Dibuja el tallo

    // Dibuja los pétalos como óvalos
    ctx.fillStyle = color;
    for (let i = 0; i < petals; i++) {
        const angle = (i * 2 * Math.PI) / petals;
        const petalX = x + Math.cos(angle) * radius; // Posición en X
        const petalY = y + Math.sin(angle) * radius; // Posición en Y

        ctx.beginPath();
        ctx.ellipse(petalX, petalY, radius / 2, radius / 4, angle, 0, 2 * Math.PI); // Dibuja un óvalo
        ctx.fill();
    }

    // Dibuja el centro de la flor
    ctx.beginPath();
    ctx.arc(x, y, radius / 2.5, 0, 2 * Math.PI);
    ctx.fillStyle = "orange"; // Centro de la flor
    ctx.fill();
}

function drawGrassTexture() {
    for (let i = 0; i < 100000; i++) { // Cambia 200 para más o menos manchas
        const x = Math.random() * canvas.width; // Posición aleatoria en X
        const y = Math.random() * canvas.height; // Posición aleatoria en Y
        const radius = Math.random() * 10 + 5; // Tamaño aleatorio para las manchas

        ctx.beginPath();
        ctx.ellipse(x, y, radius / 2, radius / 4, Math.random() * Math.PI, 0, 2 * Math.PI); // Dibuja una mancha verde
        ctx.fillStyle = 'rgba(0, 128, 0, 0.5)'; // Color verde con opacidad
        ctx.fill();
    }
}


function drawText() {
    ctx.fillStyle = "white"; // Color del texto
    ctx.font = "24px Arial"; // Fuente y tamaño
    ctx.textAlign = "center"; // Alinear al centro
    ctx.fillText("No vas a ser espectadora <3", canvas.width / 2, canvas.height / 2 + 120); // Dibuja el texto
    ctx.fillText("Con amor para: vc <3", canvas.width / 2, canvas.height / 2 + 150);
}


function showElement(element) {
    element.style.display = "block";
}

function hideElement(element) {
    element.style.display = "none";
}

// Manejo de eventos para los botones

document.getElementById("startButton").addEventListener("click", function() {
    hideElement(document.getElementById("startButton")); // Ocultar el botón "Comenzar"
    showElement(document.querySelector(".message")); // Mostrar el primer mensaje
    showElement(document.getElementById("nextButton")); // Mostrar el botón "Avanzar"
    audioElement.play(); // Comenzar la música
});

document.getElementById("nextButton").addEventListener("click", function() {
    hideElement(document.querySelector(".message"));
    hideElement(document.getElementById("nextButton")); // Ocultar el botón del primer mensaje
    showElement(document.querySelector(".final-message"));
});

document.getElementById("finalNextButton").addEventListener("click", function() {
    hideElement(document.querySelector(".final-message"));
    hideElement(document.getElementById("finalNextButton")); // Ocultar el botón de la segunda pantalla
    showElement(document.querySelector(".third-message"));
});

document.getElementById("thirdNextButton").addEventListener("click", function() {
    hideElement(document.querySelector(".message"));
    hideElement(document.querySelector(".final-message"));
    hideElement(document.querySelector(".third-message"));
    hideElement(document.getElementById("thirdNextButton")); // Ocultar el botón de la tercera pantalla
    showElement(canvas); // Mostrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

    drawGrassTexture(); // Dibuja la textura de pasto

    const centerX = canvas.width / 2; // Centro en X
    const centerY = canvas.height / 2; // Centro en Y
    const radius = 60; // Radio de los pétalos
    const petals = 8; // Número de pétalos

    drawFlower(centerX, centerY, radius, petals, '#FFD700'); // Dibuja una flor amarilla grande
    drawText();
});
