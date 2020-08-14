const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var  sling;
var ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16;
var polygon;
function preload(){
  polygonImage = loadImage("images/polygon.png");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(600,height,1200,20);
  ground2 = new Ground(700,200,300,10);
  block1 = new Block(700,175,30,40);
  block2 = new Block(670,175,30,40);
  block3 = new Block(640,175,30,40);
  block4 = new Block(610,175,30,40);
  block5 = new Block(580,175,30,40);
  block6 = new Block(730,175,30,40);
  block7 = new Block(760,175,30,40);
  block8 = new Block(670,135,30,40);
  block9 = new Block(700,135,30,40);
  block10 = new Block(730,135,30,40);
  block11 = new Block(640,135,30,40);
  block12 = new Block(610,135,30,40);
  block13 = new Block(640,95,30,40); 
  block14 = new Block(670,95,30,40);
  block15 = new Block(700,95,30,40);
  block16 = new Block(670,55,30,40);
  polygon = Bodies.polygon(200,200,120,30);
  World.add(world,polygon);
  sling = new SlingShot(polygon,{x:140 , y:150});

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  sling.display(); 
  imageMode (CENTER)
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);   
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX , y:mouseY})

}
function mouseReleased(){
 sling.fly();
} 
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);


  }
  
}