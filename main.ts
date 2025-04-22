// main.ts
import readline from "readline";

import { CharFinder } from "./HashTables/CharFinder.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  constructor() {
    const f = new CharFinder();
    console.log(f.FirstRepeatedChar("green apple"));
  }
}

const main = new Main();
