function setup() {
  createCanvas(400, 400);
  noStroke();
  background(220);
}

function draw() {
  var xColor = map(mouseX, 0, width, 0, 255);
  var yColor = map(mouseY, 0, height, 0, 255);
  fill(xColor, yColor, 200);
  ellipse(mouseX, mouseY, 50, 50);
}

