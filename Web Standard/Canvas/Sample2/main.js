const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, 10);
context.lineTo(10, 35);
context.lineTo(35, 10);
context.fill();

context.beginPath();
context.moveTo(40, 40);
context.lineTo(40, 15);
context.lineTo(15, 40);
context.closePath();
context.stroke();