class CArray<T> {
  public arr: Array<T>;
  private size: number;

  constructor(len: number) {
    this.arr = new Array<T>(len);
    this.size = 0;
  }

  public insert(item: T): void {
    if (this.size < this.arr.length) {
      this.arr[this.size] = item;
      this.size++;
    } else if (this.size === this.arr.length) {
      const newArr = new Array<T>(this.size * 2);
      //When the array is full, you double its size (good start!).
      //But the current method may not copy elements efficiently (spread operator skips empty slots).
      //Try manually copying elements in a loop instead.
      for (let index = 0; index < this.size; index++) {
        newArr[index] = this.arr[index];
      }
      newArr[this.size] = item;
      this.arr = newArr;
      this.size++;
    }
  }

  public removeAt(index: number): void {
    if (index > this.size) throw new Error("the index notFound");
    if (index < this.size) throw new Error("the index notFound");
    this.arr.splice(index, 1);
  }

  public getIndex(item: T): number {
    return this.arr.indexOf(item);
  }
}

const arr = new CArray(3);
arr.insert(1);
arr.insert(2);
arr.insert(3);
arr.insert(4);
arr.insert(5);
arr.insert(6);
arr.insert(7);

console.log(arr);
