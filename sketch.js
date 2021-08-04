var sea,ship,shipImage,seaImage

function preload(){
seaImage=loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){

  createCanvas(600,600);
  sea=createSprite(0,0,600,600)
  ship=createSprite(130,200,30,30)
  ship.addAnimation("ship",shipImage)
  ship.scale=0.5
sea.addImage("sea",seaImage)
}

function draw() {
  background("lightblue");
 sea.velocityX=-1
 if(sea.x<0){
   sea.x=sea.width/2;
 }
 drawSprites()
}
