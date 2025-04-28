class Entry {
  public key: number | undefined;
  public val: string | undefined;
  constructor(key: number, val: string) {
    this.key = key;
    this.val = val;
  }
}

export class HashMap {
  table: Array<Entry | undefined>;

  count: number = 0;
  capacity: number = 0;
  constructor(capacity: number) {
    this.table = new Array<Entry>(capacity);
    this.capacity = capacity;
  }

  private hash(k: number) {
    return k % this.capacity;
  }

  public put(key: number, val: string) {
    for (let i = 0; i < this.capacity; i++) {
      const e = this.table[i];
      if (e?.key === key) {
        this.table[i]!.val = val;
        return;
      }
    }
    if (this.isFull()) throw new Error("!the hashmap is full!");

    const entry = new Entry(key, val);
    let index = this.hash(key);

    for (let i = index; i < this.capacity; i++) {
      if (!this.table[index]) {
        this.table[index] = entry;
        this.count++;
        return;
      }
      index = this.hash(i + 1);
    }
  }

  /**
   * get
   */
  public get(k: number) {
    if (this.isEmpty()) return undefined;
    for (const entry of this.table) {
      if (entry?.key === k) return entry.val;
    }
  }

  public remove(k: number) {
    if (this.isEmpty()) throw new Error("there is nothing here");
    for (let i = 0; i < this.table.length; i++) {
      const entry = this.table[i];
      if (entry?.key === k) this.table[i] = undefined;
    }
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
    for (const e of this.table) {
      yield e;
    }
  }
}
