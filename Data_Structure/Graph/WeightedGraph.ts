import PriorityQueue from "priorityqueuejs";
import { Stack } from "../Stack/Stack.ts";

class GraphNode {
  label: string;
  private edges: Set<Edge> = new Set();

  constructor(label: string) {
    this.label = label;
  }

  public addEdge(to: GraphNode, weight: number) {
    this.edges.add(new Edge(this, to, weight));
  }

  get getEdges() {
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

class Path {
  private nodes = new Array<string>();

  set add(node: string) {
    this.nodes.push(node);
  }
}

export class WeightedGraph {
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
    if (!fromNode || !toNode) throw new Error("404 From or To node not found.");

    const distance = new Map<GraphNode, number>();
    // Initialize distances to all nodes as infinity
    for (const node of this.nodes.values())
      distance.set(node, Number.MAX_VALUE);
    distance.set(fromNode, 0); //starting node

    // Priority queue to hold nodes to explore, sorted by distance
    const queue = new PriorityQueue<NodeEntry>(
      (a, b) => b.priority - a.priority // Min-heap comparison
    );
    queue.enq(new NodeEntry(fromNode, 0)); // Start with the source node

    const visited = new Set<GraphNode>();
    while (!queue.isEmpty()) {
      const current = queue.deq().node;
      visited.add(current);

      for (const edge of current.getEdges) {
        if (visited.has(edge.to)) continue;
        const newDistent = distance.get(current)! + edge.weight;
        if (newDistent < distance.get(edge.to)!) {
          distance.set(edge.to, newDistent);
          // now we haw new distance, so we add it to the queue
          queue.enq(new NodeEntry(edge.to, newDistent));
        }
      }
    }
    return distance.get(this.nodes.get(to)!)!;
  }

  public getShortestPath(from: string, to: string): Path {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) throw new Error("hah");

    const distance = new Map<GraphNode, number>();
    // Initialize distances to all nodes as infinity
    for (const node of this.nodes.values())
      distance.set(node, Number.MAX_VALUE);
    distance.set(fromNode, 0); //starting node

    const visited = new Set<GraphNode>();
    // Priority queue to hold nodes to explore, sorted by distance
    const queue = new PriorityQueue<NodeEntry>(
      (a, b) => b.priority - a.priority // Min-heap comparison
    );
    queue.enq(new NodeEntry(fromNode, 0)); // Start with the source node

    const previousNodes = new Map<GraphNode, GraphNode>();

    while (!queue.isEmpty()) {
      const current = queue.deq().node;
      visited.add(current);

      for (const edge of current.getEdges) {
        if (visited.has(edge.to)) continue;
        const newDistent = distance.get(current)! + edge.weight;
        if (newDistent < distance.get(edge.to)!) {
          previousNodes.set(edge.to, current);
          distance.set(edge.to, newDistent);
          // now we have new distance, so we add it to the queue
          queue.enq(new NodeEntry(edge.to, newDistent));
        }
      }
    }

    return this.buildPath(toNode, previousNodes);
  }

  private buildPath(
    toNode: GraphNode,
    previousNodes: Map<GraphNode, GraphNode>
  ): Path {
    const maxStackSize = 42; //just to avoid infinite loop in case of cycle
    const stack = new Stack<GraphNode>(maxStackSize);
    stack.push(toNode);
    let previous = previousNodes.get(toNode);
    while (previous) {
      stack.push(previous);
      previous = previousNodes.get(previous);
    }

    const path = new Path();
    while (!stack.isEmpty()) {
      path.add = stack.pop()?.label!;
    }

    return path;
  }

  public hasCycle(label: string): boolean {
    const visited = new Set<GraphNode>();
    const previous = new Set<GraphNode>();

    const detectCycle = (root: GraphNode): boolean => {
      for (const neighbor of this.nodes.get(label)?.getEdges!) {
        if (previous.has(neighbor.to)) continue;
        previous.add(neighbor.from);

        if (visited.has(neighbor.from)) return true;
        visited.add(neighbor.from);

        detectCycle(neighbor.to);
      }
      console.log(previous);
      console.log(visited);
      return false;
    };
    return detectCycle(this.nodes.get(label)!);
  }

  public hasCycleMosh(): boolean {
    // Keeps track of visited nodes during DFS
    const visited = new Set<GraphNode>();

    const detectCycle = (
      node: GraphNode,
      visited: Set<GraphNode>,
      parent?: GraphNode
    ): boolean => {
      // Mark current node as visited
      visited.add(node);

      // Explore all edges from this node
      for (const edge of node.getEdges) {
        // Skip the edge leading back to the parent node
        if (edge.to === parent) continue;

        // Case 1: Destination node is already visited -> cycle detected
        // Case 2: Destination node not visited -> recursively check deeper
        if (visited.has(edge.to) || detectCycle(edge.to, visited, node))
          return true;
      }
      // No cycle found from this path
      return false;
    };

    // Run DFS from all unvisited nodes (to cover disconnected graphs)
    for (const node of this.nodes.values()) {
      if (!visited.has(node) && detectCycle(node, visited)) return true; // Found a cycle
    }

    // No cycles detected in the graph
    return false;
  }

  // prim's algorithm
  public getMinimumSpanningTree(): WeightedGraph {
    // Create a new graph to store the minimum spanning tree (MST)
    const tree = new WeightedGraph();

    if (this.nodes.size === 0) return tree;
    // Create a priority queue to always get the edge with minimum weight
    // The priority queue is initialized with a function that uses edge weight for comparison
    const edges = new PriorityQueue<Edge>((a) => a.weight);

    // Get the first node from the graph to start building the MST
    // (Prim's algorithm can start with any node)
    const [startNode] = this.nodes.values();

    // Add all edges connected to the starting node to the priority queue
    for (const edge of startNode.getEdges) edges.enq(edge);

    // Add the starting node to the MST
    tree.addNode(startNode.label);

    // If there are no edges (graph has only one node), return the empty tree
    if (edges.isEmpty()) return tree;

    // Continue until all nodes are included in the MST
    while (tree.nodes.size < this.nodes.size) {
      // Get the edge with minimum weight from the priority queue
      const minEdge = edges.deq();
      const nextNode = minEdge.to;

      // If the node is already in the MST, skip this edge (to avoid cycles)
      if (tree.containsNode(nextNode.label)) continue;

      // Add the new node to the MST
      tree.addNode(nextNode.label);
      // Add the edge connecting it to the MST
      tree.addEdge(minEdge.from.label, nextNode.label, minEdge.weight);

      // Add all edges from this new node to the priority queue,
      // but only if they lead to nodes not already in the MST
      for (const edge of nextNode.getEdges) {
        if (!tree.containsNode(edge.to.label)) {
          edges.enq(edge);
        }
      }
    }

    return tree;
  }

  public containsNode(label: string): boolean {
    return this.nodes.has(label);
  }

  *[Symbol.iterator](): IterableIterator<GraphNode> {
    for (const node of this.nodes.values()) {
      yield node;
    }
  }

  // Iterator for edges in the graph (returns [from, to] pairs)
  *edges(): IterableIterator<string> {
    for (const node of this.nodes.values()) {
      for (const edge of node.getEdges.values()) {
        yield `${edge.from.label} -> ${edge.to.label}: ${edge.weight}`;
      }
    }
  }
}
