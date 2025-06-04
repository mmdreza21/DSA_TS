// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { Stack } from "./Stack/Stack.ts";
import { LinkedListQueue } from "./Queue/LinkedListQueue.ts";
import { HashTableExercises } from "./HashTables/HashTableExercises.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const h = new HashTableExercises();
    console.log(h.twoSum([1, 7, 6, 5, 4, 3], 9));
  }
}

const main = new Main();
