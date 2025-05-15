export class Heap {
  private items: Array<number>;
  size: number = 0;
  capacity: number = 10;
  constructor(capacity: number = 10) {
    this.items = new Array<number>(capacity);
    this.capacity = capacity;
  }

  public insert(value: number) {
    if (this.isFull()) {
      throw new Error("Heap is full");
    }

    this.items[this.size++] = value;

    this.bubbleUp();
  }

  public remove(): number {
    if (this.isEmpty()) throw new Error("heap is empty!");

    const root = this.items[0];
    this.items[0] = this.items[--this.size];

    this.bubbleDown();

    return root;
  }

  public isFull() {
    return this.size === this.capacity;
  }
  public isEmpty() {
    return this.size === 0;
  }

  private bubbleUp() {
    let index = this.size - 1;
    while (index > 0 && this.items[index] > this.items[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private bubbleDown() {
    let index = 0;

    while (index <= this.size && !this.isValidParent(index)) {
      const largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  private largerChildIndex(index: number): number {
    if (!this.hasLeftChild(index)) return index;
    if (!this.hasRightChild(index)) return index;

    return this.leftChild(index) > this.rightChild(index)
      ? (index = this.leftIndex(index))
      : (index = this.rightIndex(index));
  }

  private hasLeftChild(index: number) {
    return this.leftIndex(index) <= this.size;
  }
  private hasRightChild(index: number) {
    return this.rightIndex(index) <= this.size;
  }

  private isValidParent(index: number): boolean {
    if (!this.hasLeftChild(index)) return true;
    let isValid = this.items[index] >= this.leftChild(index);

    if (this.hasRightChild(index)) {
      isValid = isValid && this.items[index] >= this.rightChild(index);
    }
    return isValid;
  }

  private leftChild(index: number): number {
    return this.items[this.leftIndex(index)];
  }

  private rightChild(index: number): number {
    return this.items[this.rightIndex(index)];
  }

  //
  private leftIndex(index: number): number {
    return index * 2 + 1;
  }
  private rightIndex(index: number): number {
    return index * 2 + 2;
  }
  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }
  //
  private swap(first: number, second: number) {
    const temp = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = temp;
  }

  *[Symbol.iterator](): IterableIterator<number> {
    for (let i = 0; i < this.size; i++) {
      yield this.items[i];
    }
  }
}
