const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

context.fillStyle = 'rgba(255, 0, 0, 0.5)';
context.fillRect(10, 10, 300, 300);