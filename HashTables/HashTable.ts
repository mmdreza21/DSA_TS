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

  private entries: Array<LinkedList<Entry>>;
  private capacity: number;
  private count: number = 0;

  constructor(size: number) {
    this.capacity = size;
    this.entries = new Array<LinkedList<Entry>>(size);
  }

  private hash(key: number) {
    return key % this.capacity;
  }

  public put(k: number, v: string) {
    if (this.count >= this.capacity) throw new Error("the Hash table is full");
    const index = this.hash(k);
    if (!this.entries[index]) this.entries[index] = new LinkedList<Entry>();

    const bucket = this.entries[index];
    for (const entry of bucket) {
      if (entry.key === k) {
        entry.val = v;
        return;
      }
    }

    bucket.addLast(new Entry(k, v));

    this.count++;
  }

  public get(k: number): string | undefined {
    if (this.isEmpty()) return undefined;

    const index = this.hash(k);
    let bucket = this.entries[index];
    if (bucket)
      for (const entry of bucket) if (entry!.key === k) return entry!.val;

    return undefined;
  }

  private isEmpty() {
    return this.count === 0;
  }

  public remove(k: number) {
    const index = this.hash(k);
    let bucket = this.entries[index];
    if (!bucket) throw new Error("the givin key is invalid!");
    for (const entry of bucket) {
      if (entry.key === k) return bucket.remove(entry);
    }
    throw new Error("the givin key is invalid!");
  }

  public print() {
    for (let index = 0; index < this.entries.length; index++) {
      const element = this.entries[index];
      console.log(index, "=>", element ? [...element] : "null");
    }
  }
}
