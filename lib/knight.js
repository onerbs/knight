function setup() {
  collectValues()
  makeCanvas()
  getPoints()
  findRoute()

  strokeWeight(2)
  fill(250)
  // Draw path
  for (let step = 0; step < Route.length - 1; step++) {
    const alpha = Route[step]
    const omega = Route[step + 1]
    line(
      Points[alpha].x,
      Points[alpha].y,
      Points[omega].x,
      Points[omega].y,
    )
    circle(Points[alpha].x, Points[alpha].y, HALVE)
    circle(Points[omega].x, Points[omega].y, HALVE)
  }
  fill(200)
  // Beginning and ending point
  const start = Route[0]
  const final = Route[Route.length - 1]
  circle(Points[start].x, Points[start].y, HALVE)
  circle(Points[final].x, Points[final].y, HALVE)

  fill(0)
  noStroke()
  textAlign(CENTER, CENTER)
  textFont('Inter, sans-serif', CELL_SIZE / 3)
  textStyle(BOLD)
  writeNumbers()
}

function makeCanvas() {
  const CANVAS_SIZE = CELL_SIZE * NOF_CELLS
  createCanvas(CANVAS_SIZE, CANVAS_SIZE)
  frameRate(0)
  stroke(150)
}

function getPoints() {
  Points.length = 0
  for (let row = 0; row < NOF_CELLS; row++) {
    for (let col = 0; col < NOF_CELLS; col++) {
      Points.push(createVector(
        col * CELL_SIZE + HALVE,
        row * CELL_SIZE + HALVE
      ))
    }
  }
}

function findRoute() {
  if (Route.length === 0) {
    vinit = GG.vertex[BEGIN]
    if (vinit === undefined) {
      fail("I cannot move from here! 😓")
    } else {
      depthFirst(vinit)
    }
  }
  if (Route.length === 0) {
    fail("I couldn't find the solution 😅")
  }
}

function writeNumbers() {
  let index = 0, gain = CELL_SIZE * 0.02
  for (let pp of Points) {
    text(index++, pp.x, pp.y + gain)
  }
}

trigger_button.addEventListener('click', setup)
