// main.ts
import readline from "readline";

import { CharFinder } from "./HashTables/CharFinder.ts";
import { HashTable } from "./HashTables/HashTable.ts";
import { LinkedList } from "./LinkedList/LinkedList.ts";
import { HashTableExercises } from "./HashTables/intFinder.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const hTE = new HashTableExercises();
    const arr = [1, 2, 3, 5, 4, 6, 3, 5, 5, 4, 6, 3, 4];
    console.log(hTE.twoSum(arr, 7));
    // console.log(hTE.countPairsWithDiff([1, 1, 2, 2], 0));
  }
}

const main = new Main();
