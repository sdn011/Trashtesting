const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashbin1, trashbin2, trashbin3
var Paper, paperObject
var Ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	trashbin1 = new trashcan(300, 650, 20, 100)
	trashbin2 = new trashcan(400, 680, 200, 20)
	trashbin3 = new trashcan(500, 650, 20, 100)

	Paper = new paper()

	var ground_options = {
		isStatic: true
	}

	ground = Bodies.rectangle(width/2, 650, width, 10, ground_options)
	World.add(world, ground)	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  trashbin1.display()
  trashbin2.display()
  trashbin3.display()
  Paper.display()
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 85, y: 85});
	}
}

