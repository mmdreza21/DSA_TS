// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { BinaryTree } from "./Trees/BinaryTree2.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const tree = new BinaryTree();
    const avlTree = new AVLTree();

    // Build first tree
    tree.insert(50); // Root
    tree.insert(30); // Left of 50
    tree.insert(70); // Right of 50
    tree.insert(20); // Left of 30
    tree.insert(40); // Right of 30
    tree.insert(60); // Left of 70
    tree.insert(80); // Right of 70
    tree.insert(10); // Left of 20
    tree.insert(25); // Right of 20
    tree.insert(35); // Left of 40
    tree.insert(45); // Right of 40
    tree.insert(55); // Left of 60
    tree.insert(65); // Right of 60
    tree.insert(75); // Left of 80
    tree.insert(85); // Right of 80
    // tree.insert(6); // Left of 12 (Level 5)
    // tree.insert(18); // Right of 12 (Level 5)
    // tree.insert(31); // Left of 37 (Level 5)
    // tree.insert(43); // Right of 37 (Level 5)
    // tree.insert(56); // Left of 62 (Level 5)
    // tree.insert(68); // Right of 62 (Level 5)
    // tree.insert(81); // Left of 87 (Level 5)
    // tree.insert(93); // Right of 87 (Level 5)
    // tree.insert(106); // Left of 112 (Level 5)
    // tree.insert(118); // Right of 112 (Level 5)
    // tree.insert(130); // Left of 137 (Level 5)
    // tree.insert(144); // Right of 137 (Level 5)
    // tree.insert(157); // Left of 162 (Level 5)
    // tree.insert(168); // Right of 162 (Level 5)
    // tree.insert(181); // Left of 187 (Level 5)
    // tree.insert(193); // Right of 187 (Level 5)
    // tree.insert(3); // Left of 6 (Level 6 - breaks perfection)

    console.log(tree.isBalanced(tree));
    console.log(tree.isPerfect());
    console.log([...tree]);
  }
}

const main = new Main();
