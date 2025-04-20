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
    const queue = new PriorityQueue(3);

    queue.enqueue(5);

    queue.enqueue(3);
    queue.enqueue(2);
    queue.print();
  }
}

const main = new Main();
