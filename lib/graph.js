class Vertex {
  /**
   * @param vid - The vertex id
   */
  constructor(vid) {
    this.vid = vid
    this.next = {}
  }

  /**
   * @param {Vertex} vertex - The related vertex
   */
  link(vertex) {
    this.next[vertex.vid] = vertex
  }
}

class Graph {
  constructor() {
    this.vertex = {}
  }

  /**
   * @param vid - The vertex id
   */
  push(vid) {
    if (vid in this.vertex) {
      return this.vertex[vid]
    }
    const vertex = new Vertex(vid)
    this.vertex[vid] = vertex
    return vertex
  }

  /**
   * Create an edge from {source} to {target}.
   * @param source - The source id
   * @param target - The target id
   */
  link(source, target) {
    this.push(source).link(this.push(target))
  }
}

function depthFirst(v, stack, limit, depth = 0) {
  stack.push(v.vid)
  v.state = 1
  let done = false
  if (depth < limit - OFFSET) {
    for (let vid in v.next) {
      const vertex = v.next[vid]
      if (vertex.state === 0) {
        done = depthFirst(vertex, stack, limit, depth + 1)
        if (done) {
          break
        }
      }
    }
    if (!done) {
      stack.pop()
      v.state = 0
    }
  } else {
    done = true
  }
  return done
}
