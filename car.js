class Car{
    constructor(x,y,width,height){
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.sensor = new Sensor(this);
       this.controls = new Controls();
       
       //Adding physics to the car
        this.accleration = 0.2;
        this.speed = 0;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;
    }
    update(){
        this.#move();
        this.sensor.update();
    }
    #move(){
                //In browser to go down, decrease y-axis
                if(this.controls.forward){
                    // this.y-=2;
                    //Using the accleration and speed attribute of the car
                    this.speed+=this.accleration;
                }
                //To go up
                if(this.controls.reverse){
                    this.speed-=this.accleration;
                }
                if(this.speed>this.maxSpeed){
                    this.speed = this.maxSpeed;
                }
                //I want the reverse speed cap to be less
                //'-' is for opposite direction
                if(this.speed<-this.maxSpeed/2){
                    this.speed = -this.maxSpeed/2;
                }
                //Applying friction
                if(this.speed>0){
                    this.speed-=this.friction;
                }
                if(this.speed<0){
                    this.speed+=this.friction;
                }
                //If the speed is not exactly equal to 0 then the friction is going to bounce it around and move the car forward
                //To stop this we can do
                if(Math.abs(this.speed)< this.friction){
                    this.speed = 0;
                }
                //Implementing the left and the right controls
                //And fixing the maxSpeed issue when we turn left or right
                // if(this.controls.left){
                //     // this.x-=2;
                //     this.angle += 0.03;
                // }
                // if(this.controls.right){
                //     //this.x+=2;
                //     this.angle-=0.03;
                // }
        
                //To make the left and right turns more like a real car
                if(this.speed!=0){
                    const flip = this.speed>0?1:-1;
                    if(this.controls.left){
                        this.angle+=0.03*flip;
                    }
                    if(this.controls.right){
                        this.angle-=0.03*flip;
                    }
                }
        
                //To make the car move sideways
                this.x-=Math.sin(this.angle)*this.speed;
                this.y-=Math.cos(this.angle)*this.speed;
                // this.y-=this.speed;
    }
        //Now we draw the car. First we call beginPath() to start a new path by emptying the list of sub-paths
        draw(ctx){
            //To create rotation for left and right turn
            ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(-this.angle);
            ctx.beginPath();
            //After translating the x and y we can remove the hardcoded x and y
            ctx.rect(
            // this.x-this.width/2,
            // this.y-this.height/2,
               -this.width/2,
               -this.height/2,
               this.width,
               this.height
            );
            ctx.fill();
            ctx.restore();
            this.sensor.draw(ctx);
        }
}