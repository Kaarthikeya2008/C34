class WreckingBall{
    //properties
    constructor(x,y,width,height){
        var option={
            isStatic:false,
            restitution:0.8,
            friction:1.2,
            density:0.04
            
        }
    this.body=Bodies.rectangle(x,y,width,height,option)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
}
   

// functions
display(){

    fill (10,39,145);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius);
    
}
    
}