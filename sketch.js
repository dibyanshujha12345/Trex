var trex_running,trex,ground;

function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

 groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  trex=createSprite(50,150,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  ground=createSprite(300,180,600,20);
  ground.addImage(groundImage);
  ground.velocityX=-2;
}


function draw(){
  //set background color 
  background("white");

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  

if(keyDown("space")){
  trex.velocityY=-10;
}
trex.velocityY=trex.velocityY+0.8;

  trex.collide(ground);
  drawSprites();
}