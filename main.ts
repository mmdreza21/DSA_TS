// main.ts
import { Sort } from "./Algorithms/Sort/Sort.ts";

class Main {
  constructor() {
    const sort = new Sort();
    sort.BobbleSort([8, 3, 4, 1, 2, 3]);
    sort.selectionSort([8, 3, 4, 1, 2, 3]);

    console.log(sort.selectionSort([8, 3, 4, 1, 2, 3]));
    console.log("inser  ", sort.mergeSort([8, 3, 4, 1, 2, 3]));
  }
}

const main = new Main();
