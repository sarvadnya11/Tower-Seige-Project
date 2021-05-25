class Slingshot{
    constructor(body,anchor)
    {

         var options = {bodyA:body,
        pointB:anchor,
        stiffness:0.03,
        length:5
    }  

      this.bodyA = body
      this.pointB = anchor
      this.sling = Constraint.create(options);
      World.add(world,this.sling)

    }


    attach(body){
        this.polygon.bodyA = body;
    }
    


    fly()
    {
        this.polygon.bodyA = null;
    }

    display()
    {
        if(this.sling.bodyA)
        {
         
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
        
    }
}
    
    


