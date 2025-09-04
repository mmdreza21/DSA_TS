export class Sort {
  public BobbleSort(array: Array<number>) {
    let isSorted: boolean;
    for (let i = 0; i < array.length; i++) {
      isSorted = true;
      for (let j = 1; j < array.length - i; j++) {
        if (array[j] < array[j - 1]) {
          this.swap(array, j, j - 1);
          isSorted = false;
        }
        isSorted = true;
      }
    }

    return array;
  }

  public selectionSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      let minIndex = this.findMinIndex(array, i);
      this.swap(array, minIndex, i);
    }
    return array;
  }

  private findMinIndex(array: number[], i: number) {
    let minIndex: number = i;
    for (let j = i; j < array.length; j++)
      if (array[j] < array[minIndex]) minIndex = j;
    return minIndex;
  }

  private swap(arr: number[], i1: number, i2: number) {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }
}
