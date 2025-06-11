let mouseUI, slideImage, currentSlide, LR, clothController, textImage, clothImage, closeButton;
let isSewing = false; 
let isGrabing = false;
let isFading = false;
let isDragging = false;
let cnt = 0;
let clothIndex = 0;
let fadeFrame = 0;
let fadeDuration = 60;

function preload(){
    mouseDefault = loadImage('images/mouseDefault.png');
    mouseSew = loadImage('images/mouseSew.png');
    mouseHand = loadImage('images/mouseHand.png');
    mouseGrab = loadImage('images/mouseGrab.png');

    closetClosed1 = loadImage('images/closetClosed1.png');
    closetClosed2 = loadImage('images/closetClosed2.png');
    closetClosed3 = loadImage('images/closetClosed3.png');

    onHeart = loadImage('images/onHeart.png');
    onDump = loadImage('images/onDump.png');
    onRepair = loadImage('images/onRepair.png');

    closetOpened = loadImage('images/closetOpened.png');
    canOpened = loadImage('images/canOpened.png');

    left = loadImage('images/left.png');
    right = loadImage('images/right.png');
    onLeft = loadImage('images/onLeft.png');
    onRight = loadImage('images/onRight.png');

    anxietyCloth = loadImage('images/anxietyCloth.png');
    anxietyText = loadImage('images/anxietyText.png');
    anxietyRepairedCloth = loadImage('images/anxietyRepairedCloth.png');
    anxietyRepairedText = loadImage('images/anxietyRepairedText.png');

    close0 = loadImage('images/close0.png');
    close1 = loadImage('images/close1.png');

    grudgeCloth = loadImage('images/grudgeCloth.png');
    grudgeText = loadImage('images/grudgeText.png');
    onGrudge = loadImage('images/onGrudge.png');

    lethargyCloth = loadImage('images/lethargyCloth.png');
    lethargyText = loadImage('images/lethargyText.png');
    lethargyRepairedCloth = loadImage('images/lethargyRepairedCloth.png');
    lethargyRepairedText = loadImage('images/lethargyRepairedText.png');

    obsessCloth = loadImage('images/obsessCloth.png');
    obsessText = loadImage('images/obsessText.png');
    onObsess = loadImage('images/onObsess.png');

    regretCloth = loadImage('images/regretCloth.png');
    regretText = loadImage('images/regretText.png');
    regretRepairedCloth = loadImage('images/regretRepairedCloth.png');
    regretRepairedText = loadImage('images/regretRepairedText.png');

    repairSlide = loadImage('images/repairSlide.png');
    endingCredit1 = loadImage('images/endingCredit1.png');
    endingCredit2 = loadImage('images/endingCredit2.png');
    ban = loadImage('images/ban.png');

    dummy = loadImage('images/dummyData.png');
}

function setup(){
    createCanvas(780, 780);
    mouseUI = [mouseDefault, mouseSew, mouseHand, mouseGrab];
    slideImage = [closetClosed1, onHeart, closetOpened, onDump, onRepair, canOpened, closetClosed3, endingCredit1, endingCredit2, repairSlide, dummy];
    LR = [left, right, onLeft, onRight];
    closeButton = [close0, close1];
    clothController = [[true, true, false, false], [true, false, true, 0], [true, true, false, false], [true, false, true, 0], [true, true, false, false], [true, false, false, 0], 0, [true, false, false, 0], 0, [true, false, false, 0]];
    textImage = [anxietyText, grudgeText, lethargyText, obsessText, regretText, anxietyRepairedText, 0, lethargyRepairedText, 0, regretRepairedText];
    clothImage = [anxietyCloth, grudgeCloth, lethargyCloth, obsessCloth, regretCloth, anxietyRepairedCloth, 0, lethargyRepairedCloth, 0, regretRepairedCloth, onGrudge, 0, onObsess];
    currentSlide = 0;
}

function draw(){
    background(220);
    drawMainImage();
    drawLR();
    drawExtraUI();
    drawCloth();
    drawMouseUI();
    drawFadeEffect();
}

function drawMainImage(){
    imageMode(CENTER);
    if (currentSlide !== 7){
        image(slideImage[currentSlide], 400, 400, slideImage[currentSlide].width/2.5, slideImage[currentSlide].height/2.5);
    }  

    if (currentSlide == 0 && (mouseX < 460 && mouseX > 320 && mouseY > 300 && mouseY < 400)){
        currentSlide = 1;
    } else if (currentSlide == 1 && !(mouseX < 460 && mouseX > 320 && mouseY > 300 && mouseY < 400)){
        currentSlide = 0;
    } // 하트누르기

    else if (currentSlide == 2 && (mouseX > 593 && mouseY > 243 && mouseX < 725 && mouseY < 330) && clothController[clothIndex][1] == true){
        currentSlide = 4;
    } else if (currentSlide == 4 && !(mouseX > 593 && mouseY > 243 && mouseX < 725 && mouseY < 330)){
        currentSlide = 2;
    } // 수선하기 버튼

    else if (currentSlide == 2 && (mouseX > 596 && mouseY > 368 && mouseX < 724 && mouseY < 414) && clothController[clothIndex][2] == true){
        currentSlide = 3;
    } else if (currentSlide == 3 && !(mouseX > 596 && mouseY > 368 && mouseX < 724 && mouseY < 414)){
        currentSlide = 2;
    } // 버리기 버튼
    
    else if (currentSlide == 2 && (mouseIsPressed == true && isGrabing == true) && (mouseX > 60 && mouseY > 635 && mouseX < 170 && mouseY < 766)){
        currentSlide = 5;
    } else if (currentSlide == 5 && !(mouseX > 60 && mouseY > 635 && mouseX < 170 && mouseY < 766)){
        currentSlide = 2;
    } // 쓰레기통

    else if (currentSlide == 7){
        image(slideImage[currentSlide], 370, 350, slideImage[currentSlide].width/2, slideImage[currentSlide].height/2);
    }

}

function drawExtraUI(){
    imageMode(CENTER);
    if (currentSlide >= 2 && currentSlide <= 5){
        if (cnt > 4){
            image(close0, 660, 720, close0.width / 3.5, close0.height / 3.5);
            if (mouseX > 590 && mouseY > 680 && mouseX < 740 && mouseY < 740){
                image(close1, 660, 720, close1.width / 3.5, close1.height / 3.5);
            }
        }
    } 

    if ((currentSlide == 2 || currentSlide == 3 || currentSlide == 5) && clothController[clothIndex][1] == false){
        image(ban, 645, 305, ban.width / 3.5, ban.height / 3.5); // 수선 버튼 중앙
    }

    if ((currentSlide == 2 || currentSlide == 4) && clothController[clothIndex][2] == false){
        image(ban, 650, 395, ban.width / 3.5, ban.height / 3.5); // 버리기 버튼 중앙
    }
}

function drawLR(){
    imageMode(CENTER);
    if (currentSlide >= 2 && currentSlide <= 5){
        image(LR[0], 340, 430, LR[0].width / 2, LR[0].height / 2);
        image(LR[1], 430, 430, LR[1].width / 2, LR[1].height / 2);
        if (mouseX > 230 && mouseY > 280 && mouseX < 290 && mouseY < 360){
            image(LR[2], 340, 430, LR[2].width / 2, LR[2].height / 2);
        } else if (mouseX > 500 && mouseY > 280 && mouseX < 560 && mouseY < 360){
            image(LR[3], 430, 430, LR[3].width / 2, LR[3].height / 2);
        }
    }
}

function drawCloth(){
    imageMode(CENTER);
    if (currentSlide >= 2 && currentSlide <= 5){
        if ((isDragging == false || isGrabing == false) && clothController[clothIndex][0] == true && (clothController[clothIndex][3] == false || clothController[clothIndex][3] == 0)){
            image(clothImage[clothIndex], 399, 385, clothImage[clothIndex].width/2, clothImage[clothIndex].height/2);
            image(textImage[clothIndex], 385, 510, textImage[clothIndex].width/3.5, textImage[clothIndex].height/3.5);
        } if (clothController[clothIndex][0] == true && clothController[clothIndex][2] == true && isDragging == false && isGrabing == true && (mouseX > 300 && mouseY > 240 && mouseX < 500 && mouseY < 420)){
            image(clothImage[clothIndex + 9], 399, 385, clothImage[clothIndex + 9].width/2, clothImage[clothIndex + 9].height/2);
        } else if (isGrabing == true && mouseIsPressed == true && isDragging == true && clothController[clothIndex][0] == true){
            image(clothImage[clothIndex], mouseX+20, mouseY+70, clothImage[clothIndex].width/2, clothImage[clothIndex].height/2);
        } else if (clothController[clothIndex][3] == true){
            image(clothImage[clothIndex + 5], 399, 385, clothImage[clothIndex + 5].width/2, clothImage[clothIndex + 5].height/2);
            image(textImage[clothIndex + 5], 385, 510, textImage[clothIndex + 5].width/3.5, textImage[clothIndex + 5].height/3.5);
        }
    }

    if (currentSlide == 9){
        image(clothImage[clothIndex], 450, 600, clothImage[clothIndex].width *2, clothImage[clothIndex].height *2);
    }
}

function drawMouseUI(){
    noCursor();
    imageMode(CENTER);
    if (isSewing == false && isGrabing == false){
        image(mouseUI[0], mouseX, mouseY, mouseUI[0].width / 30, mouseUI[0].height / 30);
    }
    else if (isSewing == true){
        image(mouseUI[1], mouseX, mouseY, mouseUI[1].width / 30, mouseUI[1].height / 30);
    }
    else if (isSewing == false && mouseIsPressed == false && isGrabing == true){
        image(mouseUI[2], mouseX, mouseY, mouseUI[2].width / 20, mouseUI[2].height / 20);
    }
    else if (isSewing == false && mouseIsPressed == true && isGrabing == true){
        image(mouseUI[3], mouseX, mouseY, mouseUI[3].width / 20, mouseUI[3].height / 20);
    }
}

function drawFadeEffect() { // 인공지능으로 작성
    if (isFading) {
        let half = fadeDuration / 2;
        let alpha;
        if (fadeFrame <= half) {
            alpha = map(fadeFrame, 0, half, 0, 255);
        } else {
            alpha = map(fadeFrame, half, fadeDuration, 255, 0);
        }
        fill(255, alpha);
        noStroke();
        rect(0, 0, width, height);

        fadeFrame++;
        if (fadeFrame === half + 1){
            if (currentSlide == 0 || currentSlide == 1){
                currentSlide = 2; 
            } else if ((currentSlide >= 2 && currentSlide <= 5)){
                currentSlide = cnt > 4 ? 6 : 9;
            } else if (currentSlide == 6){
                currentSlide = 7;
            } else if (currentSlide == 7){
                currentSlide = 8;
            } else if (currentSlide == 9){
                currentSlide = 2;
            }
        }
        if (fadeFrame > fadeDuration) {
            isFading = false;
            fadeFrame = 0;
        }
    }
}

function mousePressed(){
    if (mouseX < 460 && mouseX > 320 && mouseY > 300 && mouseY < 400 && (currentSlide == 0 || currentSlide == 1) && !isFading){
        isFading = true;
        fadeFrame = 0;
    } // 하트누르기

    if ((mouseX > 593 && mouseY > 243 && mouseX < 725 && mouseY < 330) && (currentSlide == 2 || currentSlide == 4) && clothController[clothIndex][1] == true){
        if (isSewing == false){
            isSewing = true;
            isFading = true;
            fadeFrame = 0;
        } else if (isSewing == true){
            isSewing = false;
        }
    } // 수선하기

    if ((mouseX > 596 && mouseY > 368 && mouseX < 725 && mouseY < 414) && (currentSlide == 2 || currentSlide == 3) && clothController[clothIndex][2] == true){
        if (isGrabing == false){
            isGrabing = true;
        } else if (isGrabing == true){
            isGrabing = false;
        }
    } // 버리기

    if ((mouseX > 230 && mouseY > 280 && mouseX < 290 && mouseY < 360)&& (currentSlide >= 2 && currentSlide <= 5)){
        if (clothIndex > 0){
            clothIndex -= 1;
        }
    } // 왼쪽 버튼

    if ((mouseX > 500 && mouseY > 280 && mouseX < 560 && mouseY < 360) && (currentSlide >= 2 && currentSlide <= 5)){
        if (clothIndex < 4){
            clothIndex += 1;
        }
    } // 오른쪽 버튼

    if ((mouseX > 590 && mouseY > 680 && mouseX < 740 && mouseY < 740) && (currentSlide >= 2 && currentSlide <= 5)){
        isFading = true;
        fadeFrame = 0;
    }

    if ((mouseX > 300 && mouseY > 240 && mouseX < 500 && mouseY < 420) && (currentSlide >= 2 && currentSlide <= 5)){
        isDragging = true;
    }

    if (currentSlide == 6){
        isFading = true;
        fadeFrame = 0;
    }
    if (currentSlide == 7){
        isFading = true;
        fadeFrame = 0;
    }

    if (currentSlide == 9){
        isSewing = false;
        cnt += 1;
        clothController[clothIndex][3] = true;
        clothController[clothIndex][1] = false;
        isFading = true;
        fadeFrame = 0;
    }
}

function mouseReleased(){
    if (currentSlide == 5){
        clothController[clothIndex][0] = false;
        cnt += 1;
    }
    isDragging = false;
}

function keyPressed(){ // 인공지능으로 작성
    if (keyCode == 27) { // ESC 키를 누르면
        if (currentSlide >= 2 && currentSlide <= 5 && cnt > 4){
            isFading = true;
            fadeFrame = 0;
        }
    }

    if (keyCode === LEFT_ARROW) { // 방향 (좌) 키를 누르면
        if (currentSlide >= 2 && currentSlide <= 5 && clothIndex > 0){
            clothIndex -= 1;
        }
    }

    if (keyCode === RIGHT_ARROW) { // 방향 (우) 키를 누르면
        if (currentSlide >= 2 && currentSlide <= 5 && clothIndex < 4){
            clothIndex += 1;
        }
    }

    if (keyCode === 32) {
        if (currentSlide == 0 || currentSlide == 1 || currentSlide == 6 || currentSlide == 7) {
            isFading = true;
            fadeFrame = 0;
        } else if (currentSlide == 9) {
            isSewing = false;
            cnt += 1;
            clothController[clothIndex][3] = true;
            clothController[clothIndex][1] = false;
            isFading = true;
            fadeFrame = 0;
        }
    }
}