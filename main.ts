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

    graph.addNode("X");
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("P");

<<<<<<< HEAD
    graph.addEdge("a", "b");
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
=======
    graph.addEdge("X", "A");
    graph.addEdge("X", "B");
    graph.addEdge("A", "P");
    graph.addEdge("B", "P");

    // graph.removeEdge("a", "b");
    // graph.removeNode("a");
    graph.topologicalSort("X");
    console.log("---------------------------");
    console.log(graph.topologicalSortMosh("X"));
    console.log("---------------------------");
    console.log("graph node ", [...graph]);
    console.log("graph edge ", [...graph.edges()]);
>>>>>>> d38740f56690744f4555c893d7dafd47b2f6fe97
  }
}

const main = new Main();
