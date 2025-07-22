// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { Stack } from "./Stack/Stack.ts";
import { LinkedListQueue } from "./Queue/LinkedListQueue.ts";
import { HashTableExercises } from "./HashTables/HashTableExercises.ts";
import { Tire } from "./Trees/Trie.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const tire = new Tire();
    tire.insert("car");
    tire.insert("care");

    tire.remove("car");
    console.log("car", tire.contain("car"));
    console.log("care", tire.contain("care"));
  }
}

const main = new Main();
