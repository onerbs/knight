function toIndex(row, col, size) {
  return (row * size) + col
}

function isValid(position, size) {
  return 0 <= position && position < size
}

const KNIGHT_MOVES = [
  [-1, -2], [-1, 2],
  [-2, -1], [-2, 1],
  [ 1, -2], [ 1, 2],
  [ 2, -1], [ 2, 1],
]

function legalMoves(row, col, size) {
  const moves = []
  for (let move of KNIGHT_MOVES) {
    const next_row = row + move[0]
    const next_col = col + move[1]
    if (isValid(next_row, size) && isValid(next_col, size)) {
      moves.push([next_row, next_col])
    }
  }
  return moves
}

function createGraph(size) {
  const graph = new Graph()
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const origin = toIndex(row, col, size)
      for (let pos of legalMoves(row, col, size)) {
        const destiny = toIndex(pos[0], pos[1], size)
        graph.link(`${origin}`, `${destiny}`)
      }
    }
  }
  return graph
}
