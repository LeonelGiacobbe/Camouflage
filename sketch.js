let squares1 = []
let valuesX1 = []
let valuesY1 = []
let alphaValues1 = []
let alphaValues2 = []
let alphaValues3 = []
let squares2 = []
let valuesX2 = []
let valuesY2 = []
let squares3 = []
let valuesX3 = []
let valuesY3 = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  for (let i = 0 ; i < 3800 ; i++) {
    valuesX1[i] = random(width)
    valuesY1[i] = random(height)
    alphaValues1[i] = random(60,70)
  }
  for (let i = 0 ; i < 2200 ; i++) {
    valuesX2[i] = random(width)
    valuesY2[i] = random(height)
    alphaValues2[i] = random(40,50)
  }
  for (let i = 0 ; i < 3800 ; i++) {
    valuesX3[i] = random(width)
    valuesY3[i] = random(height)
    alphaValues3[i] = random(60,70)
  }
}

function draw() {
  noStroke()
  if (frameCount < 180) {
    for (let i = 0; i < 800; i++) {
      fill(200,200,200,alphaValues3[1])
      squares2[i] = circle (valuesX2[i],valuesY2[i],4)
      valuesX2[i] += random(-5,5)
      valuesY2[i] += random(-3,3)
      
    }
    for (let i = 0; i < 1500; i++) {
      fill(38, 161, 102,alphaValues2[1])
      squares3[i] = circle (valuesX3[i],valuesY3[i],4)
      valuesX3[i] += random(-5,5)
      valuesY3[i] += random(-3,3)
    }
    for (let i = 0; i < 1500; i++) {
      fill(122, 85, 48, alphaValues1[1])
      squares1[i] = circle (valuesX1[i],valuesY1[i],4)
      valuesX1[i] += random(-5,5)
      valuesY1[i] += random(-3,3)
    }
  }
  }
