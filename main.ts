// main.ts
import { log } from "console";
import { Search } from "./Algorithms/search/Search.ts";
import { Sort } from "./Algorithms/Sort/Sort.ts";

class Main {
  constructor() {
    const search = new Search();
    const item = search.linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 2);
    console.log(item);
  }
}

const main = new Main();
