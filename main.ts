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
    tree.insert(14);
    tree.insert(6);
    tree.insert(3);
    tree.insert(8);
    tree.insert(24);
    tree.insert(26);

    // console.log(tree.getNodesAtKDist(3));
    console.log(tree.countLeaves());

    console.log([...tree]);
  }
}

const main = new Main();
