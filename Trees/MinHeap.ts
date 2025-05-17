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
    return (index - 1) / 2;
  }
}
