// main.ts
import readline from "readline";

import { Graph } from "./Graph/Graph.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const graph = new Graph();

    graph.addNode("a");
    graph.addNode("b");
    graph.addEdge("a", "b");
    graph.addNode("c");
    graph.addNode("d");

    graph.addEdge("b", "c");
    graph.addEdge("a", "c");
    graph.addEdge("d", "a");

    // graph.removeEdge("a", "b");
    // graph.removeNode("a");
    console.log(graph.hasCycle());
    // console.log("---------------------------");
    // graph.DepthFirstTraverse("d");
    // console.log("graph node ", [...graph]);
    // console.log("graph edge ", [...graph.edges()]);
  }
}

const main = new Main();
