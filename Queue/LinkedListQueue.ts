import { LinkedList } from "../LinkedList/LinkedList.ts";
class QueueNode {
  public next: QueueNode | null = null;
  public value: number;
  constructor(val: number) {
    this.value = val;
  }
}

export class LinkedListQueue {
  private head: QueueNode | null = null;
  private tail: QueueNode | null = null;
  private counter: number = 0;

  enqueue(item: number): void {
    const node = new QueueNode(item);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.counter++;
  }

  dequeue(): number | undefined {
    if (this.isEmpty()) throw new Error("the Queue is Empty");

    const val = this.head?.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      const second = this.head!.next;
      this.head!.next = null;
      this.head = second;
    }
    this.counter--;
    return val;
  }

  // peek(): number | undefined {}

  isEmpty(): boolean {
    return this.counter === 0;
  }

  get size(): number {
    return this.counter;
  }

  *[Symbol.iterator](): IterableIterator<number> {
    let current = this.head;
    while (current !== null) {
      yield current.value;
      current = current.next;
    }
  }
}
