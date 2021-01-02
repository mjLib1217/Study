const PI2 = Math.PI * 2;

export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
    }

    animate(context, moveX) {
        context.save();
        context.fillStyle = '#000';
        
        this.showPolygon3(context, moveX);

        context.restore();
    }

    showPolygon1(context, moveX) {
        context.beginPath();
    
        const angle = PI2 / this.sides;
        
        context.translate(this.x, this.y);
    
        this.rotate -= moveX * 0.008;
        context.rotate(this.rotate);
    
        for(let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);
    
            (i == 0) ? context.moveTo(x, y) : context.lineTo(x, y);
        }
        context.fill();
        context.closePath();
    }

    showPolygon2(context, moveX) {
        context.beginPath();
    
        const angle = PI2 / this.sides;
        
        context.translate(this.x, this.y);
    
        this.rotate -= moveX * 0.008;
        context.rotate(this.rotate);
    
        for(let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);
    
            // (i == 0) ? context.moveTo(x, y) : context.lineTo(x, y);
            context.beginPath();
            context.arc(x, y, 30, 0, PI2, false);
            context.fill();
        }
        // context.closePath();
    }    

    showPolygon3(context, moveX) {
        context.beginPath();
    
        const angle = PI2 / this.sides;
        const angle2 = PI2 / 4;

        context.translate(this.x, this.y);
    
        this.rotate -= moveX * 0.008;
        context.rotate(this.rotate);
    
        for(let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);
            
            context.save();
            context.translate(x, y);
            context.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);
            context.beginPath();
            for(let j = 0; j < 4; j++) {
                const x2 = 80 * Math.cos(angle2 * j);
                const y2 = 80 * Math.sin(angle2 * j);
                ( j == 0 ? context.moveTo(x2, y2) : context.lineTo(x2, y2));
            }
            context.fill();
            context.closePath();
            context.restore();
        }
    }    
}

