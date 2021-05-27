
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,ball1,rope1,rope2,rope3,ball2,ball3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	log1=new log(400,150,200,20);

	ball1= new ball(400,350);
	
	ball2= new ball(450,350);

	ball3= new ball(350,350);


	rope1= new rope(log1.lo,ball1.ba,0);
    rope2= new rope(log1.lo,ball2.ba,10);
	rope3= new rope(log1.lo,ball3.ba,-10);
	Engine.run(engine);

  
}


function draw() {
  background(400); 
 
  rectMode(CENTER);
  log1.display();
  ball1.display();
  rope1.display();
  ball2.display();
  ball3.display();
  rope2.display();
  rope3.display();

 
 
}





