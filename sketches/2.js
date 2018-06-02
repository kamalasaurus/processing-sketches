var x = 200,
    y = 200,
    xspeed,
    yspeed,
    r = 25,
    red,
    green,
    blue;

function setup() {
  createCanvas(400, 400);
  xspeed = random(-5, 5);
  yspeed = random(-5, 5);
  red = random(255);
  green = random(255);
  blue = random(255);
}

function draw() {
  background(0);
  //fill(255, 0, 0);
  //fill(random(255), random(255), random(255))
  fill(red, green, blue);
  ellipse(x, y, 2*r, 2*r);

  if (x >= width - r || x <= 0 + r) {
    red = random(255);
    green = random(255);
    blue = random(255);
    xspeed *= -1;
  }
  if (y >= height - r || y <= 0 + r) {
    red = random(255);
    green = random(255);
    blue = random(255);
    yspeed *= -1;
  }

  x += xspeed;
  y += yspeed;
}

