// main.ts
import readline from "readline";

import { HashMap } from "./HashTables/HashMap.ts";
import { BinaryTree } from "./Trees/BinaryTree.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const tree = new BinaryTree();

    // Build first tree
    tree.insert(20);
    tree.insert(10);
    tree.insert(30);
    tree.insert(40);
    tree.insert(60);
    tree.insert(25);
    tree.insert(2);

    console.log(tree.getNodesAtKDist(1));
  }
}

const main = new Main();
