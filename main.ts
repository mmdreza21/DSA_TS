// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { Stack } from "./Stack/Stack.ts";
import { LinkedListQueue } from "./Queue/LinkedListQueue.ts";
import { HashTableExercises } from "./HashTables/HashTableExercises.ts";
import { Trie } from "./Trees/Trie.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    // const trie = new Trie();
    // trie.insert("car");
    // trie.insert("care");

    // console.log("car", trie.containR("ca"));

    // console.log([...trie]);

    const m = Trie.longestCommonPrefix(["card", "care"]);
    console.log(m);
  }
}

const main = new Main();
