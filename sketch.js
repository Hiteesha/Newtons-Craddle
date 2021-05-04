
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
bobDiameter = 40;
	//Create the Bodies Here.
	ground = new Ground (400,200,350,20)
    bob1 = new Bob (150,450,50)
    bob2 = new Bob (200,450,50)
    bob3 = new Bob (250,450,50)
    bob4 = new Bob (300,450,50)
    bob5 = new Bob (350,450,50)
    bob6 = new Bob (400,450,50)
    rope1 = new Rope(bob1.body,ground.body,-bobDiameter*3.3,0)
     rope2 = new Rope(bob2.body,ground.body,-bobDiameter*2,0)
    rope3 = new Rope(bob3.body,ground.body,-bobDiameter*0.7,0)
     rope4 = new Rope(bob4.body,ground.body,-bobDiameter*-0.6,0)
    rope5 = new Rope(bob5.body,ground.body,-bobDiameter*-1.9,0)
    rope6 = new Rope(bob6.body,ground.body,-bobDiameter*-3.2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  

  
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  keyPressed();

  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === 32) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20}); } 
} 


