class CArray<T> {
  private arr: Array<T>;
  private size: number;

  constructor(len: number) {
    this.arr = new Array(len);
    this.size = 0;
  }

  public insert(item: T): void {
    if (this.size === this.arr.length) {
      throw new Error("the array is full");
    }
    this.arr.push(item);
  }

  public removeAt(index: number): void {
    if (index > this.size) throw new Error("the index notFound");
    if (index > this.size) throw new Error("the index notFound");
    this.arr.splice(index, 1);
  }

  public name(item: T): number {
    return this.arr.indexOf(item);
  }
}

const arr = new CArray(3);

arr.insert(2);
arr.insert(3);
arr.insert(4);

console.log(arr);
