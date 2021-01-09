class Box{
constructor(x,y,width,height){
    var option={
        isStatic:false,
        restitution:0.8,
        friction:1.0,
        density:1.0
        
    }
this.body=Bodies.rectangle(x,y,width,height,option)
this.width=width;
this.height=height;
World.add(world,this.body)
}


// functions
display(){

var pos=this.body.position;
var angle=this.body.angle;

push ();
translate(pos.x,pos.y);
rotate(angle);
fill (255);
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop ();

}

}