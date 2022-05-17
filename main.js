//Stretching the canavas vertically(road-like)
const canavas = document.getElementById("myCanavas");
canavas.height = window.innerHeight;
canavas.width = 200;

//To draw on the canvas we need to get context
const ctx = canavas.getContext("2d");
//Creating the car object
const car = new Car(100,100,30,50);
car.draw(ctx);