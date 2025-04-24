// main.ts
import readline from "readline";

import { CharFinder } from "./HashTables/CharFinder.ts";
import { HashTable } from "./HashTables/HashTable.ts";
import { LinkedList } from "./LinkedList/LinkedList.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const hT = new HashTable(5);
    hT.put(3, "mmdreza");
    hT.put(4, "ali");
    hT.put(1, "ahad");
    hT.put(6, "ahmad");
    hT.put(3, "shirin");
    hT.remove(6);
    hT.print();
    console.log(hT.get(2));
  }
}

const main = new Main();
