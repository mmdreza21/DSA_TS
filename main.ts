// main.ts
import readline from "readline";

import { HashMap } from "./HashTables/Hashmap.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const hm = new HashMap(5);

    hm.put(6, "mmd");
    hm.put(1, "mmdhasan");
    hm.put(5, "5");
    hm.put(12, "2");
    hm.put(6, "mmdali");
    hm.put(0, "reza");
    hm.put(1, "reza");
    console.log([...hm]);
  }
}

const main = new Main();
