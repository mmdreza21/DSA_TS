export class Heap {
  private heap: Array<number>;
  counter: number = 0;
  constructor() {
    this.heap = new Array<number>();
  }

  public insert(value: number) {
    this.heap[this.counter++] = value;

    if (this.counter === 1) return;

    let currentIndex = this.counter;

    while (this.heap[currentIndex] < this.getParent(currentIndex)) {
      currentIndex = this.bubbleUp(currentIndex);
    }
  }

  private bubbleUp(index: number) {
    const parentIndex = this.getParent(index);
    const parent = this.heap[parentIndex];
    this.heap[parentIndex] = this.heap[index];
    this.heap[index] = parent;
    console.log(parent);

    return parentIndex;
  }
  private bubbleDown() {
    console.log("this.bubbleDown");
  }

  private getParent(index: number) {
    console.log(this.heap[(index - 1) / 2], this.heap[index]);

    return this.heap[(index - 1) / 2];
  }

  *[Symbol.iterator](): IterableIterator<number> {
    for (let i = 0; i < this.counter; i++) {
      yield this.heap[i];
    }
  }
}
