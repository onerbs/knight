var BEGIN = Number(input_begin.value)
var CELLS = Number(input_cells.value)
var OFFSET = Number(input_offset.value)
var CELL_SIZE = Number(input_cell_size.value)
var DRAW_LINES = true

function collectValues() {
  BEGIN = Number(input_begin.value)
  CELLS = Number(input_cells.value)
  OFFSET = Number(input_offset.value)
  CELL_SIZE = Number(input_cell_size.value)
  DRAW_LINES = true
}

/**
 * Similar to {alert}, show a message on the screen.
 * @param {string} message - The message to be shown
 * @param {number} time - The time on screen (millis)
 */
function toast(message, time = 3000) {
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
