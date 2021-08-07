var steve, steveImg
var mech, mechImg
var robot, robotImg
var portal, portalImg
var gun1, gun1Img
var gun2, gun2Img
var gun3, gun3Img
var gun4, gun4Img
var knife, knifeImg
var bullet, bulletImg
var missile, missileImg
var morning, morningImg

function preload(){

walkingLeft=loadAnimation("Images/s-2.png","Images/s-3.png","Images/s-4.png","Images/s-5.png")
walkingRight = loadAnimation("Images/s-2-mirror.png","Images/s-3-mirror.png","Images/s-4-mirror.png","Images/s-5-mirror.png")
standing = loadAnimation("Images/s-1.png")
morningImg=loadImage("Images/bg.jpg")
running=loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png","r7.png","r8.png","r9.png")


}


function setup(){
  createCanvas(1200,600)



  morning=createSprite(600,300)
  morning.addImage(morningImg)
  morning.scale=2.6
  

  
  mech=createSprite(50,50,100,100)
 

  



  steve=createSprite(100,400,50,50)
  steve.addAnimation("walkright",walkingRight)
  steve.addAnimation("walkleft",walkingLeft)
  steve.addAnimation("standing",standing)
 
}


function draw(){
 background("white")
 

 if(keyDown(RIGHT_ARROW)){
   steve.x=steve.x+2
   steve.changeAnimation("walkleft",walkingLeft)
 }
 else if(keyDown(LEFT_ARROW)){
  steve.x=steve.x-2
  steve.changeAnimation("walkright",walkingRight)
}else{
  steve.changeAnimation("standing",standing)
}

 drawSprites();
 spawnRobots()
 
}



function spawnRobots(){
  if(frameCount%160==0){
    robot=createSprite(1200,400,20,20)
    robot.velocityX=-4
    robot.addAnimation("RUN", running)
    robot.scale=0.3
    
  }
}