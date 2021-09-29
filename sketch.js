const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left_dustbin
var right_dustbin 
var ball
var bt
var right_wall
function setup() {
	createCanvas(1359, 630);


	engine = Engine.create();
	world = engine.world;
	let options={
	restitution : 0.65
	}
	//Create the Bodies Here.
	ground = new Ground(200,620,2500,10);
	right_wall = new Ground(1350,320,10,635);
	left_dustbin = new Ground(800,563,10,100)
	right_dustbin = new Ground(1000,563,10,100)
	ball = Bodies.circle(365,100,20,options);
	Engine.run(engine);
	World.add(world,ball);
	bt = createImg('right.png')
	bt.position(500,300)
	bt.size(50,50);
	bt.mouseClicked(hforce);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
 
  background(0);
  push()
  fill("orange");
  textSize(60);
  textFont("Fleur De Leah")
  text("Do not press the red arrow when the ball is bouncing, let it stabilize.",100,200)
  text("Press The Arrow key only once",100,250)
  pop()
  Engine.update(engine);
  ground.display();
  left_dustbin.display();
  right_dustbin.display();
  //right_wall.show();
  drawSprites();

 ellipse(ball.position.x,ball.position.y,20);
 //ball.addImg("balo");
}

function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x : 0.056,y : 0.00002});
	}
