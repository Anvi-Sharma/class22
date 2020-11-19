const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;

var ground;

var ball1;
var ball2;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world=engine.world;

  var gOptions = {
    isStatic :true
  }

  var ballOption = {
    restitution:1
  }

  ground= Bodies.rectangle(200,380,400,20,gOptions);
  World.add(world,ground);


  ball1= Bodies.circle(100,100,50,ballOption);
  World.add(world,ball1);

  ball2=Bodies.circle(200,50,50,ballOption);
  World.add(world, ball2);
  
  console.log(ball1);
  
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  fill("orange");
  ellipseMode(CENTER);
  ellipse(ball1.position.x, ball1.position.y,50)

  ellipse(ball2.position.x, ball2.position.y,50)
}