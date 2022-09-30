
var ship ,ship_floating;
function preload(){
  ship_floating = loadAnimation("ship-4.png","ship-1.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,250)

  sea = createSprite(300,125);
  sea.addImage("ground",seaImage);

  ship = createSprite(460,170,10,10);
  ship.addAnimation("floating",ship_floating);

  thing = createSprite(0.1,125,2,250);
  thing.visible = false
}

function draw(){
  background("blue")
  
  ship.velocityX = -1

  sea.scale = 0.15;
  ship.scale = 0.1;

  if(ship.isTouching(thing)){
    ship.x = 460
    ship.y = 170
  }

  drawSprites();
}