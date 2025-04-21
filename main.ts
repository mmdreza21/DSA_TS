// main.ts
import readline from "readline";
import { DualStack } from "./Stack/DualStack.ts"; // Note .js extension
import { Stack } from "./Stack/Stack.ts";
import { CArray } from "./Array/arrayFirstEx.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const arr = new CArray(4);

    arr.insert(1);
    arr.insert(2);
    arr.insert(3);
    arr.insert(4);

    arr.insertAt(4, 1);
    arr.print();
  }
}

const main = new Main();
