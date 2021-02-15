

function isTouching(box2,movingRect)
{
  if(movingRect.x - box2.x < movingRect.width/2 + box2.width/2 && 
    box2.x - movingRect.x <  movingRect.width/2 + box2.width/2 &&
    movingRect.y - box2.y < movingRect.height/2 + box2.height/2 && 
    box2.y - movingRect.y <  movingRect.height/2 + box2.height/2 )
    {
      return true;
 
  }
  else
  {
    return false;
 
  }
}