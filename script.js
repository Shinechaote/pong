var p1X,p1Y,p2X,p2Y,vel1,vel2,ballVelX,ballVelY,ballX,ballY;
var paddleHeight,paddleWidth,paddleVel, ballHeight, ballWidth;
var p1Count,p2Count;
var ballCounter;
var originalVelocity;
var gameStarted = false;
var roundStarted = false;
function setup(){

    createCanvas(500,500)
    frameRate(60)
    background(120)

        
    ballHeight = 15;
    ballWidth = 15
    paddleHeight = 80;
    paddleWidth = 10
    ballX = 250;
    ballY = 250;
    ballVelX = getRandomInt(2,4);
    ballVelY = getRandomInt(2,3);
    p1X = 40;
    p1Y = 250-paddleHeight/2;
    p2X = 500-paddleWidth -p1X;
    p2Y = 250-paddleHeight/2;
    vel1 = 0;
    vel2 = 0;
    ballCounter = 0
    paddleVel = 4
    p1Count = 0;
    p2Count = 0;


}

function draw(){
    background(120)
    if(roundStarted === true ){
        if((p1Y < 500-paddleHeight || vel1 === -paddleVel) && (p1Y > 0 || vel1 === paddleVel) && !(collideRectRect(p1X,p1Y,paddleWidth,paddleHeight,ballX,ballY,ballWidth,ballHeight))){
            p1Y += vel1;
        }
        if((p2Y < 500-paddleHeight || vel2 === -paddleVel) && (p2Y > 0 || vel2 === paddleVel) && !(collideRectRect(p2X,p2Y,paddleWidth,paddleHeight,ballX,ballY,ballWidth,ballHeight))){
            p2Y += vel2;
        }

        if(ballY+ballHeight >= 500 || ballY <= 0){
            ballVelY *= -1
        }
        ballX += ballVelX;
        ballY += ballVelY;

        if(ballX+ballWidth >= 500){
            ballX = 250;
            ballY = 250;
            ballVelX = getRandomInt(2,4);
            ballVelY = getRandomInt(2,3);
            p1X = 40;
            p1Y = 250-paddleHeight/2;
            p2X = 500-paddleWidth -p1X;
            p2Y = 250-paddleHeight/2;
            vel1 = 0;
            vel2 = 0;
            ballCounter = 0;
            p1Count += 1;
            paddleVel = 3
            roundStarted = false;
        }

        else if(ballX <= 0){
            ballX = 250;
            ballY = 250;
            ballVelX = getRandomInt(2,4);
            ballVelY = getRandomInt(2,3)
            p1X = 40;
            p1Y = 250-paddleHeight/2;
            p2X = 500-paddleWidth -p1X;
            p2Y = 250-paddleHeight/2;
            vel1 = 0;
            vel2 = 0;
            ballCounter = 0;
            p2Count += 1;
            paddleVel = 3;
            roundStarted = false
        }



    }
    if(collideRectRect(p1X,p1Y,paddleWidth,paddleHeight,ballX,ballY,ballWidth,ballHeight) || collideRectRect(p2X,p2Y,paddleWidth,paddleHeight,ballX,ballY,ballWidth,ballHeight)){
        paddleVel += 0.2;
        ballVelX *= -1
        ballVelX += 0.2*ballVelX/Math.abs(ballVelX)
        ballCounter += 1;
        if(collideRectRect(p1X,p1Y,paddleWidth,paddleHeight,ballX,ballY,ballWidth,ballHeight)){
            ballX = p1X+ballWidth;
        }
        if(collideRectRect(p2X,p2Y,paddleWidth,paddleHeight,ballX,ballY,ballWidth,ballHeight)){
            ballX = p2X-ballWidth;
        }
    }
    fill(255);
    rect(p1X,p1Y,paddleWidth,paddleHeight)
    rect(p2X,p2Y,paddleWidth,paddleHeight);
    rect(ballX,ballY,ballWidth,ballHeight)
    textSize(20)
    text(p2Count,470,30)
    text(p1Count,30,30)
    if(gameStarted === false){
        textSize(40)
        textAlign(CENTER)
        text("Press Space to Start",250,210)
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function keyPressed(){


        if (keyCode === UP_ARROW){
                vel2 = -paddleVel
                roundStarted = true
                gameStarted = true
        }
        else if (keyCode === DOWN_ARROW){
            vel2 = paddleVel
            roundStarted = true
            gameStarted = true
        }

        if(keyCode === 87){
            vel1 = -paddleVel
            gameStarted = true;
            roundStarted = true;
        }
        else if(keyCode === 83){
            vel1 = paddleVel
            roundStarted = true
            gameStarted = true;
        }

        if((roundStarted === false) && keyCode===32){
            roundStarted = true;
            gameStarted = true;
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