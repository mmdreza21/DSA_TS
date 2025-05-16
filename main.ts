// main.ts
import readline from "readline";

import { BinaryTree } from "./Trees/BinaryTree3.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const tree = new BinaryTree();
    const tree2 = new BinaryTree();
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

    tree2.insert(3);
    tree2.insert(6);
    // tree2.insert(7);
    // tree2.insert(10);
    // tree2.insert(2);
    // tree2.insert(2.5);
    // tree2.insert(1);
    // tree2.insert(4);
    // tree2.insert(5);

    tree2.swapRoot();

    console.log(tree.traverseLevelOrder());
    console.log(tree.max());

    console.log([...tree]);
  }
}

const main = new Main();
