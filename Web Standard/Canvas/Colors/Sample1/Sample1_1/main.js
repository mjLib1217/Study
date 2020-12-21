const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

const MAX_ROWS = 10;
const MAX_COLS = 10;

for(let i = 0; i < MAX_ROWS; i++) {
    for(let j = 0; j < MAX_COLS; j++) {
        context.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ', ' + Math.floor(255 - 25.5 * j) + ', 0)';
        
        let rectangle = new Path2D();
        rectangle.rect(25 * j, 25 * i, 25, 25);
        context.fill(rectangle);
    }
}

for(let i = 0; i < MAX_ROWS; i++) {
    for(let j = 0; j < MAX_COLS; j++) {
        context.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ', ' + '0, ' + Math.floor(255 - 25.5 * j) + ')';
        
        let rectangle = new Path2D();
        rectangle.rect(250 + 25 * j, 25 * i, 25, 25);
        context.fill(rectangle);
    }
}

for(let i = 0; i < MAX_ROWS; i++) {
    for(let j = 0; j < MAX_COLS; j++) {
        context.fillStyle = 'rgb(0, ' + Math.floor(255 - 25.5 * i) + ', ' + Math.floor(255 - 25.5 * j) + ')';
        
        let rectangle = new Path2D();
        rectangle.rect(25 * j, 250 + 25 * i, 25, 25);
        context.fill(rectangle);
    }
}

for(let i = 0; i < MAX_ROWS; i++) {
    for(let j = 0; j < MAX_COLS; j++) {
        context.fillStyle = 'rgb(255, ' + Math.floor(255 - 25.5 * i) + ', ' + Math.floor(255 - 25.5 * j) + ')';
        
        let rectangle = new Path2D();
        rectangle.rect(250 + 25 * j, 250 + 25 * i, 25, 25);
        context.fill(rectangle);
    }
}