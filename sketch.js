  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var engine, world;
  var ground;
  var divisions = [];
  var particles = [];
  var plinkos = [];
  var particle;

  var gameState ="start";

var divisionHeight=300;
var score =0;
var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(0);
  textSize(20)
 text("Score : "+score,20,30);
 text("500",20,550);
 text("400",100,550);
 text("300",180,550);
 text("200",260,550);
 text("100",340,550);
 text("100",420,550);
 text("200",500,550);
 text("300",580,550);
 text("400",660,550);
 text("500",740,550);
  Engine.update(engine);

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    textSize(50);
    text("Your score: "+score, 200,450)
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 85 && particle.body.position.x > 10) 
              {
                  score=score+500;      
                  particle=null;
                  if ( turn>= 5) gameState ="end";                          
              }

              else if (particle.body.position.x < 160 && particle.body.position.x > 90 ) 
              {
                    score = score + 400;
                    particle=null;
                    if ( turn>= 5) gameState ="end";
              }

              else if (particle.body.position.x < 244 && particle.body.position.x > 175 ) 
              {
                    score = score + 300;
                    particle=null;
                    if ( turn>= 5) gameState ="end";
              }

              else if (particle.body.position.x < 325 && particle.body.position.x > 250 ) 
              {
                    score = score + 200;
                    particle=null;
                    if ( turn>= 5) gameState ="end";
              }

              else if (particle.body.position.x < 485 && particle.body.position.x > 330 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( turn>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 565 && particle.body.position.x > 495 )
              {
                    score = score + 200;
                    particle=null;
                    if ( turn>= 5)  gameState ="end";

              }      

              else if (particle.body.position.x < 645 && particle.body.position.x > 570 )
              {
                    score = score + 300;
                    particle=null;
                    if ( turn>= 5)  gameState ="end";

              }      

              else if (particle.body.position.x < 725 && particle.body.position.x > 650 )
              {
                    score = score + 400;
                    particle=null;
                    if ( turn>= 5)  gameState ="end";

              }      

              else if (particle.body.position.x < 805 && particle.body.position.x > 730 )
              {
                    score = score + 500;
                    particle=null;
                    if ( turn>= 5)  gameState ="end";

              }      

        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  console.log(mouseX, mouseY);
  if(gameState!=="end")
  {
      turn++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}