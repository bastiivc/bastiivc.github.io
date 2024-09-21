const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFlower(x, y, radius, petals, color) {
    ctx.fillStyle = color;
    ctx.beginPath();

    for (let i = 0; i < petals; i++) {
        const angle = (i * 2 * Math.PI) / petals;
        const petalX = x + Math.cos(angle) * radius;
        const petalY = y + Math.sin(angle) * radius;

        ctx.moveTo(x, y);
        ctx.lineTo(petalX, petalY);
    }

    ctx.closePath();
    ctx.fill();
}

function animateFlowers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 20 + 10;
        const petals = 5 + Math.floor(Math.random() * 4);

        drawFlower(x, y, radius, petals, '#FFD700');
    }

    requestAnimationFrame(animateFlowers);
}
animateFlowers();