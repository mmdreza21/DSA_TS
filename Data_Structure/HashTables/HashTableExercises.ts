export class HashTableExercises {
  public mostFrequentNum(array: Array<number>): number | undefined {
    const map = new Map<number, number>();

    for (const n of array) {
      if (!map.has(n)) {
        map.set(n, 1);
      } else {
        map.set(n, map.get(n)! + 1);
      }
    }

    let max: [number, number] = [0, 0];

    for (const m of map) {
      if (m[1] >= max[1]) {
        max = m;
      }
    }
    return max[0];
  }

  public mostFrequentWord(str: string): string | undefined {
    if (!str.trim().length) return undefined;
    const map = new Map<string, number>();

    for (const n of str.toLowerCase().split(/\s+/)) {
      map.set(n, (map.get(n) ?? 0) + 1);
    }

    let max: [string, number] = ["", 0];

    for (const m of map) {
      if (m[1] >= max[1]) {
        max = m;
      }
    }
    return max[0];
  }

  public countPairsWithDiff(array: number[], k: number) {
    if (k === 0) throw new Error("k can not be zero!");

    const set = new Set<number>(array);
    let count = 0;

    for (const n of set) {
      //   console.log(n, "+", k, "=", n + k, set.has(n + k));

      if (set.has(n + k)) count++;
    }

    return count;
  }

  /**
   * Given an array of numbers and a target value,
   * find the indices of the two numbers that add up to the target.
   *
   * Example:
   *   Input: nums = [2, 7, 11, 15], target = 9
   *   Output: [0, 1] // because nums[0] + nums[1] === 9
   *
   * @param nums - An array of integers
   * @param target - The target sum to find
   * @returns An array of two indices if a pair is found, otherwise null
   */
  twoSum(nums: number[], target: number): number[] | null {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) return [numMap.get(complement)!, i];

      numMap.set(nums[i], i);
    }

    return null;
  }

  // todo  find dose a string has it reverse in the array like  ['ab', 'cd' , 'ba','ef','gl']

  hasReversePair(arr: string[]) {
    const set = new Set(arr);
    for (const str of arr) {
      const reversed = str.split("").reverse().join("");
      if (set.has(reversed) && reversed !== str) {
        return true;
      }
    }
    return false;
  }
}
