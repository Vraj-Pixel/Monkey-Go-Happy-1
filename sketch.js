var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage, food;
var foodGroup, obstacleGroup;
var score=0;
var survivalTime=0;
var ground;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);

  monkey = createSprite(70, 445, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(300, 500, 800, 10);
  ground.shapeColor = "Brown";
  ground.x = ground.width/2;

  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(255);

  if (keyDown("space")) {
    monkey.velocityY = -10;

  }
  monkey.velocityY = monkey.velocityY + 1.5;

  monkey.collide(ground);

  ground.velocityX = -5
  
  if(ground.x<200){
     ground.x = ground.width / 2;
  }
   spawnFood();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
  

  drawSprites();
}


function spawnFood() {
  if (frameCount % 80 === 0) {
    console.log("Hi");
    var food = createSprite(600, 450, 20, 40);
    food.y = Math.round(random(120, 200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -5;
    food.lifetime = 600;
    foodGroup.add(food);
  }
 }
function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 460, 20, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    obstacle.lifetime = 600;
    obstacleGroup.add(obstacle);
  }
}

