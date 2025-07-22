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
    const trie = new Trie();
    trie.insert("cat");
    trie.insert("car");
    trie.insert("dog");
    trie.insert("cars");
    trie.insert("mamadreza");
    trie.insert("mamad");

    console.log(trie.contain("cat"));

    console.log([...trie]);
  }
}

const main = new Main();
