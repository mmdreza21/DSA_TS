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

  twoSum(nums: number[], target: number): number[] | null {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement)!, i];
      }
      numMap.set(nums[i], i);
    }

    return null; // or throw error if pair must exist
  }
}
