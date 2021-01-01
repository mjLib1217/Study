import {Point} from './point.js';
import {Dialog} from './dialog.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');        
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.mousePos = new Point();
        this.curItem = null;

        this.items = [];
        this.total = 5;

        for(let i = 0; i < this.total; i++) {
            this.items[i] = new Dialog();
        }

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

        document.addEventListener('pointerdown', this.onDown.bind(this), false);
        document.addEventListener('pointermove', this.onMove.bind(this), false);
        document.addEventListener('pointerup', this.onUp.bind(this), false);
    }

    resize() {

        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.context.scale(this.pixelRatio, this.pixelRatio);

        this.context.shadowOffsetX = 0;
        this.context.shadowOffsetY = 3;
        this.context.shawdowBlur = 6;
        this.context.shadowColor = 'rgba(0, 0, 0, 0.1)';

        this.context.lineWidth = 2;

        for ( let i = 0 ; i < this.items.length; i++) {
            this.items[i].resize(this.stageWidth, this.stageHeight);
        }
        
    }
    
    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        
        this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);
        
        for ( let i = 0 ; i < this.items.length; i++) {
            this.items[i].animate(this.context);
        }

        if(this.curItem) {
            this.context.fillStyle = '#ff4338';
            this.context.strokeStyle = '#ff4338';

            this.context.beginPath();
            this.context.arc(this.mousePos.x, this.mousePos.y, 8, 0, Math.PI * 2 );
            this.context.fill();

            this.context.beginPath();
            this.context.arc(this.curItem.centerPos.x, this.curItem.centerPos.y, 8, 0, Math.PI * 2 );
            this.context.fill();
            
            this.context.beginPath();
            this.context.moveTo(this.mousePos.x, this.mousePos.y);
            this.context.lineTo(this.curItem.centerPos.x, this.curItem.centerPos.y);
            this.context.stroke();
        }
    }
    
    onDown(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;
        
        for ( let i = this.items.length - 1; i >= 0 ; i--) {
            const item = this.items[i].down(this.mousePos.clone());
            if(item) {
                this.curItem = item;
                const index = this.items.indexOf(item);
                this.items.push(this.items.splice(index, 1)[0]);
                break;
            }
        }
    }
    
    onMove(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;

        for ( let i = 0 ; i < this.items.length; i++) {
            this.items[i].move(this.mousePos.clone());
        }
        
    }
    
    onUp(e) {
        this.curItem = null;
    
        for ( let i = 0 ; i < this.items.length; i++) {
            this.items[i].up();
        }
    }
}

window.onload = () => {
    new App();
};