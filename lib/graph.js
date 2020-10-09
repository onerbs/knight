class Vertex {
  /**
   * @param vid - The vertex id
   */
  constructor(vid) {
    this.vid = vid
    this.state = 0
    this.adjacent = {}
  }

  /**
   * @param {Vertex} vertex - The related vertex
   */
  link(vertex) {
    this.adjacent[vertex.vid] = vertex
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
