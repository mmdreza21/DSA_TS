import { Queue } from "../Queue/Queue.ts";

export class StackWithTwoQueues {
  private queue1;
  private queue2;
  private count: number = 0;
  private capacity: number;

  constructor(size: number) {
    if (size < 0) throw new Error("Size must be positive");
    this.capacity = size;
    this.queue1 = new Queue<number>(size);
    this.queue2 = new Queue<number>(size);
  }

  public push(item: number) {
    this.queue1.enqueue(item);
    this.count++;
  }

  public pop(): number | undefined {
    if (this.isEmpty()) return undefined;
    let val: number | undefined;
    if (this.queue2.isEmpty()) {
      val = this.transferUntilLast(this.queue1, this.queue2);
    } else {
      val = this.transferUntilLast(this.queue2, this.queue1);
    }
    this.count--;
    return val;
  }

  private transferUntilLast(from: Queue<number>, to: Queue<number>): number {
    while (from.size > 1) to.enqueue(from.dequeue()!);
    return from.dequeue()!;
  }

  private transferAllBack(
    from: Queue<number>,
    to: Queue<number>,
    last: number
  ) {
    to.enqueue(last);
  }

  public peek(): number | undefined {
    if (this.isEmpty()) return undefined;
    let val: number | undefined;

    if (this.queue2.isEmpty()) {
      val = this.transferUntilLast(this.queue1, this.queue2);
      this.transferAllBack(this.queue1, this.queue2, val);
    } else {
      val = this.transferUntilLast(this.queue2, this.queue1);
      this.transferAllBack(this.queue2, this.queue1, val);
    }
    return val;
  }

  public isEmpty(): boolean {
    return this.count === 0;
  }

  print() {
    this.queue1.print();
    this.queue2.print();
  }

  get length() {
    return this.count;
  }
}
