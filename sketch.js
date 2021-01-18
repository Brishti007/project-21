var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1 = createSprite(10, 500,150,45);
s1.shapeColor = "red";
s2 = createSprite(750,500,150,45);
s2.shapeColor = "blue";
s3 = createSprite(500,500,150,45);
s3.shapeColor = "green";
s4 = createSprite(260,500,150,45);
s4.shapeColor = "yellow";
    //create box sprite and give velocity
ball = createSprite(370,100,50,50);
ball.shapeColor = "white";
ball.velocityX = 10;
ball.velocityY = 10;
//edge sprites
e1=createSprite(1,1,10,1700);
e2=createSprite(800,600,10,1700);
e3=createSprite(600,600,1700,10);
e4=createSprite(1,1,1700,10);
}

function draw() {
    background(rgb(0,0,0));
//add condition to check if box touching surface and make it box
 if(ball.isTouching(s1)&&ball.bounceOff(s1)){
     ball.shapeColor = "red";
 }
 if(ball.isTouching(s2)&&ball.bounceOff(s2)){
    ball.shapeColor = "blue";
}
if(ball.isTouching(s3)&&ball.bounceOff(s3)){
    ball.shapeColor = "green";
}
if(ball.isTouching(s4)&&ball.bounceOff(s4)){
    ball.shapeColor = "yellow";
}
ball.bounceOff(e1);
ball.bounceOff(e2);
ball.bounceOff(e3);
ball.bounceOff(e4);
    drawSprites();
}
