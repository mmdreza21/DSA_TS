import { Heap } from "./Heap.ts";

export class MaxHeap {
  // items: number[];

  // constructor(items: number[]) {
  //   this.items = items;
  // }

  public static heapify(array: Array<number>) {
    const heapifyRecursive = (array: number[], index: number) => {
      let largerIndex = index;

      let leftIndex = index * 2 + 1;
      if (leftIndex < array.length && array[leftIndex] > array[largerIndex])
        largerIndex = leftIndex;
      let rightIndex = index * 2 + 2;
      if (rightIndex < array.length && array[rightIndex] > array[largerIndex])
        largerIndex = rightIndex;

      if (index === largerIndex) return;

      this.swap(index, largerIndex, array);
      heapifyRecursive(array, largerIndex);
    };

    const lastParentIndex = array.length / 2 - 1;
    for (let i = lastParentIndex; i >= 0; i--) {
      heapifyRecursive(array, i);
    }
  }

  private static swap(first: number, second: number, array: number[]) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }

  public static kthMaxNode(array: number[], k: number) {
    if (k < 1 || k > array.length) throw new Error("IllegalArgumentExaction");

    const heap = new Heap();
    for (const n of array) heap.insert(n);

    for (let i = 0; i < k - 1; i++) heap.remove();

    return heap.max();
  }

  public static isMaxHeap(array: number[]) {
    const lastParentIndex = array.length / 2 - 1;
    let isMaxHeap = false;
    const checkMaxHeap = (array: number[], index: number) => {
      let largerIndex = index;

      let leftIndex = index * 2 + 1;
      if (leftIndex < array.length && array[leftIndex] > array[largerIndex])
        return false;
      let rightIndex = index * 2 + 2;
      if (rightIndex < array.length && array[rightIndex] > array[largerIndex])
        return false;

      return true;
    };
    for (let i = array.length / 2 - 1; i >= 0; i--) {
      isMaxHeap = checkMaxHeap(array, i);
    }
    return isMaxHeap;
  }
}
