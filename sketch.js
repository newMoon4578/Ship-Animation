var ship;
var sea;
function preload(){
  //seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,200,10,10)
  ship.scale = 0.1
  ship.addAnimation("ship",shipImg);
  ship.velocityX = 1
  
  if(ship.x<0){
    ship.x = ship.width/2;
}

}

function draw() {
  background("cyan");
  drawSprites()
 
}