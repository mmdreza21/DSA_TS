class HeapNode {
  key: number;
  value: string;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}

export class MinHeap {
  private items: Array<HeapNode>;
  size: number = 0;
  capacity: number = 10;
  constructor(capacity: number = 10) {
    this.items = new Array<HeapNode>(capacity);
    this.capacity = capacity;
  }

  public insert(key: number, value: string) {
    const node = new HeapNode(key, value);

    this.items[this.size++] = node;

    this.bubbleUp();
  }

  private swap(first: number, next: number) {
    const temp = this.items[first];
    this.items[first] = this.items[next];
    this.items[next] = temp;
  }

  public remove() {
    if (this.isEmpty()) throw new Error("no");
    // console.log(this.items[--this.size]);
    const root = this.items[0];
    this.items[0] = this.items[--this.size];

    this.bubbleDown();
    return root;
  }

  public isEmpty() {
    return this.size === 0;
  }
  private bubbleDown() {
    let index = 0;

    while (index <= this.size && !this.isValidParent(index)) {
      const smallestNode = this.smallestNode(index);
      this.swap(index, smallestNode);
      index = smallestNode;
    }
  }

  private smallestNode(index: number): number {
    if (!this.hasLeftChild(index)) return index;
    if (!this.hasRightChild(index)) return index;

    return this.leftChild(index).key < this.rightChild(index).key
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
    let isValid = this.items[index].key <= this.leftChild(index).key;

    if (this.hasRightChild(index)) {
      isValid = isValid && this.items[index] <= this.rightChild(index);
    }
    return isValid;
  }

  private leftChild(index: number): HeapNode {
    return this.items[this.leftIndex(index)];
  }

  private rightChild(index: number): HeapNode {
    return this.items[this.rightIndex(index)];
  }

  //
  private leftIndex(index: number): number {
    return index * 2 + 1;
  }
  private rightIndex(index: number): number {
    return index * 2 + 2;
  }

  private bubbleUp() {
    let index = this.size - 1;
    while (
      index > 0 &&
      this.items[index].key < this.items[this.parent(index)].key
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  *[Symbol.iterator](): IterableIterator<HeapNode> {
    for (let i = 0; i < this.size; i++) {
      yield this.items[i];
    }
  }
}
