const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

const ROW_MAX = 4;
const COL_MAX = 3;

draw();

function draw() {
    context.beginPath();
    context.moveTo(75, 25);
    context.quadraticCurveTo(25, 25, 25, 62.5);
    context.quadraticCurveTo(25, 100, 50, 100);
    context.quadraticCurveTo(50, 120, 30, 125);
    context.quadraticCurveTo(60, 120, 65, 100);
    context.quadraticCurveTo(125, 100, 125, 62.5);
    context.quadraticCurveTo(125, 25, 75, 25);
    context.stroke();
}