let circleX=50;// setting
let circleY=50;// setting
const CHANGE=32;// setting
function setup(){
createCanvas(windowWidth, windowHeight);
background(CHANGE);
}

function keyPressed(){

    if(keyCode===RIGHT_ARROW){//if the key right be pressed
     circleX= circleX+40;//the location of the ball will add
    }else if(keyCode === LEFT_ARROW) {//if the key left be pressed
     circleX=circleX-40;//the location of the ball will go down
    }
  
  if(keyCode===DOWN_ARROW){//if the key down be pressed
    circleY= circleY+40;//the location of the ball will add
   }else if(keyCode === UP_ARROW) {//if the key up be pressed
    circleY=circleY-40;//the location of the ball will go down
   }
  }

function draw(){//if the key space be pressed
  if(keyIsDown(CHANGE)){
    background(random(255),random(255),random(255));//random color of the background
    }
 circle(circleX, circleY, 30);

}
