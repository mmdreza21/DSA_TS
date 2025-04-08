class CArray<T> {
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

  public max(): string | number {
    if (typeof this.arr[0] === "string") {
      let max: string = this.arr[0] as string;
      for (let i = 0; i < this.size; i++)
        if (max.length < (this.arr[i] as string).length)
          max = this.arr[i] as string;

      return max;
    } else if (typeof this.arr[0] === "number") {
      let max: number = this.arr[0] as number;

      for (let i = 0; i < this.size; i++)
        if (max < (this.arr[i] as number)) max = this.arr[i] as number;

      return max;
    }

    throw new Error("you cant get max of this types");
  }

  /**
   * @param An Arr
   * @returns  the common items in this array and another array
   */
  public intersect(arr: T[]): T[] {
    const common: T[] = [];
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (this.arr[i] === arr[j]) common.push(this.arr[i]);
      }
    }
    return common;
  }

  public reverse(): Array<T> {
    const arr = [];

    for (let i = this.size - 1; i >= 0; i--) {
      const element = this.arr[i];
      arr.push(element);
    }

    return arr;
  }

  public insertAt(item: T, index: number) {
    for (let i = 0; i < this.size; i++) {
      if (i === index) this.arr[i] = item;
    }
  }

  public print() {
    for (let index = 0; index < this.size; index++) {
      console.log(this.arr[index]);
    }
  }
}

const arr = new CArray<number>(3);
arr.insert(1);
arr.insert(2);
arr.insert(3);
arr.insert(4);
arr.insert(5);
arr.insert(6);
arr.insert(7);

// arr.removeAt(2);

arr.insertAt(87, 1);
arr.print();
console.log(arr.reverse());
