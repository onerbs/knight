function setup() {
  collectValues()
  makeCanvas()
  getPoints()
  findRoute()

  fill(250)
  strokeWeight(3)
  drawRoute(Route.length - 1)

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

function drawRoute(index, last = null) {
  if (index < 0) {
    fill(200)
    circle(Points[BEGIN].x, Points[BEGIN].y, HALVE)
    return
  }
  const curr = Route[index]
  if (last !== null) {
    const p1 = Points[curr]
    const p2 = Points[last]
    line(p1.x, p1.y, p2.x, p2.y)
    circle(p2.x, p2.y, HALVE)
  }
  return drawRoute(index - 1, curr)
}

function writeNumbers() {
  let index = 0, gain = CELL_SIZE * 0.02
  for (let pp of Points) {
    text(index++, pp.x, pp.y + gain)
  }
}

trigger_button.addEventListener('click', setup)
