class   Polygon{

    constructor(x,y,sides,options){

        var options = {
            istatic:false
        }
this.x = x;
this.y = y;

this.image = loadImage("polygon.png");
this.body = Bodies.circle(this.x,this.y,options);
World.add(world,this.polygon);

    }
    

    display(){
        image(this.polygon,50,200);
        var polygonpos = this.body.position;
        push()
        translate(polygonpos.x,polygonpos.y);
        //ellipseMode(RADIUS);
        imageMode(CENTER);
        //image(polygon_img,polygon.position.x,polygon.position.y,40,40);
		pop()
    }
}