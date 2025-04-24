import { LinkedList } from "../LinkedList/LinkedList.ts";

export class LinkedListQueue {
  private queue: LinkedList<number>;
  private counter: number = 0;

  constructor() {
    this.queue = new LinkedList();
  }

  enqueue(item: number): void {
    this.queue.addLast(item);
    this.counter++;
  }

  dequeue(): number | undefined {
    if (this.counter === 0) throw new Error("Q is empty");
    const val = this.queue.front?.value;
    // const val = this.queue.getKThFromEnd(this.counter);
    this.queue.deleteFirst();
    this.counter--;
    return val;
  }

  peek(): number | undefined {
    if (this.counter == 0) return undefined;
    return this.queue.front?.value;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  get size(): number {
    return this.counter;
  }

  print() {
    console.log("[", [...this.queue].join(" -> "), "]");
  }
}
