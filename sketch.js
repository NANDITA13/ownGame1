var PLAY = 1;
var END = 0;
var gameState = PLAY;


var covid , covidImage , covidGroup;

var mask, maskImage

var sanitizer , sanitizerImage;

var backGround , backGroundImage;

var ground;

var score;

var gameOver , gameOverImage;

var restart , restartImage;

var ground ;



function preload(){

  covidImage = loadImage ("covid.png");

  maskImage = loadImage ("MASK.png")

  sanitizerImage = loadImage ("SANITIZER.png");
 
  gameOverImage = loadImage ("gameOver.png");

  restartImage = loadImage ("restart.png");

}


function setup(){

  createCanvas(1200,400);
 
      mask = createSprite ( 70, 200 );
      mask.addImage (maskImage);
      mask.scale = 0.2;
     

      sanitizer = createSprite (900,20);
      sanitizer.addImage (sanitizerImage);
      sanitizer.scale = 0.05;

      gameOver = createSprite (500,100);
      gameOver .addImage (gameOverImage);
      gameOver.scale = 0.9;
      gameOver.visible = false;

      restart = createSprite (500,180);
      restart .addImage (restartImage);
      restart.scale = 0.2;
      restart.visible = false;

      covidGroup = createGroup();

       score = 0;

       ground = createSprite (600,380, 1200 , 10);

}

function draw(){



    background ("Yellow");



    text("SANITIZER: "+ score, 920,20);



    if(gameState === PLAY){

      mask.collide (ground);

     
      if(keyDown ("space")  && (mask.x = 70 ) && (mask.y = 200)) {

          score = score+1;

          mask.velocityY = - 14;

          fill ("red");
          
          text(" GO CORONA GO ", 100,130);
          
         
        } 
        
        

          
        mask.velocityY =  mask.velocityY + 2;                                                                      
        
        spawnCovid();

      


        if(covidGroup.isTouching(mask)){
          gameState = END;
      }
    
        }
        
        




    else if (gameState === END) {

      gameOver.visible = true;
      restart.visible = true;
       
      ground.velocityX = 0;
     mask.velocityY = 0;
     covidGroup.setVelocityXEach(0);

     covidGroup.setLifetimeEach(-1);


     if(keyDown("space")) {
      
      reset();

      
    }
  
    }


  
 drawSprites ();
}




function spawnCovid () {

  if (frameCount % 60 === 0) {

    covid = createSprite(1500,50,40,10);
    covid.addImage (covidImage);
    covid.scale = 0.2;

    covid.velocityX = -(6 + 3*score/100);

    covid.y = Math.round(random(height/2+120,height/2+150));

    covid.lifetime = 500;

    covidGroup .add (covid);
 
    
   
  }

    
    
    
  

}


function reset(){
  
  gameState = PLAY;

  gameOver.visible = false;
  restart.visible = false;

  covidGroup.destroyEach();

  
}
