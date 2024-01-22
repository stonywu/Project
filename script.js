
let circleX=50;
let circleY=50;
const CHANGE=32;
function setup(){
createCanvas(windowWidth, windowHeight);
background(CHANGE);
}

function keyPressed(){

    if(keyCode===RIGHT_ARROW){
     circleX= circleX+40;
    }else if(keyCode === LEFT_ARROW) {
     circleX=circleX-40;
    }
  
  if(keyCode===DOWN_ARROW){
    circleY= circleY+40;
   }else if(keyCode === UP_ARROW) {
    circleY=circleY-40;
   }
  }

function draw(){
  if(keyIsDown(CHANGE)){
    background(random(255),random(255),random(255));
    }
 circle(circleX, circleY, 30);

}
