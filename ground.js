class Ground{
    //properties
    constructor(x,y,width,height){
        var option={
            isStatic:true
            
        }
    this.body=Bodies.rectangle(x,y,width,height,option)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
}
   

// functions
display(){
    fill (10,39,145);
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
}
    
}