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
    const index = this.hash(key);
    for (let i = index; i < this.table.length; i++) {
      const element = this.table[i];
      if (!element) {
        this.table[i] = new Entry(key, val);
        break;
      }
    }
    this.count++;
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

  get size() {
    return this.count;
  }
}
