// main.ts
import readline from "readline";

import { LinkedListQueue } from "./Queue/LinkedListQueue.ts";
import { StackWithTwoQueues } from "./Stack/StackWithTwoQueues.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const stack = new StackWithTwoQueues(8);

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    console.log(stack.pop());
    console.log(stack.pop());
    stack.print();
    console.log(stack.peek());
  }
}

const main = new Main();
