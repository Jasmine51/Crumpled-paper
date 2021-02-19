const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bin1,bin2,bin3;
var paper1;
var ground;
var bin,binImg;

function preload(){
binImg=	loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin=createSprite(1080,490,250,300);
	bin.addImage(binImg)
	bin.scale=0.8;
	
	bin2 = new Dustbin(960,510,20,160);
	bin3= new Dustbin(1080,580,250,20);
	
	paper1=new Paper(200,340);
	

	ground = new Ground (width/2,640,width,40);
	Engine.run(engine);
  
}


function draw() {
  
  background("pink");
  textSize(30);
  fill("black")
  text("Press 'R' to rethrow",width/2,100)
 console.log(paper1.body.position);
  keyP();
  bin3.display();
  ground.display();
  paper1.display();
  drawSprites();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110})
	}
}
function keyP(){
	if(keyDown("R")){
		Matter.Body.setPosition(paper1.body,{x:200,y:607})
	}
}