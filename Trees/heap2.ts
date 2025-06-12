class Heap2 {
  private items: Array<number>;
  size: number = 0;
  capacity: number = 10;
  constructor(capacity: number = 10) {
    this.items = new Array<number>(capacity);
    this.capacity = capacity;
  }

  insert(value: number): void {
    if (this.items.length >= this.capacity) throw new Error("Heap overflow");

    this.items[this.size++] = value;

    this.bubbleUp();
  }

  remove(): number | undefined {
    if (this.isEmpty()) return undefined;

    const root = this.items[0];
    this.items[0] = this.items[--this.size];

    this.bubbleDown();

    return root;
  }

  peek(): number | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }

  isEmpty(): boolean {
    return !this.size;
  }

  private bubbleUp() {
    let index = this.size - 1;
    while (
      index < this.size &&
      this.items[index] < this.items[this.parent(index)]
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private bubbleDown() {
    let index = 0;

    while (
      this.size > index &&
      this.items[index] < this.items[this.largerChildIndex(index)]
    ) {
      const largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  private largerChildIndex(index: number): number {
    if (!this.hasLeftChild(index)) return index;
    if (!this.hasRightChild(index)) return this.leftChild(index);

    return this.items[this.leftChild(index)] >
      this.items[this.rightChild(index)]
      ? this.leftChild(index)
      : this.rightChild(index);
  }

  private isValidParent(index: number): boolean {
    if (!this.hasLeftChild(index)) return true;

    let isValid = this.items[index] > this.items[this.leftChild(index)];
    if (this.hasRightChild(index))
      isValid =
        isValid && this.items[index] > this.items[this.rightChild(index)];

    return isValid;
  }

  private hasLeftChild(index: number): boolean {
    return this.items[this.leftChild(index)] < this.size;
  }
  private hasRightChild(index: number): boolean {
    return this.items[this.rightChild(index)] < this.size;
  }

  private leftChild(index: number) {
    return index * 2 + 1;
  }
  private rightChild(index: number) {
    return index * 2 + 2;
  }

  private parent(index: number): number {
    return index / 2 - 1;
  }

  private swap(first: number, second: number) {
    const tmp = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = tmp;
  }
}
