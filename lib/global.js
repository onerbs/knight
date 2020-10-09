var BEGIN, CELL_SIZE, NOF_CELLS, OFFSET
var Points = [], Route = []

function collectValues() {
  const OLD_BEGIN = BEGIN
  const OLD_CELL_SIZE = CELL_SIZE
  const OLD_NOF_CELLS = NOF_CELLS
  const OLD_OFFSET = OFFSET
  BEGIN = Number(input_begin.value)
  CELL_SIZE = Number(input_cell_size.value)
  NOF_CELLS = Number(input_nof_cells.value)
  OFFSET = Number(input_offset.value)

  // only recalculate values when necessary.
  if (NOF_CELLS !== OLD_NOF_CELLS) {
    TOTAL_CELLS = NOF_CELLS * NOF_CELLS
    LIMIT = TOTAL_CELLS - OFFSET
    GG = createGraph(NOF_CELLS)
    Route.length = 0
  }
  else if (OFFSET !== OLD_OFFSET) {
    LIMIT = TOTAL_CELLS - OFFSET
    Route.length = 0
  }
  else if (BEGIN !== OLD_BEGIN) {
    Route.length = 0
  }
  if (CELL_SIZE !== OLD_CELL_SIZE) {
    HALVE = CELL_SIZE / 2
  }
}

/**
 * Similar to {alert}, show a message on the screen.
 * @param {string} message - The message to be shown
 * @param {number} time - The time on screen (millis)
 */
function toast(message, time = 4000) {
  const wrapper = document.createElement('div')
  const content = document.createElement('div')
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '3rem',
  }
  const contentStyle = {
    backgroundColor: '#000E',
    borderRadius: '5px',
    color: 'white',
    padding: '1rem 2rem',
  }
  content.innerText = message
  wrapper.appendChild(content)
  document.body.appendChild(wrapper)
  Object.assign(wrapper.style, wrapperStyle)
  Object.assign(content.style, contentStyle)
  setTimeout(() => {
    document.body.removeChild(wrapper)
  }, time)
}

function fail(message) {
  toast(message)
  Route.push(`${BEGIN}`)
}
