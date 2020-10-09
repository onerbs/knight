function setup() {
  makeCanvas()

  // Get board points
  const points = {}
  for (let row = 0; row < CELLS; row++) {
    for (let col = 0; col < CELLS; col++) {
      const X = col * CELL_SIZE
      const Y = row * CELL_SIZE
      square(X, Y, CELL_SIZE)
      points[toIndex(row, col, CELLS)]
        = createVector(X + (HALVE), Y + (HALVE))
    }
  }

  // Build a route
  const route = []
  const gg = createGraph(CELLS)
  depthFirst(gg.vertex[BEGIN], route, CELLS * CELLS)
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
        points[alpha].x,
        points[alpha].y,
        points[omega].x,
        points[omega].y,
      )
      circle(points[alpha].x, points[alpha].y, HALVE)
      circle(points[omega].x, points[omega].y, HALVE)
    }
    fill(200)
    // Beginning and ending point
    const start = route[0]
    const final = route[route.length - 1]
    circle(points[start].x, points[start].y, HALVE)
    circle(points[final].x, points[final].y, HALVE)
  }

  // Text properties
  strokeWeight(0)
  textAlign(CENTER, CENTER)
  textFont('Inter', CELL_SIZE / 3)
  textStyle(BOLD)
  fill(0)

  // Write numbers
  for (let row = 0; row < CELLS; row++) {
    for (let col = 0; col < CELLS; col++) {
      const X = (col * CELL_SIZE) + HALVE
      const Y = (row * CELL_SIZE) + HALVE
      text(toIndex(row, col, CELLS), X, Y + (CELL_SIZE * 0.02))
    }
  }
}

function makeCanvas() {
  const CANVAS_SIZE = CELL_SIZE * CELLS
  createCanvas(CANVAS_SIZE, CANVAS_SIZE)
  frameRate(0)
  stroke(150)
}

trigger_button.addEventListener('click', function () {
  collectValues()
  setup()
})
