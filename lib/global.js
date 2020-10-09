var BEGIN = undefined
var CELL_SIZE = undefined
var NOF_CELLS = undefined
var OFFSET = undefined
var HALVE = undefined

var GG = undefined
var Points = []
var Route = []

function collectValues() {
  BEGIN = Number(input_begin.value)
  CELL_SIZE = Number(input_cell_size.value)
  NOF_CELLS = Number(input_nof_cells.value)
  OFFSET = Number(input_offset.value)
  HALVE = CELL_SIZE / 2
  GG = createGraph(NOF_CELLS)
  Route.length = 0
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
