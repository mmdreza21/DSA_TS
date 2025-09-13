// main.ts

import { StringManipulation } from "./Algorithms/String_Manipulation/StringManipulation.ts";

class Main {
  constructor() {
    const sm = new StringManipulation();
    const item = sm.findNumberOfVowels("hello mamad");
    console.log(item);
  }
}

const main = new Main();
