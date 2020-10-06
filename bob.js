class Bob {
 
    constructor(x,y,diameter){
      var options={
          isStatic: false,
          restitution: 1,
          friction: 0,
          density: 0.1
      }
      this.body = Bodies.circle(x, y, diameter, options);
      this.diameter = diameter;
      World.add(world, this.body);
      
    }

    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("deeppink");
    ellipseMode(RADIUS);
    ellipse(0, 0, this.diameter, this.diameter);
    pop(); 
    }
}