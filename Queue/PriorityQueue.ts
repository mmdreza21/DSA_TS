export class PriorityQueue {
  private queue: Array<number>;
  private count: number = 0;
  private capacity: number = 0;

  constructor(size: number) {
    this.capacity = size;
    this.queue = new Array(size);
  }

  private shiftItemsToInsert(item: number): number {
    let i;
    for (i = this.count - 1; i >= 0; i--) {
      const current = this.queue[i];
      if (item < current) {
        this.queue[i + 1] = current;
      } else break;
    }
    return i + 1;
  }

  enqueue(item: number): void {
    if (this.isFull()) throw new Error("IllegalStateException");

    // let insertIndex = this.count;
    // while (insertIndex > 0 && item < this.queue[insertIndex - 1]) {
    //   this.queue[insertIndex] = this.queue[insertIndex - 1];
    //   insertIndex--;
    // }
    // this.queue[insertIndex] = item;

    const i = this.shiftItemsToInsert(item);
    this.queue[i] = item;

    this.count++;
  }

  dequeue(): number | undefined {
    if (this.count == 0) throw new Error("the Queue is empty!");
    return this.queue[--this.count];
  }

  peek(): number | undefined {
    if (this.count == 0) return undefined;
    return this.queue[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }

  get size(): number {
    return this.count;
  }

  print() {
    console.log("[", this.queue.join(" -> "), "]");
  }
}
