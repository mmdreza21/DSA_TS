// main.ts
import readline from "readline";

import { HashMap } from "./HashTables/HashMap.ts";
import { BinaryTree } from "./Trees/BinaryTree2.ts";

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
    tree.insert(15);
    tree.insert(12);
    tree.insert(2);
    tree.insert(100);

    console.log(tree.getAncestors(2));

    console.log([...tree]);
  }
}

const main = new Main();
