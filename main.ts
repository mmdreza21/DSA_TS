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
    const tree = new BinaryTree(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(6);
    tree.insert(1);
    console.log(tree);
  }
}

const main = new Main();
