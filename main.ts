// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const tree = new AVLTree();
    // heap.insert(3);
    tree.insert(3);
    tree.insert(6);
    tree.insert(7);
    tree.insert(10);
    tree.insert(2);
    // tree.insert(2.5);
    tree.insert(1);
    tree.insert(4);
    tree.insert(5);

    console.log([...tree]);
  }
}

const main = new Main();
