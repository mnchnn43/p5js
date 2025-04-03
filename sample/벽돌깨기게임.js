// ball
let xPos, xDir;
let yPos, yDir;
let diam;
let speed;

// pad
let padX;
let padWidth; 


function setup() {
  createCanvas(600, 600);
  speed = 4;
  xPos = width / 2;
  xDir = speed;
  yPos = height / 2;
  yDir = speed;
  diam = 50;
  
  padWidth = 200;
}

function draw() {
  background(128);

  // ball drawing and movement
  fill(255, 255, 0);
  ellipse(xPos, yPos, diam, diam);
  xPos = xPos + xDir;
  yPos = yPos + yDir;

  // pad
  padX = mouseX - padWidth/2; 
  fill(0, 255, 0);
  rect(padX, height-30, padWidth, 30);


  // ball bouncing 
  if ( xPos - diam/2 < 0) xDir = xDir * -1; 
  if ( xPos + diam/2 > width) xDir *=  -1;

  if ( yPos - diam/2 < 0) yDir *= -1; 
  if ( yPos + diam/2 > height) yDir *=  -1;

	// ball bouncing with pad
	// 아래 조건을 잘 살펴보자.
  if ( (xPos > padX) && (xPos < padX + padWidth) && (yPos > height - 30 - diam/2)){
    yDir *= -1; // yDir의 방향을 반전시킴
    //yDir = (yDir > 0 ? 1 : -1) * speed; // yDir의 방향 유지하며 speed 반영
    speed += 0.5; // 속도 증가
  }
}