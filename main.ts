// main.ts
import readline from "readline";

import { CharFinder } from "./HashTables/CharFinder.ts";
import { HashTable } from "./HashTables/HashTable.ts";
import { LinkedList } from "./LinkedList/LinkedList.ts";
import { HashTableExercises } from "./HashTables/HashTableExercises.ts";
import { HashMap } from "./HashTables/Hashmap.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const hm = new HashMap(5);

    hm.put(1, "mmdhasan");
    hm.put(6, "mmd");
    hm.put(5, "mmdali");
    console.log(hm.remove(5));
    console.log(hm.get(5));
    console.log(hm);
  }
}

const main = new Main();
