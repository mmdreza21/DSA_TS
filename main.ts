// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { BinaryTree } from "./Trees/BinaryTree2.ts";
import { Heap } from "./Trees/Heap.ts";
import { MaxHeap } from "./Trees/MaxHeap.ts";
import { MinHeap } from "./Trees/MinHeap.ts";
import { LinkedListQueue } from "./Queue/LinkedListQueue.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const linkedListQue = new LinkedListQueue();
    linkedListQue.enqueue(5);
    linkedListQue.enqueue(4);
    linkedListQue.enqueue(3);
    console.log("asddd");
    console.log([...linkedListQue]);

    console.log(linkedListQue.dequeue());
    console.log([...linkedListQue]);
  }
}

const main = new Main();
