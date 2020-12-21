const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(140, 90);
context.arc(90, 90, 50, 0, Math.PI * 2, true);
context.moveTo(125, 90);
context.arc(90, 90, 35, 0, Math.PI, false);
context.moveTo(80, 75);
context.arc(75, 75, 5, 0, Math.PI * 2, true);
context.moveTo(110, 75);
context.arc(105, 75, 5, 0, Math.PI * 2, true);
context.closePath();
context.stroke();