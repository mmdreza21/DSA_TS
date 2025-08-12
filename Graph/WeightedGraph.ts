import PriorityQueue from "priorityqueuejs";

class GraphNode {
  label: string;
  private edges: Set<Edge> = new Set();

  constructor(label: string) {
    this.label = label;
  }

  public addEdge(to: GraphNode, weight: number) {
    this.edges.add(new Edge(this, to, weight));
  }

  get gteEdges() {
    return this.edges;
  }
}

class Edge {
  public from: GraphNode;
  public to: GraphNode;
  public weight: number;

  constructor(from: GraphNode, to: GraphNode, weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class NodeEntry {
  public node: GraphNode;
  public priority: number;
  constructor(node: GraphNode, priority: number) {
    this.node = node;
    this.priority = priority;
  }
}

export class Graph {
  private nodes: Map<string, GraphNode> = new Map();

  public addNode(label: string) {
    if (!this.nodes.has(label)) this.nodes.set(label, new GraphNode(label));
  }

  public addEdge(from: string, to: string, weight: number) {
    const fromNode = this.nodes.get(from);
    if (!fromNode) throw new Error("from node is ENotFund.");

    const toNode = this.nodes.get(to);
    if (!toNode) throw new Error("to node is ENotFund.");

    fromNode.addEdge(toNode, weight);
    toNode.addEdge(fromNode, weight);
  }

  public getShortestDistance(from: string, to: string): number {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || toNode) throw new Error("hah");

    const distance = new Map<GraphNode, Number>();
    const previousNodes = new Map<GraphNode, GraphNode>();

    const queue = new PriorityQueue<NodeEntry>(
      (a, b) => b.priority - a.priority // Min-heap comparison
    );

    for (const fNode of from) {
    }

    return 0;
  }

  *[Symbol.iterator](): IterableIterator<GraphNode> {
    for (const node of this.nodes.values()) {
      yield node;
    }
  }

  // Iterator for edges in the graph (returns [from, to] pairs)
  *edges(): IterableIterator<string> {
    for (const node of this.nodes.values()) {
      for (const edge of node.gteEdges.values()) {
        yield `${edge.from.label} -> ${edge.to.label}: ${edge.weight}`;
      }
    }
  }
}
