import { MinHeap } from "./MinHeap.ts";

export class PriorityQueueWithHeap {
  private heap: MinHeap = new MinHeap();

  public enQueue(key: number, value: string) {
    this.heap.insert(key, value);
  }

  public deQueue() {
    return this.heap.remove();
  }

  public isEmpty() {
    return this.heap.isEmpty();
  }
}
