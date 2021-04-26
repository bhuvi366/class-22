class Box{
    constructor(x,y,width,height){
    // define properties of an object
    var options={
        isStatic:false,
        restitution:1,
        friction:0.5,
        density:1
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    }
    display(){
     // it tells the comuter how to use the property 
     var pos= this.body.position
     var angle= this.body.angle
     push ();
     translate (pos.x, pos.y);
     rotate (angle)
     strokeWeight(4);
     stroke(255)
     fill ("brown")
     rectMode(CENTER)
      rect(0,0,this.width,this.height);
      pop ();
    }
    }