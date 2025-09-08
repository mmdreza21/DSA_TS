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

  public insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
    }
    return array;
  }

  public mergeSort(arr: number[]): number[] {
    // Base case: if array has 0 or 1 element, it’s already sorted
    if (arr.length <= 1) return arr;

    // Step 1: Split array into 2 halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // first half
    const right = arr.slice(mid); // second half

    // Step 2: Recursively sort both halves
    const sortedLeft = this.mergeSort(left);
    const sortedRight = this.mergeSort(right);

    // Step 3: Merge the sorted halves
    this.merge(sortedLeft, sortedRight, arr);
    return arr;
  }

  private merge(left: number[], right: number[], result: number[]): void {
    let i = 0,
      j = 0,
      k = 0;

    // Compare elements from left and right, pick smaller
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result[k++] = left[i++];
      } else {
        result[k++] = right[j++];
      }
    }

    // Copy remaining elements from left (if any)
    while (i < left.length) {
      result[k++] = left[i++];
    }

    // Copy remaining elements from right (if any)
    while (j < right.length) {
      result[k++] = right[j++];
    }
  }

  public quickSort(array: number[]) {
    const quickSort = (array: number[], start: number, end: number) => {
      if (start >= end) return;

      //partition
      const boundary = this.partition(array, start, end);
      //sort left
      quickSort(array, start, boundary - 1);
      //sort right
      quickSort(array, boundary + 1, end);
    };
    quickSort(array, 0, array.length - 1);
  }
  // The int that we are returning is the index of
  // the pivot after it has moved to its correct position.
  private partition(array: number[], start: number, end: number): number {
    const pivot = array[end];
    let boundary = start - 1;

    for (let i = start; i <= end; i++) {
      if (array[i] <= pivot) this.swap(array, i, ++boundary);
    }
    return boundary;
  }

  public countingSort(array: number[]) {
    const countArr: number[] = new Array(Math.max(...array) + 1).fill(0);

    for (let i = 0; i < array.length; i++) {
      countArr[array[i]]++;
    }
    console.log(countArr);
    let k = 0;
    for (let i = 0; i < countArr.length; i++) {
      if (countArr[i]) {
        for (let count = 0; count < countArr[i]; count++) {
          array[k++] = i;
        }
      }
    }
    return array;
  }

  public bucketSort(array: Array<number>, bucketSize: number) {
    const buckets: number[][] = this.createBucket(array, bucketSize);

    let k = 0;
    buckets.map((e) => e.sort());
    for (const bucket of buckets) {
      bucket.sort();
      for (let j = 0; j < bucket.length; j++) {
        array[k++] = bucket[j];
      }
    }
    return array;
  }

  private createBucket(array: number[], bucketSize: number): number[][] {
    const buckets: number[][] = Array.from({ length: bucketSize }, () => []);

    for (const item of array) {
      buckets[Math.floor(item / bucketSize)].push(item);
    }
    return buckets;
  }

  // This assumes that:
  // All numbers are positive
  // Numbers are distributed from 0 to bucketSize * bucketSize
  // No numbers exceed this range
  // const array = [100, 200, 300];
  // const result = bucketSort(array, 5);
  // Math.floor(100/5) = 20 → tries to access buckets[20]
  // But buckets only has 5 buckets (0-4) → INDEX OUT OF BOUNDS!

  //  Correct Implementation:

  public bucketSort2(array: number[], bucketSize: number): number[] {
    if (array.length === 0) return array;

    // Find actual min and max of the input array
    const min = Math.min(...array);
    const max = Math.max(...array);

    // Calculate proper number of buckets
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

    // Correct bucket index calculation
    for (const num of array) {
      const bucketIndex = Math.floor((num - min) / bucketSize);
      buckets[bucketIndex].push(num);
    }

    // Sort each bucket
    buckets.forEach((bucket) => bucket.sort((a, b) => a - b));

    // Reconstruct sorted array
    let k = 0;
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        array[k++] = buckets[i][j];
      }
    }

    return array;
  }

  private findMinIndex(array: number[], i: number) {
    let minIndex: number = i;
    for (let j = i; j < array.length; j++)
      if (array[j] < array[minIndex]) minIndex = j;
    return minIndex;
  }

  private findMaxIndex(array: number[], i: number) {
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
