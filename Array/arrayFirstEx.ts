export class CArray<T extends string | number> {
  private arr: Array<T>;
  private size: number;

  constructor(len: number) {
    this.arr = new Array<T>(len);
    this.size = 0;
  }

  public insert(item: T): void {
    if (this.size === this.arr.length) {
      const newArr = new Array<T>(this.size * 2);

      for (let index = 0; index < this.size; index++)
        newArr[index] = this.arr[index];

      newArr[this.size] = item;
      this.arr = newArr;
    }
    this.arr[this.size++] = item;
  }

  public removeAt(index: number): void {
    if (index >= this.size || index < 0) throw new Error("the index notFound");
    // this.arr.splice(index, 1);

    for (let i = index; i < this.size; i++) {
      this.arr[i] = this.arr[i + 1];
    }

    this.size--;
  }

  public indexOf(item: T): number {
    //O(n)
    for (let i = 0; i < this.size; i++) if (this.arr[i] === item) return i;
    return -1;
  }

  /**
   * @returns  the max value in the array
   * @throws Error if the array is empty
   * @throws Error if the array contains non-string/number types
   */
  public max(): string | number {
    if (this.size === 0) {
      throw new Error("Cannot get max from an empty array");
    }

    const first = this.arr[0];
    const type = typeof first;

    if (type === "string") {
      let max: string = first as string; // type assertion
      for (let i = 1; i < this.size; i++) {
        const current = this.arr[i];
        if (typeof current === "string" && current.length > max.length) {
          max = current;
        }
      }
      return max;
    }
    if (type === "number") {
      let max = first;
      for (let i = 1; i < this.size; i++) {
        const current = this.arr[i];
        if (max < current) max = current;
      }
      return max;
    }

    throw new Error("Cannot get max of non-string/number types");
  }

  /**
   * @param An Arr
   * @returns  the common items in this array and another array
   */
  public intersect(arr: T[]): T[] {
    const common = new Set<T>(arr);
    const result = this.arr.filter((item) => common.has(item));
    // for (let i = 0; i < this.arr.length; i++) {
    //   for (let j = 0; j < arr.length; j++) {
    //     if (this.arr[i] === arr[j]) common.add(this.arr[i]);
    //   }
    // }
    // const a: T[] = [];
    // common.forEach((item) => {
    //   a.push(item);
    // });
    return result;
  }

  /**
   * Reverses array elements immutably
   * @param deepClone - When true, performs deep copy of elements
   * @returns New array with reversed elements
   */
  public reverse(deepClone: boolean = false): Array<string | number> {
    const result = new Array(this.size);
    for (let i = 0, j = this.size - 1; j >= 0; i++, j--) {
      result[i] = deepClone ? structuredClone(this.arr[j]) : this.arr[j];
    }
    return result;
  }

  public reverse2(): Array<string | number> {
    const result = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
      result[i] = result[this.size - i - 1];
    }
    return result;
  }

  /**
   * Inserts an item at the specified index
   * @param item - The item to insert
   * @param index - The insertion position (0-based)
   * @throws {Error} When index is out of bounds
   */
  public insertAt(item: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error(`Index ${index} out of bounds [0, ${this.size}]`);
    }

    for (let i = this.size; i > index; i--) {
      this.arr[i] = this.arr[i - 1];
    }

    this.arr[index] = item;
    this.size++;
  }

  public print() {
    console.log(this.arr.join(","));
  }
}
