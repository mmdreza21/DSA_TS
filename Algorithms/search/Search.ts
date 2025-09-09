export class Search {
  public linearSearch(array: Array<number>, target: number) {
    for (const item of array) if (item === target) return item;

    return -1;
  }

  public binarySearchR(array: number[], target: number) {
    const binarySearch = (
      array: number[],
      target: number,
      left: number,
      right: number
    ): number => {
      const mid = this.findMiddle(left, right);

      if (right < left) return -1;

      if (array[mid] === target) return mid;
      if (target < array[mid])
        return binarySearch(array, target, left, mid - 1);

      return binarySearch(array, target, mid + 1, right);
    };

    return binarySearch(array, target, 0, array.length - 1);
  }

  public binarySearch(array: number[], target: number) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = this.findMiddle(left, right);

      if (array[mid] === target) return mid;
      if (target < array[mid]) right = mid - 1;
      else left = mid + 1;
    }
    return -1;
  }
  private findMiddle(left: number, right: number) {
    return Math.floor((left + right) / 2);
  }

  public ternarySearch(array: number[], target: number) {
    const ternarySearch = (
      array: number[],
      target: number,
      left: number,
      right: number
    ) => {
      if (left > right) return -1;

      let partitionSize = Math.floor((right - left) / 3);
      let mid1 = left + partitionSize;
      let mid2 = right - partitionSize;
      if (array[mid1] === target) return mid1;
      if (array[mid2] === target) return mid2;

      if (target < array[mid1])
        return ternarySearch(array, target, left, mid1 - 1);

      if (target > array[mid1])
        return ternarySearch(array, target, mid2 + 1, right);

      return ternarySearch(array, target, mid1 + 1, mid2 - 1);
    };
    return ternarySearch(array, target, 0, array.length - 1);
  }

  public jumpSearch(array: number[], target: number) {
    const blockSize = Math.floor(Math.sqrt(array.length));
    let start: number = 0;
    let next: number = blockSize;
    console.log(next);

    while (start < array.length && array[next - 1] < target) {
      start = next;
      next += blockSize;
      if (next > array.length) next = array.length;
    }
    for (let i = start; i < next; i++) if (array[i] == target) return i;

    return -1;
  }
}
