export class Heapify {
  public static heapify() {}

  private static swap(first: number, second: number) {
    const temp = first;
    first = second;
    second = temp;
  }

  private leftChild(index: number): number {
    return this.items[this.leftIndex(index)];
  }

  private rightChild(index: number): number {
    return this.items[this.rightIndex(index)];
  }

  private leftIndex(index: number): number {
    return index * 2 + 1;
  }
  private rightIndex(index: number): number {
    return index * 2 + 2;
  }
}
