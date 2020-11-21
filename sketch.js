
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground 
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 400);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
 
  
  
  ground = createSprite(100,280,600,10);
  ground.velocityX=-4
 ground.x = ground.width /2;
  
}


function draw() {
   background(255);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground);
  
      if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivalTime ;"+survivalTime , 100 , 50);
  
  Food();
 drawSprites(); 
}

function Food(){
   if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifeTime = 200;
  
   }
}

function obstacle(){
   if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(120,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifeTime = 200;
  
   }
  
  
  
  
  
}



