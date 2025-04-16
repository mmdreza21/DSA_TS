export class Stack {
  private array: number[];
  private size: number = 0;
  private maxSize: number;
  constructor(size: number) {
    if (size < 0) throw new Error("size can't be 0");
    this.maxSize = size;
    this.array = new Array<number>(size);
  }
  get length() {
    return this.size;
  }
  get arr() {
    return this.array;
  }

  /**
   * push
   */
  public push(item: number) {
    if (this.size >= this.maxSize)
      throw new Error("stack overFlow -> https://stackoverflow.com/");
    this.array[this.size] = item;
    this.size++;
  }

  /**
   * pop
   */
  public pop(): number | undefined {
    if (this.size === 0) return undefined;

    // this.array = this.array.slice(0, -1);
    // this.array.splice(-1, 1);

    //the best way seems to be is pop()
    return this.arr.pop();
  }

  /**
   * peek
   */
  public peek(): number | undefined {
    if (this.size === 0) return undefined;
    return this.array.at(-1);
  }

  /**
   * isEmpty
   */
  public isEmpty() {
    return !this.size;
  }
}
const stack = new Stack(3);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack.arr);
