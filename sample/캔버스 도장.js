let bgColor = 220;

function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
function draw() {
    // draw() 함수는 빈 상태로 유지
}

function mousePressed() {
    fill(bgColor);
    ellipse(mouseX, mouseY, 50, 50);
}

function keyPressed() {
    if (key === 'r') {
        bgColor = color(255, 0, 0); // 'R' 키를 누르면 빨간색으로 변경
    } else if (key === 'g') {
        bgColor = color(0, 255, 0); // 'G' 키를 누르면 녹색으로 변경
    } else if (key === 'b') {
        bgColor = color(0, 0, 255); // 'B' 키를 누르면 파란색으로 변경
    } else if (key === ' ') {
        bgColor = 220; // 스페이스 키를 누르면 회색으로 초기화
    }
}


