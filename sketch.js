var backGround;

function setup() {
  createCanvas(800,400);
  backround = createSprite(400, 200, 50, 50);
}

function preload(){
  backGround = loadImage("snow2.jpg")                                    
} 
  
function draw() {
  background(255,255,255);  
  drawSprites();
}