class Ground{
constructor(x,y,width,height){
// define properties of an object
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body)
}
display(){
 // it tells the comuter how to use the property    
 rectMode(CENTER)
  rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}