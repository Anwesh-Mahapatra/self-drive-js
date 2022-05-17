//Stretching the canavas vertically(road-like)
const canavas = document.getElementById("myCanavas");
// canavas.height = window.innerHeight; Later moved inside animate() to solve the console issue
canavas.width = 200;

//To draw on the canvas we need to get context
const ctx = canavas.getContext("2d");
//Creating the car object
const car = new Car(100,100,30,50);
car.draw(ctx);

//To bring draw() and update() together
animate();

function animate(){
    car.update();
    canavas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}
