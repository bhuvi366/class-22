//declare alias for modules
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//declare game variables
var engine,world,object;

function setup() {
  createCanvas(800,400);
 //create game engine by using create function of engine module
 engine=Engine.create();
 //the game world is euqal to engine's world
 world=engine.world;
 //create game object soul
 object=Bodies.rectangle(200,200,10,10);
//add game object to the world
World.add(world,object)
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  //create body for object soul
  rect(this.object.position.x,this.object.position.y,10,10);
 
}