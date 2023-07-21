var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom1,obsBottom2,obsBottom3,obsTop1,obsTop2;




function preload(){
bgImg = loadImage("assets/bg.png")
obsBottom1 = loadImage("assets/obsBottom1.png");
obsBottom2 = loadImage("assets/obsBottom2.png");
obsBottom3 = loadImage("assets/obsBottom3.png");
obsTop1 = loadImage("assets/obsTop1.png");
obsTop2 = loadImage("assets/obsTop2.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3;

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
        spawnTopObstacles();
        spawnBottomObstacles();
       
        drawSprites();
        
}


function spawnTopObstacles(){
  
  if (frameCount % 40 === 0){
    var TopObstacle = createSprite(400,50,10,40);
    TopObstacle.velocityX = -6;
    TopObstacle.scale = 0.1;
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: TopObstacle.addImage(obsTop1);
               break;
       case 2: TopObstacle.addImage(obsTop2);
               break;
  
       default: break;
     }     
  }
}
  

    function spawnBottomObstacles(){
  
      if (frameCount % 40 === 0){
        var BottomObstacle = createSprite(400,350,10,40);
       BottomObstacle.velocityX = -6;
        BottomObstacle.scale = 0.1;
         //generate random obstacles
         var rand = Math.round(random(1,3));
         switch(rand) {
           case 1: BottomObstacle.addImage(obsBottom1);
                   break;
           case 2: BottomObstacle.addImage(obsBottom2);
                   break;
           case 3: BottomObstacle.addImage(obsBottom3);
                   break;
      
           default: break;
         }     
        }
    }
    
