class GraphNode {
  label: string;
  constructor(label: string) {
    this.label = label;
  }
}

export class Graph {
  private nodes: Map<string, GraphNode> = new Map();
  private adjacencyList: Map<GraphNode, Set<GraphNode>> = new Map();

  public addNode(label: string) {
    const node = new GraphNode(label);

    if (!this.nodes.has(label)) this.nodes.set(label, node);

    this.adjacencyList.set(node, new Set());
  }

  public removeNode(label: string) {
    const node = this.nodes.get(label);
    if (!node) return;
    // this.nodes.delete(label);

    for (const n of this.adjacencyList.keys())
      this.adjacencyList.get(n)!.delete(node);

    this.adjacencyList.delete(node);

    this.nodes.delete(label);
  }

  public addEdge(from: string, to: string) {
    const fromNode = this.nodes.get(from);
    if (!fromNode) throw new Error("from node is ENotFund.");

    const toNode = this.nodes.get(to);
    if (!toNode) throw new Error("to node is ENotFund.");

    this.adjacencyList.get(fromNode)!.add(toNode);
    //if we want non directive graph we add next line too
    // this.adjacencyList.get(toNode)!.push(fromNode);
  }

  public removeEdge(from: string, to: string) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) return;

    this.adjacencyList.delete(fromNode);
  }

  public DepthFirstTraverse(label: string) {
    const depthFirstTraverse = (root: GraphNode, visited: Set<GraphNode>) => {
      const edges = this.adjacencyList.get(root);
      if (!edges) return;
      console.log(root.label);

      visited.add(root);

      for (const n of edges) {
        if (!visited.has(n)) depthFirstTraverse(n, visited);
      }
    };

    depthFirstTraverse(this.nodes.get(label)!, new Set<GraphNode>());
  }

  *[Symbol.iterator](): IterableIterator<GraphNode> {
    for (const node of this.nodes.values()) {
      yield node;
    }
  }

  private che() {}

  // Iterator for edges in the graph (returns [from, to] pairs)
  *edges(): IterableIterator<[GraphNode, GraphNode]> {
    for (const [fromNode, neighbors] of this.adjacencyList) {
      for (const toNode of neighbors) {
        yield [fromNode, toNode];
      }
    }
  }

  // Iterator for neighbors of a specific node
  *neighbors(label: string): IterableIterator<GraphNode> {
    const node = this.nodes.get(label);
    if (!node) throw new Error("Node not found");

    const neighbors = this.adjacencyList.get(node);
    if (neighbors) {
      for (const neighbor of neighbors) {
        yield neighbor;
      }
    }
  }
}
