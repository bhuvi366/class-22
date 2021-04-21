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
 ground=new Ground(400,380,800,10)
 var options={isStatic:false,restitution:1};
 object1=Bodies.circle(100,200,10,options);
//add game object to the world
box=new Box(200,200,10,10)
World.add(world,object1)
}

function draw() {
  background(0);
  Engine.update(engine);  
  //create body for object soul
  ground.display();
  box.display();
  ellipseMode(RADIUS)
  ellipse(this.object1.position.x,this.object1.position.y,10);
 
}