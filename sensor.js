class Sensor{
    constructor(car){
       this.car = car;
       this.rayCount = 3;
       this.rayLength = 100;
       this.raySpread = Math.PI/4;
       //Keeps the rays after we create them
       this.rays=[];
    }
    update(){
        this.rays=[];
        for(let i=0;i<this.rayCount;i++){
            const rayAngle = lerp(
                this.raySpread/2,
                -this.raySpread/2,
                i/(this.rayCount-1)
            );
            //Calculate the start and the end point for the rays
            const start = {x:this.car.x, y:this.car.y};
            const end = {
                //Scale the ray
                x:this.car.x-Math.sin(rayAngle)*this.rayLength,
                y:this.car.y-Math.cos(rayAngle)*this.rayLength
            };
            //Now with the start and end points avaliable we will push it to rays[]
            this.rays.push([start,end]);
        }
    }
    /**
     * Drawing the rays
     * -----------------
     * 1.beginPath
     * 2.Set the line width
     * 3.Set the stroke style
     * 4.moveTo(x,y)
     * 5.lineTo(x,y)
     * 6.stroke()
     */
    draw(ctx){
        for(let i=0;i<this.rayCount;i++){
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="yellow";
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );
            ctx.lineTo(
                this.rays[i][1].x,
                this.rays[i][1].y
            );
            ctx.stroke();
        }
    }
}