//playing character
var jackson,jacksonimg
//npc
var police,policeimg
//background
var backgrounds,backgroundimg
//obstacles
var obstacles
var busimg,carimg,scooterimg
//powerups
var powerUp
var coin,coinimg,shoeimg


function preload(){
  //background image
  backgroundimg = loadImage("road.png")
  jacksonimg = loadAnimation("Runner-1.png","Runner-2.png")
  policeimg = loadImage("police.png")
  carimg = loadImage("car.png")
  busimg = loadImage("bus.png")
  scooterimg=loadImage("scooter.png")
  shoeimg=loadImage("powerUp.png")
  coinimg=loadImage("coin.png")

}
function setup() {
  createCanvas(1500,500);

  jackson = createSprite(500,200,20,20)
  police=createSprite(200,200,30,30)
  police.addImage("car",policeimg)
  police.scale=0.5
  backgrounds=createSprite(1510,300,20,20)
  backgroundimg.velocityx=-3

  jackson.addAnimation("running",jacksonimg)
  jackson.scale=0.08
  
}
function draw() {
   background(backgroundimg)
   powerUps()
   obstacle()
  drawSprites()
  
}

function obstacle()
{
  obstacles = createSprite(200,400,20,20)
  
  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacles.addImage(carimg);
              break;
      case 2: obstacles.addImage(busimg);
              break;
      case 3: obstacles.addImage(scooterimg);
              break;
      default: break;
    }
    obstacles.velocityX=-3
}

function powerUps()
{
  powerUp = createSprite(300,400,30,20) 
  powerUp.addImage(shoeimg)
}
function coins()
{
  coin = createSprite(300,400,30,20) 
  coin.addImage(coinimg)
}

