// main.ts
import { Sort } from "./Algorithms/Sort/Sort.ts";

class Main {
  constructor() {
    const sort = new Sort();
    sort.BobbleSort([8, 3, 4, 1, 2, 3]);
    sort.selectionSort([8, 3, 4, 1, 2, 3]);

    console.log(sort.selectionSort([8, 3, 4, 1, 2, 3]));
    console.log("count  ", sort.countingSort([5, 2, 5, 3, 2, 4]));
  }
}

const main = new Main();
