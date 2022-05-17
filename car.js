class Car{
    constructor(x,y,width,height){
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height; 
       this.controls = new Controls();
    }
    //Now we draw the car. First we call beginPath() to start a new path by emptying the list of sub-paths
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
           this.x-this.width/2,
           this.y-this.height/2,
           this.width,
           this.height
        );
        ctx.fill();
    }
}