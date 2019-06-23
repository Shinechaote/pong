var p1X,p1Y,p2X,p2Y,vel1,vel2,ballVelX,ballVelY,ballX,ballY;
var paddleHeight,paddleWidth, ballHeight, ballWidth;
var started = false;
function setup(){

    createCanvas(500,500)
    frameRate(60)
    background(120)

        
    ballHeight = 10;
    ballWidth = 10
    paddleHeight = 20;
    paddleWidth = 10
    ballX = 250;
    ballY = 250;
    ballVelX = Math.random()*2 -1;
    ballVelY = Math.random()*2 -1;
    p1X = 10;
    p1Y = 250;
    p2X = 500-paddleWidth -10;
    p2Y = 250;
    vel1 = 0;
    vel2 = 0;


}

function draw(){
    background(120)
    if(started === true){
        if((p1Y < 500-paddleHeight || vel1 === -1) && (p1Y > 0 || vel1 === 1)){
            p1Y += vel1;
        }
        if((p2Y < 500-paddleHeight || vel2 === -1) && (p2Y > 0 || vel2 === 1)){
            p2Y += vel2;
        }

        if(ballY+ballHeight >= 500 || ballY <= 0){
            ballVelY *= -1
        }
        ballX += ballVelX;
        ballY += ballVelY;

        fill(255);
        rect(p1X,p1Y,paddleWidth,paddleHeight)
        rect(p2X,p2Y,paddleWidth,paddleHeight);
        rect(ballX,ballY,ballWidth,ballHeight)

    }




}


function keyPressed(){


        if (keyCode === UP_ARROW){
                vel2 = -1 
                started = true
            
        }
        else if (keyCode === DOWN_ARROW){
            vel2 = 1
            started = true
        }

        if(keyCode === 87){
            vel1 = -1
            started = true;
        }
        else if(keyCode === 83){
            vel1 = 1
            started = true
        }

        if((started === false) && keyCode===32){
            started = true

        }

}
function keyReleased(){
    if(keyCode === UP_ARROW || keyCode === DOWN_ARROW ){
        vel2 = 0;
    }
    if(keyCode === 87 || keyCode === 83){
        vel1 = 0;
    }
}