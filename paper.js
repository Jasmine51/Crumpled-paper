class Paper{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,
            'friction':1.3
        }
        this.x=x;
        this.y=y;
      //  this.r=r;

        this.body=Bodies.circle(this.x,this.y,23,options);
        this.image=loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
		
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255)
            image(this.image,0,0,70,70);
        pop();
    }
}