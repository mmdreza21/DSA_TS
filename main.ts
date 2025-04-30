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

    tree.insert(7);
    tree.insert(4);
    tree.insert(1);
    tree.insert(6);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    console.log([...tree]);
    console.log("tree.traversePreOrder()");
    console.log(tree.traversePreOrder());
    console.log("tree.traverseInOrder()");
    console.log(tree.traverseInOrder());
    console.log("tree.traversePostOrder()");
    console.log(tree.traversePostOrder());
  }
}

const main = new Main();
