export class Stack<T> {
  private stack: T[];
  private size: number = 0;
  private capacity: number;

  constructor(size: number) {
    if (size < 0) throw new Error("Size must be positive");
    this.capacity = size;
    this.stack = new Array<T>(size);
  }
  get length() {
    return this.size;
  }
  get stackContent() {
    return this.stack.slice(0, this.size);
  }

  public push(item: T) {
    if (this.size >= this.capacity)
      throw new Error("stack overFlow -> https://stackoverflow.com/");
    this.stack[this.size++] = item;
  }

  public pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.stack[--this.size];
    this.stack[this.size] = undefined!; // Optional cleanup
    return value;
  }

  public peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.stack[this.size - 1];
    // return this.stack.at(-1);
  }

  public isEmpty(): boolean {
    // this.size === 0 is explicit - clearly shows we're checking for zero
    // !this.size is implicit - relies on JavaScript's truthy/falsy coercion
    return this.size === 0;
  }

  public isFull(): boolean {
    return this.size === this.capacity;
  }

  /**
   * @returns min member of the stack
   */
  public min(): number {
    if (typeof this.stack[0] !== "number")
      throw new Error("This future is for numeric stack!");
    if (this.isEmpty()) throw new Error("Stack is empty");
    let min = this.stack[0] as number;
    for (const e of this.stack) {
      if ((e as number) < min) min = e as number;
    }
    return min;
  }
}
