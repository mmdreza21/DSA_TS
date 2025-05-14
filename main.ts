// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { BinaryTree } from "./Trees/BinaryTree2.ts";
import { Heap } from "./Trees/Heap.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const heap = new Heap();
    heap.insert(20);
    heap.insert(10);
    heap.insert(4);
    heap.insert(15);
    heap.insert(22);

    heap.remove();
    heap.remove();
    heap.remove();
    // heap.insert(3);

    console.log([...heap]);
  }
}

const main = new Main();
