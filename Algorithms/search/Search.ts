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
}
