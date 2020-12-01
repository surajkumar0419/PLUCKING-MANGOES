
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var tree,treeImage;
var launcher;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload(){
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(900,580);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,500);
	boy.addImage(boyImage);
	boy.scale=0.1;

	tree = createSprite(600,290);
	tree.addImage(treeImage);
	tree.scale=0.45;

	ground = new Ground(450,575,900,10);
	mango1 = new Mango(390,180,50);
	mango2 = new Mango(510,70,50);
	mango3 = new Mango(480,270,50);
	mango4 = new Mango(640,50,50);
	mango5 = new Mango(640,260,50);
	mango6 = new Mango(780,250,50);
	mango7 = new Mango(720,150,50);
	mango8 = new Mango(585,170,50);
	stone = new Stone(150,445,50);
	launcher = new Launcher(stone.body,{x:150,y:445});
}

function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  drawSprites();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  launcher.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
}

function detectcollision(stone,mango1){
	mango1BodyPosition = mango1.body.position
	stoneBodyPosition = stone.body.position
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y)
	if(distance<=mango1.r+stone.r){
		Matter.Body.setStatic(mango1.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:150,y:445});
        launcher.attach(stone.body);
    }
}