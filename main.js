//Stretching the canavas vertically(road-like)
const canavas = document.getElementById("myCanavas");
// canavas.height = window.innerHeight; Later moved inside animate() to solve the console issue
canavas.width = 200;

//To draw on the canvas we need to get context
const ctx = canavas.getContext("2d");
const road = new Road(canavas.width/2,canavas.width*0.9);
//Creating the car object
const car = new Car(road.getLaneCenter(1),100,30,50);
car.draw(ctx);

//To bring draw() and update() together
animate();

function animate(){
    car.update();
    canavas.height = window.innerHeight;
    //To make the camera follow the car, we save(),translate(), draw() and restore()
    ctx.save();
    //To render the car at 50% the height of the canavas
    ctx.translate(0,-car.y+canavas.height*0.5);
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}
