var monkey , monkey_running;
var banana ,bananaImg,obstacle,obstacleImg;
var foodGroup,obstGroup;
var score, survivalTime;

function preload()
{
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}

function setup() 
{
  createCanvas(600,600);  
  
  monkey = createSprite(50,560);
  monkey.addAnimation("monkey",monkey_running);
 monkey.scale = 0.1;

  ground = createSprite(300,580,600,20);
  ground.shapeColor = "brown";
  ground.x = -4;

  foodGroup = new Group();
  obstGroup = new Group();

  survivalTime = 0;

  
}


function draw() 
{
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(World.frameCount/frameRate());
  text("Survival Time : "+survivalTime,100,50);

  if(ground.x<0)
  {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space"))
  {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnBanana();
  spawnObst();
  
  monkey.collide(ground);
  
  drawSprites();
  
}

function spawnBanana()
{
  if(frameCount % 80 === 0)
  {
    banana = createSprite(600,500);
    banana.addImage("Banana",bananaImg);
    banana.scale = 0.1;
    
    banana.y = Math.round(random(250,550));
    
    banana.velocityX = -3;
    
    banana.lifetime = 220;
    
    foodGroup.add(banana);
  }
}

function spawnObst()
{
  if(frameCount % 300 === 0)
  {
    var obst = createSprite(600,560);
    obst.addImage("Obstacle",obstacleImg);
    obst.scale = 0.15;
    
    obst.velocityX = -3;
    
    obst.lifetime = 220;
    
    obstGroup.add(obst);
  }
}






