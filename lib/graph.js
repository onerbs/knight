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

function depthFirst(vinit, stack, limit, depth = 0, mem = {}) {
  stack.push(vinit.vid)
  mem[vinit.vid] = true
  if (depth === limit - OFFSET) return true
  for (let vid in vinit.next) {
    if (!mem[vid] && depthFirst(
      vinit.next[vid], stack, limit, depth + 1, mem
    )) return true
  }
  stack.pop()
  return !(delete mem[vinit.vid])
}
