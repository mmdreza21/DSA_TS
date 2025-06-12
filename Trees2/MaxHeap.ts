import { Heap } from "./Heap.ts";

export class MaxHeap {
  // items: number[];

  // constructor(items: number[]) {
  //   this.items = items;
  // }

  public static heapify(array: Array<number>) {}

  private static swap(first: number, second: number, array: number[]) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }

  public static kthMaxNode(array: number[], k: number) {}

  public static isMaxHeap(array: number[]) {
    const lastParentIndex = array.length / 2 - 1;
    let isMaxHeap = false;
    const checkMaxHeap = (array: number[], index: number) => {};

    return isMaxHeap;
  }

  public static isMinHeap(array: Array<number>) {
    let minHeap: boolean = false;
    const isMinHeap = (array: number[], index: number) => {};

    return minHeap;
  }
}
