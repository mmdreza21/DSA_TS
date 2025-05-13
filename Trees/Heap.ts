export class Heap {
  private heap: Array<number>;
  counter: number = 0;
  capacity: number = 10;
  constructor(capacity: number = 10) {
    this.heap = new Array<number>(capacity);
    this.capacity = capacity;
  }

  public insert(value: number) {
    if (this.isFull()) {
      throw new Error("Heap is full");
    }

    this.heap[this.counter++] = value;

    this.bubbleUp();
  }

  public remove() {
    this.swap(0, this.counter - 1);
    this.heap[this.counter--] = 0;
    this.bubbleDown();
  }

  public isFull() {
    return this.counter === this.capacity;
  }

  private bubbleUp() {
    let index = this.counter - 1;
    while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }
  private bubbleDown() {
    let index = 0;
    this.heap[this.left(index)] > this.heap[this.right(index)]
      ? (index = this.heap[this.left(index)])
      : (index = this.heap[this.right(index)]);
    let child = this.heap[index];

    while (this.heap[index] > this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private left(index: number): number {
    return index * 2 + 1;
  }
  private right(index: number): number {
    return index * 2 + 2;
  }

  private swap(first: number, second: number) {
    const temp = this.heap[first];
    this.heap[first] = this.heap[second];
    this.heap[second] = temp;
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  *[Symbol.iterator](): IterableIterator<number> {
    for (let i = 0; i < this.counter; i++) {
      yield this.heap[i];
    }
  }
}
