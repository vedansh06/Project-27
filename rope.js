class Rope {

    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY},
         }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;

            var endB1 = pointB.x + this.offsetX;
            var endB2 = pointB.y + this.offsetY;
           
                strokeWeight(2);
                line(pointA.x, pointA.y, endB1, endB2);        
            
           
           
        
    }
}