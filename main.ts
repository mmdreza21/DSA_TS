// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { BinaryTree } from "./Trees/BinaryTree2.ts";
import { Heap } from "./Trees/Heap.ts";
import { MaxHeap } from "./Trees/MaxHeap.ts";
import { MinHeap } from "./Trees/MinHeap.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const arr = [5, 3, 8, 4, 1, 2];

    const minHeap = new MinHeap();

    minHeap.insert(5, "hasan");
    minHeap.insert(6, "mammad");
    minHeap.insert(4, "abas");
    minHeap.insert(3, "ali");
    minHeap.insert(1, "ali");
    console.log(minHeap.remove());
    console.log([...minHeap]);
  }
}

const main = new Main();
