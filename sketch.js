var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
 
  rect2 = createSprite(400,200,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;

  rect3 = createSprite(490,200,50,80);
  rect3.shapeColor = "green";
  rect3.debug = true;

  rect4 = createSprite(300, 200, 50, 80);
  rect4.shapeColor = "pink";

  rect5 = createSprite(100,200,50,80);
  rect5.shapeColor = "blue";
  rect5.debug = true;

  rect5.velocityX= 5;
}

function draw() {
  background(0,0,0);  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;


  if(isTouching(rect2, rect3)){
    rect2.shapeColor = "red";
    rect3.shapeColor = "red";
  }
else{
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";

}

bounceOff(rect4, rect5);
 
  drawSprites();
}

