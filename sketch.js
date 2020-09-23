var bullet,wall,damage
var weight,speed,thickness



function setup() {
  createCanvas(1600,400);
  

  //RANDOM SPEED AND WEIGHT   and thickness

speed = random(223,321)
weight = random(30,52)
thickness = random(22,83)



bullet = createSprite(50,200,20,20)
bullet.velocityX = speed


wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80)


}

function draw() {
  background(255,255,255);  
hasCollided();
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

  

  drawSprites();



}
