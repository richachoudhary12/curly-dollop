//load all the variables
var bubblesGroup  
var square;

var score = 0;

var bubble;
var bubbleImage;
var ballImage;

//load the image
function preload (){
bubbleImage = loadImage("bubble.png");
}

function setup() {
//set up the canvas
createCanvas(400,400);
//create a square for earning  the points
square = createSprite(200, 200, 20, 20);
square.shapeColor = "red";
//create a group for the bubbles
bubblesGroup = new  Group();
}

function draw() {

//set background 
background("black");  

//display score
strokeWeight(10)
fill("pink");
textSize(15);
text("Score: "+ score, 330, 100);

//display the message 
text("press only left and right arrow keys to destroy the bubbles ",10,70);

//set the square's scale 
square.scale = 2.0

//add controls to the square and make the game constrained
if (keyDown(LEFT_ARROW)){
square.velocityX =  2;  
square.velocityY = 0;
}

if (keyDown(RIGHT_ARROW)){
square.velocityX = -2;
square.velocityY = 0;
}

if(square.x >= 401 ){
square.x = 0;
square.velocityX = 2;
square.velocityY =0;
}

if (square.x <= -1){
square.x = 400;
square.velocityX = -2;
square.velocityY = 0;
}

//MAKE THE SCORING SYSTEM
if (square.isTouching(bubblesGroup)) {
bubblesGroup.destroyEach();
score = score + 1;
}

//make the square stop when key is released
if (keyWentUp(LEFT_ARROW)){
square.velocityX = 0;
square.velocityY =0;
}

if (keyWentUp(RIGHT_ARROW)){
square.velocityX = 0;
square.velocityY =0;
}

//spawn the bubbles
spawnBubbles();
spawnBubbles1();
spawnBubbles3();
spawnBubbles4();
spawnBubbles6();

//display the objects
drawSprites();
}

function spawnBubbles (){
if (frameCount % 60 ===0){
bubble = createSprite(100,40,20,20);
bubble.addImage(bubbleImage);
bubble.velocityY = 3;
bubble.shapeColor = "green";
//assign scale  to the bubble         
bubble  .scale = 0.1;
//add each  greenBall  to the group
bubblesGroup.add(bubble)

}
}

function spawnBubbles1 (){
if (frameCount % 40 === 0){
bubble1 = createSprite(300,40,20,20);
bubble1.addImage(bubbleImage);
bubble1.velocityY = 3;
bubble1.shapeColor = "red";
//assign scale  to the bubble         
bubble1 .scale = 0.1;
//add each  greenBall  to the group
bubblesGroup.add(bubble1);

}
}

function spawnBubbles3(){
if (frameCount % 30 ===0){
bubble3 = createSprite(100,30,20,20);
bubble3.addImage(bubbleImage);
bubble3.velocityY = -3;
bubble3.shapeColor = "red";
//assign scale  to the bubble         
bubble3 .scale = 0.1;
//add each  greenBall  to the group
bubblesGroup.add(bubble3);

}
}

function spawnBubbles4(){
if (frameCount % 69 ===0){
bubble4 = createSprite(20,300,20,20);
bubble4.addImage(bubbleImage);
bubble4.velocityY = -3;
bubble4.shapeColor = "indigo";
//assign scale  to the bubble         
bubble4 .scale = 0.1;
//add each  greenBall  to the group
bubblesGroup.add(bubble4);

}
}

function spawnBubbles6(){
if (frameCount % 60 === 0){
bubble6 = createSprite(300,300,20,20);
bubble6.velocityY = -3;
bubble6.addImage(bubbleImage)
bubble6.shapeColor = "pink";
//assign scale  to the bubble         
bubble6 .scale = 0.1;
//add each  greenBall  to the group
bubblesGroup.add(bubble6);

}
}


     
    



  
 
  
 
  
  

 
 
 
  
  
  
  
  
  

 
 
 
 
  
  
  
  


     

      
