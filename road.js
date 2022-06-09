class Road{
    constructor(x,width,laneCount=4){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;
        this.left=x-width/2;
        this.right=x+width/2;
        const infinity1 = 100000;

        this.top=-infinity1;
        this.bottom=infinity1;
    }
    //We need the car to be in lane center
    getLaneCenter(lanIndex){
        const laneWidth = this.width/this.laneCount;
        return this.left+laneWidth/2+lanIndex*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";
        for(let i=0;i<=this.laneCount;i++){
            //Linear interpolation --> To find out and render lanes according to the laneCount
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            //To set dashes in the lanes
            if(i>0 && i<this.laneCount){
                ctx.setLineDash([20,20]);
            }else{
                ctx.setLineDash([]);
            }
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }
}
}
