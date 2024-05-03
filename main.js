const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const stepSize = 80; // Розмір кожного квадрата
const steps = 4; // Кількість сходинок

// Отримуємо реальні розміри вікна браузера
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Початкові координати для малювання сходинок
let x = (canvas.width - stepSize * steps) / 2; // Центруємо лестницю по горизонталі
let y = (canvas.height - stepSize * steps) / 2 + stepSize * (steps - 1); // Починаємо малювати знизу

// Заповнюємо сходинки білим квадратом
for (let i = 0; i < steps; i++) {
    ctx.fillStyle = 'white'; // Встановлюємо колір квадрата
    ctx.fillRect(x, y, stepSize, stepSize);
    x += stepSize;
    y -= stepSize; // Зменшуємо y для відступу між квадратами
}
