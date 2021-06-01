var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var char = [];
var zombie = [];
var fox =[];
var log =[];
var log2 =[];
var rock =[];
var jump =[];
var run =[];
var bg1 =[];
var bg2 =[];
var knife =[];
var meat =[];
var bottle =[];
var ground =[];

function preload() {
 





var run=loadImage("run.png/1.png")
var run=loadImage("run.png/2.png")
var run=loadImage("run.png/3.png")
var run=loadImage("run.png/4.png")
var run=loadImage("run.png/5.png")
var run=loadImage("run.png/6.png")
var run=loadImage("run.png/7.png")
var run=loadImage("run.png/8.png")
var run=loadImage("run.png/9.png")
var run=loadImage("run.png/10.png")
var run=loadImage("run.png/11.png")
var run=loadImage("run.png/12.png")
var run=loadImage("run.png/13.png")
var run=loadImage("run.png/14.png")
var run=loadImage("run.png/15.png")
var run=loadImage("run.png/16.png")
var run=loadImage("run.png/17.png")
var run=loadImage("run.png/18.png")
var run=loadImage("run.png/19.png")
var run=loadImage("run.png/20.png")
var run=loadImage("run.png/21.png")
var run=loadImage("run.png/22.png")
var run=loadImage("run.png/23.png")
var run=loadImage("run.png/24.png")
var run=loadImage("run.png/25.png")
 
var fox=loadImage("fox.png/1.png")
var fox=loadImage("fox.png/2.png")
var fox=loadImage("fox.png/3.png")
var fox=loadImage("fox.png/4.png")
var fox=loadImage("fox.png/5.png")
var fox=loadImage("fox.png/6.png")
var fox=loadImage("fox.png/7.png")
var fox=loadImage("fox.png/8.png")
 
var zombie=loadImage("zombie.png/1.png")
var zombie=loadImage("zombie.png/2.png")
var zombie=loadImage("zombie.png/3.png")
var zombie=loadImage("zombie.png/4.png")
var zombie=loadImage("zombie.png/5.png")
var zombie=loadImage("zombie.png/6.png")
var zombie=loadImage("zombie.png/7.png")
var zombie=loadImage("zombie.png/8.png")
var zombie=loadImage("zombie.png/9.png")
var zombie=loadImage("zombie.png/10.png")
var zombie=loadImage("zombie.png/11.png")
var zombie=loadImage("zombie.png/12.png")
 
var log=loadImage("obstacle1.png")

var log2=loadImage("obstacle2.png")

var meat=loadImage("meat.png")

var knife=loadImage("knife.png")
 
var bg2=loadImage("bg1.png")
 
var bottle=loadImage("bottle.png")

var rock=loadImage("obstacle3.png")
var PLAY
var END

var gameState=PLAY
var gameState=END

var lifebar
}
function setup() {
  createCanvas(800, 800);

   
}

function draw() {
  background("white");

  

  

if(gameState===PLAY){
  bg1=createSprite(400,400,10,10)
  bg1.velocityX=-4
  if(bg1.x<0){
    bg1.x=400
  }

knife=creatSprite(70,725,10,10)
if(keyDown("space")){

  for(var knife=0;knife.x<50;knife=knife+1){
     knife.addImage("knife.png")
  }
}
  if(knife.isTouching(fox)){
    fox.destroy()
  }
  if(knife.isTouching(Zombie)){
    Zombie.destroy()
  }
if(Bar.width=0){
  gameState=END
}
}

if(gameState===END){
  bg1.velocityX=0
fox.setVelocityXEach=0
player.setVelocityXEach=0
Zombie.setVelocityXEach=0
}


run.collide(ground)
drawSprites()

}