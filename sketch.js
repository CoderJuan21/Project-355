//Create variables here

var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{  
  dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  dog = createSprite(250,470,10,10);
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here
  textSize(20);
  text("food:"+foodS);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

