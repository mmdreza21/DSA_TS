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
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    // Build first tree
    tree1.insert(20);
    tree1.insert(10);
    tree1.insert(30);
    tree1.insert(40);
    tree1.insert(50);

    // Build second tree with same structure
    tree2.insert(20);
    tree2.insert(10);
    tree2.insert(30);
    tree2.insert(40);
    tree2.insert(50);

    // Build third tree with different structure
    const tree3 = new BinaryTree();
    tree3.insert(20);
    tree3.insert(30);
    tree3.insert(70);
    tree3.insert(10);
    tree3.insert(50);

    console.log("tree1 equals tree2:", tree1.equals(tree2)); // Should be true
    console.log("tree1 equals tree3:", tree1.equals(tree3)); // Should be false
    tree1.swapRoot();
    console.log("tree1 with swap", tree1.isBST());
    console.log("tree2", tree2.isBST());
  }
}

const main = new Main();
