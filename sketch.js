var car, wall;
var speed , weight;



function setup() {
  createCanvas(1200,400);
  wall=createSprite(1000,200,60,height/2)
  car=createSprite(50, 200, 50, 50);
  speed= random(55,90)
  weight= random(400,1500)
 car.velocityX= speed;
}

function draw() {
  background(0);  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation= 0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor="green"
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow"
    }
    if(deformation>180)
    car.shapeColor="red"
  }
  
}