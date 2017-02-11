export class Node {
  constructor(value) {
    this.data = value
    this.next = null
  }
}

export default class DirectedGraph {
  constructor() {
    this.elements = {}
    //"vertices"{key: array of directions.} : [direction] end,
    this.edges = direction.length
    this.size = 0
}

    addVertex = (value) => {
      if(!this.value === 0) {
        this.elements.push(value)
        this.size += 1
      }
      else{
        throw Error ('node is already in the graph')
      }

    hasVertex = (value) => {
      if(this.size === 0) {
        for(let i = 0; i < this.size; i++) {
          if(value == this.elements[i]) {
          return true
        }
        else {
          return false
        }
      }
    }
  }

    addDirection = (v1, v2, weight) => {

      v1 : v2 

    }
    }

    // const diGraph = new DirectedGraph()

    // // diGraph.addDirection('v1', 'v2' , 3)  // adds a direction from 'v1' to 'v2' with a weight (number).
    // // diGraph.hasDirection('v1', 'v2')      // returns true if there's a direction from 'v1' to 'v2'.
    // // diGraph.getDirectionWeight('v1', 'v2') // returns direction weight between v1 & v2 or null if no direction exists.
    // // diGraph.visit( 'v1', vertex => console.log(vertex)) // visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.
    // // diGraph.findShortestPath('v1', 'v2')  // returns an array of all the shortest paths between two vertices based on the sum of weights.
    // diGraph.removeDirection('v1', 'v2')   // removes an existing direction between 'v1' and 'v2'.
    // diGraph.getSeparatedVertices()        // returns an array of all the vertices that are separated from the graph.
    // diGraph.removeVertex('v1')            // removes an existing vertex and all its directions (the incoming and outgoing).
    // diGraph.count()                       // returns the number of vertices in the graph.

  }
