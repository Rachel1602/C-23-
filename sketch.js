//to use the physics engine- 3 things
//Engine,World,Bodies

//to create the physics engine
const Engine=Matter.Engine;

//to create the physical world
const World=Matter.World;

//to create the physical grounds in our world
const Bodies=Matter.Bodies;             

var engine,world; 
var box1,box2;
var ground1; 

function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  box1=new box(200,300,50,50);
  box2=new box(240,100,50,100);
  ground1=new ground(200,390,400,20);

  
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display()
  ground1.display();
  
  
}