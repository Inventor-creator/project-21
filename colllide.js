function hasCollided(bullet,wall){
    bullet.RightEdge = bullet.x+bullet.width;
    wallLeftEdge= wall.x
    if(bullet.RightEdge>=wallLeftEdge){
        return true
    }
    return false
    }
    
    if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    }
    if(damage>10){
      wall.shapeColor = color(225,0,0)
    }
    
    if(damage<10){
      wall.shapeColor = color(0,225,0)
    }
    










