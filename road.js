class Road{
    constructor(x,width,laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;
        this.left=x-width/2;
        this.right=x+width/2;
        const infinity1 = 100000;

        this.top=-infinity1;
        this.bottom=infinity1;

        //Borders of the road
        const topLeft = {x:this.left,y:this.top};
        const topRight = {x:this.right,y:this.top};
        const bottomLeft = {x:this.left,y:this.bottom};
        const bottomRight = {x:this.right,y:this.bottom};

        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }
    //We need the car to be in lane center
    getLaneCenter(lanIndex){
        const laneWidth = this.width/this.laneCount;
        //Math.min is used to find the centre, if the lanecount is any number 
        return this.left+laneWidth/2+Math.min(lanIndex,this.laneCount-1)*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";
        for(let i=1;i<=this.laneCount-1;i++){
            //Linear interpolation --> To find out and render lanes according to the laneCount
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            //To set dashes in the lanes
            
            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        });
}
}
