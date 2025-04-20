export class PriorityQueue {
  private queue: Array<number>;
  private counter: number = 0;
  private capacity: number = 0;

  private front: number = 0;
  private rear: number = 0;

  constructor(size: number) {
    this.capacity = size;
    this.queue = new Array(size).fill(0);
  }

  enqueue(item: number): void {
    if (this.isFull()) throw new Error("IllegalStateException");
    if (this.isEmpty()) {
      this.queue[this.rear] = item;
    } else {
      for (let index = this.counter - 1; index >= 0; index--) {
        const current = this.queue[index];

        if (item <= current) {
          console.log(item);

          if (this.counter === 1) {
            this.queue[index + 1] = current;
            this.queue[index] = item;
          } else {
            this.queue[index + 1] = current;
          }
        } else {
          this.queue[index + 1] = item;
        }
      }
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.counter++;
  }

  dequeue(): number | undefined {
    if (this.counter == 0) throw new Error("the Queue is empty!");
    const val = this.queue[this.front];
    this.queue[this.front] = 0;
    this.front = (this.front + 1) % this.capacity;
    this.counter--;
    return val;
  }

  peek(): number | undefined {
    if (this.counter == 0) return undefined;
    return this.queue[this.front];
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }

  get size(): number {
    return this.counter;
  }

  print() {
    console.log("[", this.queue.join(" -> "), "]");
  }
}
