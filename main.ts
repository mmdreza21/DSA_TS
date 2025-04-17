// main.ts
import readline from "readline";
import { DualStack } from "./Stack/DualStack.ts"; // Note .js extension
import { Stack } from "./Stack/Stack.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const stack = new Stack(5);
    stack.push(9);
    stack.push(2);
    stack.push(3);
    stack.push(6);
    stack.push(1);
    stack.pop();

    console.log(stack.min());
  }
}

const main = new Main();
