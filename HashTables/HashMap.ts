class Entry {
  public key: number | undefined;
  public val: string | undefined;

  constructor(key: number, val: string) {
    this.key = key;
    this.val = val;
  }
}

export class HashMap {
  entries: Array<Entry | undefined>;

  count: number = 0;
  capacity: number = 0;
  constructor(capacity: number) {
    this.entries = new Array<Entry>(capacity);
    this.capacity = capacity;
  }

  private hash(key: number) {
    return key % this.capacity;
  }

  private index(key: number, i: number) {
    return (this.hash(key) + i) % this.capacity;
  }

  private getIndex(key: number) {
    let steps = 0;

    while (steps < this.capacity) {
      let index = this.index(key, steps++);
      var entry = this.entries[index];
      if (entry == null || entry.key == key) return index;
    }
    return -1;
  }

  private getEntry(key: number): Entry | undefined {
    const index = this.getIndex(key);
    return this.entries[index];
  }

  public put(key: number, val: string) {
    const entry = this.getEntry(key);

    if (entry) {
      entry.val = val;
      return;
    }

    if (this.isFull()) throw new Error("!the hashmap is full!");
    this.entries[this.getIndex(key)] = new Entry(key, val);
    this.count++;
  }

  public get(key: number) {
    const entry = this.getEntry(key);

    return entry?.val;
  }

  public remove(k: number) {
    if (this.isEmpty()) throw new Error("there is nothing here");

    const existingIndex = this.getIndex(k);
    if (!existingIndex || existingIndex === -1) return undefined;
    this.entries[existingIndex] = undefined;
    this.count--;
  }

  private isEmpty() {
    return this.count === 0;
  }

  private isFull() {
    return this.count === this.capacity;
  }
  get size() {
    return this.count;
  }

  *[Symbol.iterator](): IterableIterator<Entry | undefined> {
    for (const e of this.entries) {
      yield e;
    }
  }
}
