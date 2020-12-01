var bullet, wall, speed, weight, thickness;



function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321))
  weight = Math.round(random(30,52))
  thickness = Math.round(random(22,83))
  bullet = createSprite(200, 200, 40, 20);
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness, height/2)
  wall.shapeColor = (80,80,80)
  bullet.velocityX = speed
  
}

function draw() {
  background("black");  
  drawSprites();
  if(wall.x-bullet.x < (bullet.width + wall.width)/2)
{
  bullet.velocityX = 0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  console.log(damage)
  if(damage>10){
    wall.shapeColor = "red"
  }
  if(damage<10){
    wall.shapeColor = "green"
  }

  }
}