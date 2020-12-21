const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

roundedRect(context, 12, 12, 150, 150, 15);
roundedRect(context, 19, 19, 150, 150, 9);
roundedRect(context, 53, 53, 49, 33, 10);
roundedRect(context, 53, 119, 49, 16, 6);
roundedRect(context, 135, 53, 49, 33, 10);
roundedRect(context, 135, 119, 25, 49, 10);

context.beginPath();
context.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
context.lineTo(31, 37);
context.fill();

for (var i = 0; i < 8; i++) {
  context.fillRect(51 + i * 16, 35, 4, 4);
}

for (i = 0; i < 6; i++) {
  context.fillRect(115, 51 + i * 16, 4, 4);
}

for (i = 0; i < 8; i++) {
  context.fillRect(51 + i * 16, 99, 4, 4);
}

context.beginPath();
context.moveTo(83, 116);
context.lineTo(83, 102);
context.bezierCurveTo(83, 94, 89, 88, 97, 88);
context.bezierCurveTo(105, 88, 111, 94, 111, 102);
context.lineTo(111, 116);
context.lineTo(106.333, 111.333);
context.lineTo(101.666, 116);
context.lineTo(97, 111.333);
context.lineTo(92.333, 116);
context.lineTo(87.666, 111.333);
context.lineTo(83, 116);
context.fill();

context.fillStyle = 'white';
context.beginPath();
context.moveTo(91, 96);
context.bezierCurveTo(88, 96, 87, 99, 87, 101);
context.bezierCurveTo(87, 103, 88, 106, 91, 106);
context.bezierCurveTo(94, 106, 95, 103, 95, 101);
context.bezierCurveTo(95, 99, 94, 96, 91, 96);
context.moveTo(103, 96);
context.bezierCurveTo(100, 96, 99, 99, 99, 101);
context.bezierCurveTo(99, 103, 100, 106, 103, 106);
context.bezierCurveTo(106, 106, 107, 103, 107, 101);
context.bezierCurveTo(107, 99, 106, 96, 103, 96);
context.fill();

context.fillStyle = 'black';
context.beginPath();
context.arc(101, 102, 2, 0, Math.PI * 2, true);
context.fill();

context.beginPath();
context.arc(89, 102, 2, 0, Math.PI * 2, true);
context.fill();
  
// A utility function to draw a rectangle with rounded corners.
function roundedRect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x, y + radius);
    context.lineTo(x, y + height - radius);
    context.arcTo(x, y + height, x + radius, y + height, radius);
    context.lineTo(x + width - radius, y + height);
    context.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    context.lineTo(x + width, y + radius);
    context.arcTo(x + width, y, x + width - radius, y, radius);
    context.lineTo(x + radius, y);
    context.arcTo(x, y, x, y + radius, radius);
    context.stroke();
}
  
