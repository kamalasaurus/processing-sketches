// runs once before all other code
function setup() {
  createCanvas(400, 400);
}

// runs repeatedly on requestAnimationFrame
function draw() {
  background(0);

  if (mouseX > width / 2) fill(255, 0, 0);
  else fill(0, 255, 0);

  if (mouseY > height / 2) ellipse(mouseX, mouseY, 50, 50);
  else {
    rectMode(CENTER)
    rect(mouseX, mouseY, 50, 50);
  }

  noCursor();

  // background is necessary to clear the screen
  // background(0, 5) transparency for the background, fades slowly
  // frameRate() prints the frameRate
}

