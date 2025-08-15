// main.ts
import readline from "readline";

import { Graph } from "./Graph/WeightedGraph.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const graph = new Graph();

    graph.addNode("a");
    graph.addNode("b");
    graph.addNode("c");

    graph.addEdge("a", "b", 1);
    graph.addEdge("b", "c", 2);
    graph.addEdge("a", "c", 10);

    console.log(graph.getShortestDistance("a", "c"));
    console.log(graph.getShortestPath("a", "c"));
    // graph.removeEdge("a", "b");
    // graph.removeNode("a");
    // graph.DepthFirstTraverse("d");
    console.log("graph node ", [...graph]);
    console.log("---------------------------");
    console.log("graph edge ", [...graph.edges()]);
  }
}

const main = new Main();
