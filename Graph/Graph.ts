import { Queue } from "../Queue/Queue.ts";
import { Stack } from "../Stack/Stack.ts";

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

  public addEdge(from: string, to: string) {
    const fromNode = this.nodes.get(from);
    if (!fromNode) throw new Error("from node is ENotFund.");

    const toNode = this.nodes.get(to);
    if (!toNode) throw new Error("to node is ENotFund.");

    this.adjacencyList.get(fromNode)!.add(toNode);
    //if we want non directive graph we add next line too
    // this.adjacencyList.get(toNode)!.push(fromNode);
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

  public removeEdge(from: string, to: string) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) return;

    this.adjacencyList.delete(fromNode);
  }

  public DepthFirstTraverse(label: string) {
    const node = this.nodes.get(label);
    if (!node) return;

    const stack = new Stack<GraphNode>(10);
    stack.push(node);

    const visited = new Set<GraphNode>();

    while (!stack.isEmpty()) {
      const current = stack.pop(); //A
      if (visited.has(current!)) continue;
      console.log(current?.label);
      visited.add(current!);

      for (const n of this.adjacencyList.get(current!)!) {
        if (!visited.has(n)) stack.push(n);
      }
    }
  }

  public DepthFirstTraverseRecessive(label: string) {
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

  public BreadthFirstTraverse(label: string) {
    const node = this.nodes.get(label);
    if (!node) return;

    const visited = new Set<GraphNode>();
    const queue = new Queue<GraphNode>(10);
    queue.enqueue(node);

    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      if (visited.has(current!)) continue;

      console.log(current?.label);
      visited.add(current!);

      for (const n of this.adjacencyList.get(current!)!) {
        if (!visited.has(n!)) queue.enqueue(n);
      }
    }
  }

  /**
   * cycleDetector
   */
  public hasCycle(): boolean {
    const unvisited = new Set<GraphNode>(this.nodes.values());
    const visiting = new Set<GraphNode>();
    const visited = new Set<GraphNode>();

    const detectCycle = (node: GraphNode): boolean => {
      // Move node from unvisited to visiting
      unvisited.delete(node);
      visiting.add(node);

      for (const neighbor of this.adjacencyList.get(node) || []) {
        if (visited.has(neighbor)) continue; // Already checked this path

        if (visiting.has(neighbor)) return true; // Cycle detected!

        if (detectCycle(neighbor)) return true;
      }

      // Move node from visiting to visited
      visiting.delete(node);
      visited.add(node);
      return false;
    };

    // Check all components of the graph
    while (unvisited.size > 0) {
      const [startNode] = unvisited;
      if (detectCycle(startNode)) {
        return true;
      }
    }

    return false;
  }

  *[Symbol.iterator](): IterableIterator<GraphNode> {
    for (const node of this.nodes.values()) {
      yield node;
    }
  }

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
