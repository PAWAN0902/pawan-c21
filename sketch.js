var movingRect , fixedRect;
var box1,box2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "cyan"
  movingRect = createSprite(400,200,80,30)
  movingRect.shapeColor = "lightgreen"
  box1 = createSprite(100,100,50,50)
 box1.shapeColor = "lightgreen"
  box2 = createSprite(200,100,50,50)
  box2.shapeColor = "lightgreen"
  
}

function draw() {
  background(0);  
movingRect.x = World.mouseX
movingRect.y = World.mouseY

if(isTouching(box2,movingRect))
{
 movingRect.shapeColor = "pink"
 box2.shapeColor = "red"
}
else
{
box2.shapeColor = "cyan"
 movingRect.shapeColor = "lightgreen"
}
  drawSprites();
}

//Parameters or arguments

