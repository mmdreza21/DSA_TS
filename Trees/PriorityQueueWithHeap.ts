import { Heap } from "./Heap";

export class PriorityQueueWithHeap {
  private heap: Heap = new Heap();

  public enQueue(item: number) {
    this.heap.insert(item);
  }

  public deQueue() {
    return this.heap.remove();
  }

  public isEmpty() {
    return this.heap.isEmpty();
  }
}
