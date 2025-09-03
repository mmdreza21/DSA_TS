// main.ts
import readline from "readline";

import { WeightedGraph } from "./Data_Structure/Graph/WeightedGraph.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const graph = new WeightedGraph();

    graph.addNode("a");
    graph.addNode("b");
    graph.addNode("c");
    graph.addNode("d");

    graph.addEdge("a", "b", 1);
    graph.addEdge("b", "d", 4);
    graph.addEdge("c", "d", 5);
    graph.addEdge("a", "c", 1);
    graph.addEdge("b", "c", 2);
    // graph.addEdge("a", "c", 10);

    // console.log(graph.hasCycleMosh("a"));
    // // graph.removeEdge("a", "b");
    // // graph.removeNode("a");
    // // graph.DepthFirstTraverse("d");
    // console.log("graph node ", [...graph]);
    console.log("graph edge ", [...graph.getMinimumSpanningTree().edges()]);
    console.log("graph edge ", [...graph.edges()]);
    console.log("---------------------------");

    console.log("graph edge ", [...graph.getMinimumSpanningTree()]);
  }
}

const main = new Main();
