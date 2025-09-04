// main.ts
import readline from "readline";
import { Sort } from "./Algorithms/Sort/Sort.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const sort = new Sort();
    sort.BobbleSort([8, 3, 4, 1, 2, 3]);
    sort.selectionSort([8, 3, 4, 1, 2, 3]);

    console.log(sort.selectionSort([8, 3, 4, 1, 2, 3]));
  }
}

const main = new Main();
