import { LinkedList } from "../LinkedList/LinkedList.ts";

class Entry {
  public key: number | undefined;
  public val: string | undefined;
  constructor(key: number, val: string) {
    this.key = key;
    this.val = val;
  }
}

export class HashTable {
  //collisions ==> chaining

  private arr: Array<LinkedList<Entry>>;
  private capacity: number;
  private count: number = 0;

  constructor(size: number) {
    this.capacity = size;
    this.arr = new Array<LinkedList<Entry>>(size);
  }

  private hash(key: number) {
    return key % this.capacity;
  }

  public put(k: number, v: string) {
    const index = this.hash(k);
    if (!this.arr[index]) {
      const ls = new LinkedList<Entry>();
      ls.addFirst(new Entry(k, v));
      this.arr[index] = ls;
    } else {
      this.arr[index].addLast(new Entry(k, v));
    }

    this.count++;
  }

  public get(k: number) {}

  public remove(k: number) {}

  public print() {
    for (let index = 0; index < this.arr.length; index++) {
      const element = this.arr[index];
      console.log(index, "=>", element ? element.toArray() : "null");
    }
  }
}
