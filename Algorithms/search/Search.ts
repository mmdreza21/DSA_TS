export class Search {
  public linearSearch(array: Array<number>, target: number) {
    for (const item of array) if (item === target) return item;

    return -1;
  }
}
