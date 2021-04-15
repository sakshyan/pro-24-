const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball;

function setup(){
    var canvas = createCanvas(450,450);
    engine = Engine.create();
    world = engine.world;

    tank1 = new tank(150,320);
ball = Bodies.circle(440,350,20,20);
World.add(world,ball);
    ground1=new Ground(200, 380, 4500, 20);

}

function draw(){
    background(255);
    Engine.update(engine);
    tank1.display();
    ground1.display();
    fill("red")
    ellipse(ball.position.x,ball.position.y,20,20)
   
}