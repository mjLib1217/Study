const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

const colors = ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'];

// Rectangle Sample 1
context.fillStyle = colors[0];
context.fillRect(10, 10, 50, 50);

context.fillStyle = colors[1];
context.fillRect(35, 35, 50, 50);

context.fillStyle = colors[2];
context.fillRect(65, 65, 50, 50);

// Rectangle Sample 2
// context.fillStyle = colors[0];
context.strokeRect(120, 10, 50, 50);

// context.fillStyle = colors[1];
context.strokeRect(145, 35, 50, 50);

// context.fillStyle = colors[2];
context.strokeRect(175, 60, 50, 50);

context.fillStyle = 'rgba(0, 0, 0, 1)';
context.fillRect(230, 10, 100, 100);
context.clearRect(250, 30, 60, 60);
context.strokeRect(260, 40, 40, 40);