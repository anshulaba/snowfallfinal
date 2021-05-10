const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var maxsnow=100;

function preload()
{
  bgimg=loadImage("snow2.jpg");
  sn4=loadImage("snow4.webp");
}

function setup()
{
  createCanvas(800,600);

  engine=Engine.create();

  world=engine.world;

  groundobj=new ground();
  
  //snowball=new snow(200,0);

}

function draw() 
{
  background(bgimg);  

  Engine.update(engine);

  //snowball.display();

  groundobj.display();
  spawnsnowball();
  drawSprites();
}

function spawnsnowball()
{
  if(frameCount%60===0)
  {
    snowball=createSprite(Math.round(random(0,800)),200,50,50);
    snowball.addImage("snow4",sn4);
    snowball.y=Math.round(random(0,300));
    snowball.velocityY=2;
    snowball.scale=0.1;
    snowball.lifetime=150;
  }
}















