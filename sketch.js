const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
box1

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

  box1=new Box(100,100,50,50)

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   
 
}