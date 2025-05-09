// todo

// private class Node {
//   private int value;
//   private Node next;

//   public Node(int value) {
//       this.value = value;
//   }
// }

//TODO

export class Queue<T> {
  private queue: Array<T | undefined>;
  private counter: number = 0;
  private capacity: number = 0;

  // private int value;
  // private Node next;

  // private Node head;
  // private Node tail;
  // private int count;

  private front: number = 0;
  private rear: number = 0;

  constructor(size: number) {
    this.capacity = size;
    this.queue = new Array<T>(size);
  }

  enqueue(item: T): void {
    if (this.isFull()) throw new Error("IllegalStateException");
    this.queue[this.rear] = item;
    this.rear = (this.rear + 1) % this.capacity;
    this.counter++;
  }

  dequeue(): T | undefined {
    if (this.counter === 0) throw new Error("the Queue is empty!");
    const val = this.queue[this.front];
    this.queue[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.counter--;
    return val;
  }

  peek(): T | undefined {
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
