// main.ts
import readline from "readline";

import { AVLTree } from "./Trees/AVLTree.ts";
import { Stack } from "./Stack/Stack.ts";
import { LinkedListQueue } from "./Queue/LinkedListQueue.ts";
import { HashTableExercises } from "./HashTables/HashTableExercises.ts";
import { BinaryTree } from "./Trees/BinaryTree2.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const tree = new BinaryTree();

    tree.insert(5);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    tree.insert(1);
    tree.insert(3);
    tree.insert(2);

    console.log(tree.contain(8));

    console.log([...tree]);
  }
}

const main = new Main();
