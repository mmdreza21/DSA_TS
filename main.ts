// main.ts
import readline from "readline";

import { Queue } from "./Queue/Queue.ts";
import { QueueReverser } from "./Queue/QueueReverser.ts";
import { QueueWithTwoStacks } from "./Queue/QueueWithTwoStacks.ts";
import { PriorityQueue } from "./Queue/PriorityQueue.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const queue = new PriorityQueue(5);

    queue.enqueue(2);
    queue.enqueue(5);

    queue.enqueue(1);
    queue.enqueue(0);
    queue.enqueue(8);
    queue.print();

    while (!queue.isEmpty()) {
      console.log(queue.dequeue());
    }
  }
}

const main = new Main();
