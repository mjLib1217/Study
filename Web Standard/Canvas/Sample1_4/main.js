const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;

document.body.appendChild(canvas);

const context = canvas.getContext('2d');

const ROW_MAX = 4;
const COL_MAX = 3;

draw();

function draw() {
    for(let i = 0; i < ROW_MAX; i++) {
        for(let j = 0; j < COL_MAX; j++) {
         
            context.beginPath();

            let xPos = 50 + 50 * j;
            let yPos = 50 + 50 * i;
            let radius = 20;
            let startAngle = 0;

            let endAngle = Math.PI;
            
            if(Math.PI * j !== 0) {
                endAngle += (Math.PI * j) / 2;
            }

            let antiClockWise = i % 2  !== 0;

            context.arc(xPos, yPos, radius, startAngle, endAngle, antiClockWise);

            if(i > 1) {
                context.fill();
            } else {
                context.stroke();
            }
        }
    }
}