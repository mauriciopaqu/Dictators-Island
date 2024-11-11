let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21;
let gameState = "intro0";
let doorClicked = null;
let doors = [];
let lastClickTime = 0;
let doorsOpened = new Set();
let allDoorsOpened = false;

function preload() {
  doorOpenSound = loadSound("dooropen.mp3");
  musicbSound = loadSound("musicb.mp3");

  img1 = loadImage("1.png");
  img2 = loadImage("2.png");
  img3 = loadImage("3.png");
  img4 = loadImage("4.png");
  img5 = loadImage("5.png");
  img6 = loadImage("6.png");
  img7 = loadImage("7.png");
  img8 = loadImage("8.png");
  img9 = loadImage("9.png");
  img10 = loadImage("10.png");
  img11 = loadImage("11.png");
  img12 = loadImage("12.png");
  img13 = loadImage("13.png");
  img14 = loadImage("14.png");
  img15 = loadImage("15.png");
  img16 = loadImage("16.png");
  img17 = loadImage("17.png");
  img18 = loadImage("18.png");
  img19 = loadImage("19.png");
  img20 = loadImage("20.png");
  img21 = loadImage("21.png");
}

function setup() {
  createCanvas(1024, 768);
  textSize(18);
  musicbSound.setVolume(0.2);
  musicbSound.loop();

  doors = [
    { x: 505, y: 499, w: 80, h: 110 },
    { x: 251, y: 499, w: 80, h: 110 },
    { x: 752, y: 499, w: 80, h: 110 },
    { x: 752, y: 303, w: 80, h: 110 },
    { x: 505, y: 303, w: 80, h: 80 },
    { x: 251, y: 303, w: 80, h: 110 },
  ];
}

function draw() {
  background(0);

 if (gameState === "intro0") {
    image(img21, 0, 0, width, height);
    drawButton("Start", width / 2 - 50, height - 300, 100, 40, () => gameState = "intro1");

  } else if (gameState === "intro1") {
    image(img12, 0, 0, width, height);
    drawButton("Next", width - 150, 30, 100, 40, () => gameState = "intro2");
    drawResetButton();

  } else if (gameState === "intro2") {
    image(img13, 0, 0, width, height);
    drawButton("Next", width - 150, 30, 100, 40, () => gameState = "intro3");
    drawResetButton();

  } else if (gameState === "intro3") {
    image(img14, 0, 0, width, height);
    drawButton("Next", width - 150, 30, 100, 40, () => gameState = "intro4");
    drawResetButton();

  } else if (gameState === "intro4") {
    image(img15, 0, 0, width, height);
    drawButton("Next", width - 150, 30, 100, 40, () => gameState = "intro5");
    drawResetButton();

  } else if (gameState === "intro5") {
    image(img1, 0, 0, width, height);
    drawButton("Yes", width / 2 - 50, height - 100, 100, 40, () => gameState = "intro6");
    drawResetButton();

  } else if (gameState === "intro6") {
    image(img2, 0, 0, width, height);
    drawButton("Thanks", width / 2 - 50, height - 100, 100, 40, () => gameState = "intro7");
    drawResetButton();

  } else if (gameState === "intro7") {
    image(img3, 0, 0, width, height);
    drawButton("Sure!", width / 2 - 50, height - 100, 100, 40, () => gameState = "mansion");
    drawResetButton();

  } else if (gameState === "mansion") {
    image(img5, 0, 0, width, height);
    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        highlightDoor(i);
      }
    }
    drawResetButton();

      
      
    

  } else if (gameState === "doorScene") {
    background(50);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(`You entered door ${doorClicked + 1}`, width / 2, height / 2);
    if (doorClicked === 0) image(img6, 0, 0, width, height);
    else if (doorClicked === 1) image(img7, 0, 0, width, height);
    else if (doorClicked === 2) image(img8, 0, 0, width, height);
    else if (doorClicked === 3) image(img9, 0, 0, width, height);
    else if (doorClicked === 4) image(img10, 0, 0, width, height);
    else if (doorClicked === 5) image(img11, 0, 0, width, height);
    drawBackButton();
    drawResetButton();

  } else if (gameState === "allDoorsOpenedScene") {
    image(img4, 0, 0, width, height);
    drawButton("Yes", width / 2 - 50, height - 240, 100, 40, () => gameState = "img16Scene");
    const noButtonText = "No, you are a dictator.\nA person who uses authoritarianism\nto control and manipulate the country.\nPeople are suffering and dying\nbecause of your control and narcissism.\nSo nothing is alright.";
    drawButton(noButtonText, width / 2 - 200, height - 180, 400, 150, () => gameState = "img20Scene");
    drawResetButton();

  } else if (gameState === "img20Scene") {
    image(img20, 0, 0, width, height);
    drawResetButton();

  } else if (gameState === "img16Scene") {
    image(img16, 0, 0, width, height);
    drawButton("Next", width - 150, 30, 100, 40, () => gameState = "img17Scene");
    drawResetButton();

  } else if (gameState === "img17Scene") {
    image(img17, 0, 0, width, height);
    drawButton("Next", width - 150, 30, 100, 40, () => gameState = "img18Scene");
    drawResetButton();

  } else if (gameState === "img18Scene") {
    image(img18, 0, 0, width, height);
    drawButton("Next", width - 150, 30, 100, 40, () => gameState = "img19Scene");
    drawResetButton();

  } else if (gameState === "img19Scene") {
    image(img19, 0, 0, width, height);
    drawResetButton();
  }



}

// Function to create buttons with debounce
function drawButton(label, x, y, w, h, onClick) {
  fill("rgb(192,230,164)");
  rect(x, y, w, h);
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);

  if (millis() - lastClickTime > 300 && mouseIsPressed && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    onClick();
    lastClickTime = millis();
  }
}

function isMouseOver(door) {
  return mouseX > door.x && mouseX < door.x + door.w && mouseY > door.y && mouseY < door.y + door.h;
}

function highlightDoor(index) {
  fill(255, 0, 0, 150);
  rect(doors[index].x, doors[index].y, doors[index].w, doors[index].h);
}


function drawResetButton() {
  fill("rgb(192,230,164)");
  rect(20, 20, 100, 40);
  fill(0);
  textFont("Times New Roman");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Reset", 70, 40);

 if (mouseIsPressed && mouseX > 20 && mouseX < 120 && mouseY > 20 && mouseY < 60) {
    gameState = "intro0";
    doorsOpened.clear();  // Clear the set of opened doors
    allDoorsOpened = false; // Reset the all doors opened flag
  }
}


function drawBackButton() {
  fill("rgb(192,230,164)");
  rect(20, 70, 100, 40);
  fill(0);
  textFont("Times New Roman");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Go Back", 70, 90);

  if (mouseIsPressed && mouseX > 20 && mouseX < 120 && mouseY > 70 && mouseY < 110) {
    if (doorsOpened.size === doors.length) {
      gameState = "allDoorsOpenedScene";
    } else {
      gameState = "mansion";
    }
  }
}

function mousePressed() {
  if (gameState === "mansion") {
    for (let i = 0; i < doors.length; i++) {
      if (isMouseOver(doors[i])) {
        doorClicked = i;
        doorsOpened.add(i);
        gameState = "doorScene";
        doorOpenSound.play();
        break;
      }
    }
    

  }
}
