export class Stack {
  private array: number[];
  private size: number = 0;
  private maxSize: number;
  constructor(size: number) {
    if (size < 0) throw new Error("size can't be 0");
    this.maxSize = size;
    this.array = new Array<number>(size);
  }

  /**
   * push
   */
  public push(item: number) {
    if (this.size >= this.maxSize)
      throw new Error("stack overFlow -> https://stackoverflow.com/");
    this.array[this.size - 1] = item;
    this.size++;
  }

  /**
   * pop
   */
  public pop() {}

  /**
   * peek
   */
  public peek() {}

  /**
   * isEmpty
   */
  public isEmpty() {}
}
const stack = new Stack(1);
stack.push(2);

console.log(stack);
