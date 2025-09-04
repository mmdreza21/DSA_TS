import { Heap } from "./Heap.ts";

export class MaxHeap {
  // items: number[];

  // constructor(items: number[]) {
  //   this.items = items;
  // }

  public static heapify(array: Array<number>) {
    const heapify = (array: Array<number>, index: number) => {
      let largeIndex = index;

      const leftChild = index * 2 + 1;
      if (leftChild < array.length && array[index] > array[leftChild])
        largeIndex = leftChild;
      const rightChild = index * 2 + 2;
      if (rightChild < array.length && array[index] > array[rightChild])
        largeIndex = rightChild;

      if (largeIndex === index) return;

      this.swap(index, largeIndex, array);
      heapify(array, largeIndex);
    };

    const largestParent = array.length / 2 - 1;
    for (let i = largestParent; i > 0; i--) {
      heapify(array, i);
    }
  }

  private static swap(first: number, second: number, array: number[]) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }

  public static kthMaxNode(array: number[], k: number) {
    const heap = new Heap();
    for (const i of array) {
      heap.insert(i);
    }

    for (let i = 0; i < k - 1; i++) {
      heap.remove();
    }

    return heap.max();
  }

  public static isMaxHeap(array: number[]) {
    const lastParentIndex = array.length / 2 - 1;
    let isMaxHeap = false;
    const checkMaxHeap = (array: number[], index: number) => {
      let largeIndex = index;

      const leftChild = index * 2 + 1;
      if (leftChild < array.length && array[leftChild] > array[index])
        return false;

      const rightChild = index * 2 + 2;
      if (rightChild < array.length && array[rightChild] > array[index])
        return false;

      return true;
    };

    for (let i = lastParentIndex; i > 0; i--) {
      checkMaxHeap(array, i);
    }

    return isMaxHeap;
  }

  public static isMinHeap(array: Array<number>) {
    let minHeap: boolean = false;
    const isMinHeap = (array: number[], index: number) => {};

    return minHeap;
  }
}
