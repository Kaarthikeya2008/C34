const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var ground,WreckingBall1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;



function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world =engine.world
  
ground=new Ground(600,390,1200,10);
WreckingBall1=new WreckingBall(400,200,30,30);
box1=new Box(800,250,50,50);
box2=new Box(830,250,50,50);
box3=new Box(860,250,50,50);
box4=new Box(890,250,50,50);
box5=new Box(920,250,50,50);
box6=new Box(815,200,50,50);
box7=new Box(845,200,50,50);
box8=new Box(875,200,50,50);
box9=new Box(905,200,50,50);
box10=new Box(825,150,50,50);
box11=new Box(855,150,50,50);
box12=new Box(885,150,50,50);
box13=new Box(815,100,50,50);
box14=new Box(845,100,50,50);
box15=new Box(860,50,50,50);

rope=new Rope(WreckingBall1.body,{x:500,y:200});

  
}

function draw() {
  background("black");  
 Engine.update(engine);
 

ground.display();
WreckingBall1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

rope.display();
}

function mouseDragged(){

  Matter.setPosition(WreckingBall1.body,{x:mouseX,y:mouseY});
}