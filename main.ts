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
<<<<<<< HEAD
    const tire = new Tire();
    tire.insert("car");
    tire.insert("care");

    tire.remove("car");
    console.log("car", tire.contain("car"));
    console.log("care", tire.contain("care"));
=======
    const trie = new Trie();
    trie.insert("car");
    trie.insert("care");

    console.log("car", trie.findWords("c"));

    console.log([...trie]);
>>>>>>> d274b4ad25a8d6c26cf4067c623118f0d41f34ce
  }
}

const main = new Main();
