
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,10);
	dustbin = new Dustbin(700,650,100,100);
	paper = new Paper(50,650,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  dustbin.display();
  paper.display();
  drawSprites();
 
}


function keyPressed() { if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45}); 
} }

