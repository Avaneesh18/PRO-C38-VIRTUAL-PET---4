var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background("yellow");
  
  foodObj.display();
  writeStock(foodS)

  if(foodS === 0){
  dog.addImage(happyDog);
  milkBotltle2.visible = false;
  }     
  else { 
    dog.addImage(sadDog)
    milkBotltle2.visible = true;
  }
 
  if(gameState === 1) {
    dog.addImage(happyDog)
    dog.scale = 0.175;
    dog.y =250
  }

if(gameState === 2) {
    dog.addImage(sadDog)
    dog.scale = 0.175;
    milkBotltle2.visible = false;
    dog.y =250
  }
   
  //======================================================================================================================================================

  var Bath = createButtton("I want to take a bath ")
   Bath.position(580,125);
   if(Bath.mousePressed(function(){
    gameState = 3;
    database.ref('/').update({'gameState':gameState})
   }));
   
   if(gameState === 3){
     dog.addImage(washroom)
     dog.scale =1;
     milkBotltle2.visible = false;
   }

   //=====================================================================================================================================================

   var Sleep = createButtton("I am very sleepy ")
   Sleep.position(710,125);
   if(Sleep.mousePressed(function(){
    gameState = 4;
    database.ref('/').update({'gameState':gameState})
   }));
   5
   if(gameState === 4){
     dog.addImage(bedroom)
     dog.scale =1;
     milkBotltle2.visible = false;
   }
  
   //======================================================================================================================================================= 

   var Play = createButtton("Lets play :)")
   Play.position(500,160);
   if(Play.mousePressed(function(){
    gameState = 5;
    database.ref('/').update({'gameState':gameState})
   }));
   
   if(gameState === 5){
     dog.addImage(livingroom)
     dog.scale =1;
     milkBotltle2.visible = false;
   }

   //=======================================================================================================================================================

   var PlayInGarden = createButtton("Lets play in the park")
   PlayInGarden.position(585,160);
   if(PlayInGarden.mousePressed(function(){
    gameState = 6;
    database.ref('/').update({'gameState':gameState})
   }));
   
   if(gameState === 6){
     dog.y = 175;
     dog.addImage(garden)
     dog.scale =1;
     milkBotltle2.visible = false;
   }   
 
   //=========================================================================================================================================================
   
  drawSprites();
}

//function to read food Stock

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

//function to update food stock and last fed time


//function to add food in stock
