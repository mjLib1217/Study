const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

let rectangle = new Path2D();
rectangle.rect(10, 10, 50, 50);

let circle = new Path2D();
circle.arc(100, 35, 25, 0, Math.PI * 2);

context.stroke(rectangle);
context.fill(circle);