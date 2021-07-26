
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png,");
spriteName.addImage(seaImg);
seaImg.velocityX = 3

function setup(){
  createCanvas(400,400);
  
}

if(sea.x<0){
  sea.x = sea.width/2;
}

}

function draw() {
  background("blue");
  drawSprites()
 
}