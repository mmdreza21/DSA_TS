// main.ts
import readline from "readline";
import { Sort } from "./Algorithms/Sort/Sort.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const sort = Sort.BobbleSort([8, 3, 4, 1, 2]);

    console.log(sort);
  }
}

const main = new Main();
