class Bird{
    constructor(x,y){
    // define properties of an object
    var options={
        isStatic:false,
        restitution:1,
        friction:0.5,
        density:1
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    World.add(world,this.body)
    }
    display(){
     // it tells the comuter how to use the property 
     var pos= this.body.position;
     pos.x =mouseX;
     pos.y =mouseY;
     var angle= this.body.angle
     push ();
     translate (pos.x, pos.y);
     rotate (angle)
     strokeWeight(4);
     stroke(255)
     fill ("red")
     rectMode(CENTER)
      rect(0,0,this.width,this.height);
      pop ();
    }
    }