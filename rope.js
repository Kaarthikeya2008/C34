class Rope{
    constructor(bodyA,pointB){
      var options={
      bodyA:bodyA,
      pointB:pointB,
      length:150,
      stiffness:1.2  
    }
    this.rope=Constraint.create(options);
    World.add(world,this.rope)
    

}
attach(body){
    this.rope.bodyA=body;
}

fly(){
    this.rope.body=null;
}

display(){
if(this.rope.body){
  var posA=this.rope.bodyA.position;
  var posB=this.pointB;

  push();
  stroke(255,255,255);
  strokeWeight (4);
  fill("white")
  line (posA.x,posA.y,posB.x,posB.y)
  pop();
}


}


}