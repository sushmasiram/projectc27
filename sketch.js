const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {

  createCanvas(800,600);
  myengine = Engine.create();
  world = myengine.world;
  roof = new Roof(400,25,800,50)
  bob1 = new Bob(150,350,40)
  chain1 = new Rope(bob1.body,roof.body,{x:-250,y:25})
  bob2 = new Bob(250,350,40)
  chain2 = new Rope(bob2.body,roof.body,{x:-150,y:25})
  bob3 = new Bob(350,350,40)
  chain3 = new Rope(bob3.body,roof.body,{x:0,y:25})
  bob4 = new Bob(450,350,40)
  chain4 = new Rope(bob4.body,roof.body,{x:150,y:25})
  bob5 = new Bob(550,350,40)
  chain5 = new Rope(bob5.body,roof.body,{x:250,y:25}) 

}

function draw() {
  Engine.update(myengine)
  background(255,255,255);  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-180,y:-180})
  }
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(bob5.body, bob5.body.position,{x:180,y:180})
  }
}
