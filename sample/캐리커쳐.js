function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(256);

  noStroke();
  
  //머리카락
  fill(50);
  ellipse(200, 95, 145, 95);
  ellipse(169, 120, 100, 120);
  ellipse(231, 120, 100, 120);
  
  //눈썹 언저리 머리카락 덮기
  fill(255, 235, 212);
  quad(134, 158,  264, 158,  267, 111,  150, 111);
  
  //목
  fill(253, 222, 186);
  rect(160, 180, 80, 100);
  
  //얼굴
  fill(255, 235, 212);
  quad(133, 154,  145, 225,  254, 225,  267, 154);
  quad(145, 225,  254, 225,  210, 255,  190, 255);
  ellipse(200, 252, 25, 10);

  //귀
  fill(255, 235, 212);
  arc(139, 179, 40, 50, radians(80), radians(260));
  arc(261, 179, 40, 50, radians(280), radians(100));
  fill(253, 222, 186);
  arc(139, 179, 30, 40, radians(80), radians(260));
  arc(261, 179, 30, 40, radians(280), radians(100));
  
  //얼굴 깍는 삼각형
  fill(255);
  triangle(257, 217,  249, 229,  262, 231);
  triangle(143, 217,  151, 229,  138, 231);

  //가르마 사각형
  fill(255, 235, 212);
  quad(209, 139,  253, 139,  253, 125,  219, 102);
  
  //안경코
  strokeWeight(1);
  stroke(50);
  noFill();
  ellipse(200, 171, 20, 7);
  
  noStroke();
  fill(255, 235, 212);
  rect(189, 171, 22, 7);
  
  //안경
  strokeWeight(1);
  stroke(50);
  noFill();
  ellipse(235, 167, 50, 50);
  ellipse(165, 167, 50, 50);
  
  //눈썹 언저리 안경 덮기
  noStroke();
  fill(255, 235, 212);
  rect(140, 145, 120, 10);
  rect(215, 141, 40, 10);
  
  //구레나루
  fill(50);
  arc(252, 125, 60, 80, radians(215), radians(75));
  arc(148, 125, 60, 80, radians(105), radians(360));
  
  //앞머리
  fill(50);
  quad(140, 150,  207, 150,  223, 88,  155, 88);
  
  //앞머리 삼각형
  fill(255, 235, 212);
  triangle(208, 130,  202, 150,  206, 150);
  
  //속눈썹
  fill(50);
  rect(218, 145, 33, 5);
  arc(218, 150, 7, 10, radians(180), radians(270));
  arc(251, 150, 7, 10, radians(270), radians(0));
  
  arc(227, 167, 18, 22.5, radians(180), radians(270));
  arc(240, 167, 22, 23, radians(270), radians(0));
  quad(226, 167, 226, 155.5, 240, 155.5, 240, 167);
  
  //눈썹
  arc(173, 167, 18, 22.5, radians(270), radians(0));
  arc(160, 167, 22, 23, radians(180), radians(270));
  quad(174, 167, 174, 155.5, 160, 155.5, 160, 167);
  
  //흰자위
  fill(240);
  arc(227, 167, 18, 17, radians(180), radians(270));
  arc(240, 167, 22, 17, radians(270), radians(0));
  quad(226, 167, 226, 158.5, 240, 158.5, 240, 167);
  
  arc(173, 167, 18, 17, radians(270), radians(0));
  arc(160, 167, 22, 17, radians(180), radians(270));
  quad(174, 167, 174, 158.5, 160, 158.5, 160, 167);
  
  //눈동자
  fill(50);
  ellipse(233, 162, 12, 12);
  ellipse(167, 162, 12, 12);
  
  //입, 코
  strokeWeight(1);
  stroke(50);
  line(200, 197, 200, 199);
  line(200, 173, 200, 190);
  line(186, 222, 214, 222);
  
  //몸
  noStroke();
  fill(198, 232, 255);
  quad(110, 280, 290, 280, 290, 400, 110, 400);
  arc(110, 400, 200, 240, radians(180), radians(270));
  arc(290, 400, 200, 240, radians(270), radians(0));
  
  //목 둥글게
  fill(253, 222, 186);
  ellipse(200, 280, 80, 30);
  
  //어깨 자르기
  fill(255);
  quad(240, 280, 370, 312, 365, 249, 255, 245);
  quad(160, 280, 30, 312, 35, 249, 145, 245);
}

function mousePressed () {
  console.log(mouseX, mouseY);
}