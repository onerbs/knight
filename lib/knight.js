function setup() {
  collectValues()
  makeCanvas()
  getPoints()

  // Build a route
  const route = []
  const gg = createGraph(NOF_CELLS)
  depthFirst(gg.vertex[BEGIN], route, NOF_CELLS * NOF_CELLS)
  if (route.length === 0) {
    toast("Oops! I couldn't find the solution :(")
    DRAW_LINES = false
  }

  if (DRAW_LINES) {
    strokeWeight(2)
    fill(250)
    // Draw path
    for (let step = 0; step < route.length - 1; step++) {
      const alpha = route[step]
      const omega = route[step + 1]
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
    const start = route[0]
    const final = route[route.length - 1]
    circle(Points[start].x, Points[start].y, HALVE)
    circle(Points[final].x, Points[final].y, HALVE)
  }

  // Text properties
  strokeWeight(0)
  textAlign(CENTER, CENTER)
  textFont('Inter', CELL_SIZE / 3)
  textStyle(BOLD)
  fill(0)

  // Write numbers
  for (let row = 0; row < NOF_CELLS; row++) {
    for (let col = 0; col < NOF_CELLS; col++) {
      const X = (col * CELL_SIZE) + HALVE
      const Y = (row * CELL_SIZE) + HALVE
      text(toIndex(row, col, NOF_CELLS), X, Y + (CELL_SIZE * 0.02))
    }
  }
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

trigger_button.addEventListener('click', setup)
