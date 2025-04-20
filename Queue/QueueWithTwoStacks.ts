import { Stack } from "../Stack/Stack.ts";

export class QueueWithTwoStacks {
  private counter: number = 0;
  private capacity: number = 0;

  private stack1: Stack<number>;
  private stack2: Stack<number>;

  constructor(size: number) {
    this.capacity = size;
    this.stack1 = new Stack<number>(size);
    this.stack2 = new Stack<number>(size);
  }

  enqueue(item: number): void {
    if (this.isFull()) throw new Error("IllegalStateException");
    this.stack1.push(item);
    this.counter++;
  }

  moveStack1ToStack2() {
    if (this.stack2.isEmpty())
      while (!this.stack1.isEmpty()) this.stack2.push(this.stack1.pop()!);
  }

  dequeue(): number | undefined {
    if (this.isEmpty()) throw new Error("the Queue is empty!");
    this.moveStack1ToStack2();
    this.counter--;
    return this.stack2.pop();
  }

  peek(): number | undefined {
    if (this.isEmpty()) throw new Error("the Queue is empty!");
    this.moveStack1ToStack2();
    this.counter--;
    return this.stack2.peek();
  }

  get size(): number {
    return this.counter;
  }

  isEmpty(): boolean {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }

  print() {
    console.log(
      "[",
      [...this.stack1.stackContent, ...this.stack2.stackContent.reverse()].join(
        "->"
      ),
      "]"
      // this.stack1.stackContent,
      // this.stack2.stackContent
    );
  }
}
