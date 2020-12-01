var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,leftBox,rightBox,bottomBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:true
	}
	leftBox=Bodies.rectangle(300,615,20,100,options);
	World.add(world, leftBox);

	rightBox=Bodies.rectangle(500,615,20,100,options);
	World.add(world, rightBox);

	bottomBox=Bodies.rectangle(400,650,217,20,options);
	World.add(world, bottomBox);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  if (keyDown ("down")){
	Matter.Body.setStatic(packageBody,false);
}
  drawSprites();
  fill("red");
  rect(leftBox.position.x,leftBox.position.y,20,100);
  rect(rightBox.position.x,rightBox.position.y,20,100);
  rect(bottomBox.position.x,bottomBox.position.y,217,20);
}



