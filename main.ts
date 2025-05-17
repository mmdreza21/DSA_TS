// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { BinaryTree } from "./Trees/BinaryTree2.ts";
import { Heap } from "./Trees/Heap.ts";
import { MaxHeap } from "./Trees/MaxHeap.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const arr = [5, 3, 8, 4, 1, 2];

    console.log(MaxHeap.kthMaxNode(arr, 1));
    console.log(MaxHeap.isMaxHeap(arr));

    const heapify = MaxHeap.heapify(arr);
    console.log(MaxHeap.isMaxHeap(arr));

    console.log(arr);
  }
}

const main = new Main();
