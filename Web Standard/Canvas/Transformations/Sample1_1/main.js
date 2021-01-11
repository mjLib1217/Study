const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

context.fillRect(0, 0, 150, 150);
context.save();

context.fillStyle = '#09F';
context.fillRect(15, 15, 120, 120);
context.save();

context.fillStyle = '#FFF';
context.globalAlpha = 0.5;
context.fillRect(30, 30, 90, 90);

context.restore();
context.fillRect(45, 45, 60, 60);

context.restore();
context.fillRect(60, 60, 30, 30);