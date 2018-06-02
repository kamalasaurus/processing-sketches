function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255, 0, 0);

  for (let y = 10; y < height; y += 10) {
    for (let x = 10; x < width; x += 10) {
      fill(random(255), random(255), random(255));
      ellipse(x, y, 10, 10);
    }
  }
}
