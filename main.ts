// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { Stack } from "./Stack/Stack.ts";

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

    const s = new Stack<string>(8);

    s.mmd("ali");
    console.log(s);
  }
}

const main = new Main();
