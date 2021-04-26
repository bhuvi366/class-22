//declare alias for modules
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//declare game variables
var engine,world,object;

function setup() {
  createCanvas(1200,400);
 //create game engine by using create function of engine module
 engine=Engine.create();
 //the game world is euqal to engine's world
 world=engine.world;
 //create game object soul
 ground=new Ground(400,380,800,10)
 var options={isStatic:false,restitution:1};
// object1=Bodies.circle(100,200,10,options);
//add game object to the world
box=new Box(700,320,70,70)
box2=new Box(700,240,70,70)
box3=new Box(920,320,70,70)
box4=new Box(920,240,70,70)
pig1=new Pig (810,350)
pig2=new Pig (810,220)
bird=new Pig (200,200)
//World.add(world,object1)
}

function draw() {
  background(0);
  Engine.update(engine);  
  //create body for object soul
  ground.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  pig1.display();
  pig2.display();
  bird.display();
  //ellipseMode(RADIUS)
  //ellipse(this.object1.position.x,this.object1.position.y,10);
 
}