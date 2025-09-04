export class DualStack {
  private readonly stack1: number[];
  private readonly stack2: number[];
  private size1: number = 0;
  private size2: number = 0;
  private readonly capacity: number;

  constructor(totalCapacity: number) {
    if (totalCapacity <= 0) throw new Error("Capacity must be positive");
    if (totalCapacity % 2 !== 0)
      console.warn("Odd capacity may lead to uneven stacks");

    this.capacity = Math.floor(totalCapacity / 2);
    this.stack1 = new Array(this.capacity);
    this.stack2 = new Array(this.capacity);
  }

  // Stack 1 operations
  public pushFirst(item: number): void {
    if (this.isFirstFull()) throw new Error("First stack is full");
    this.stack1[this.size1++] = item;
  }

  public popFirst(): number | undefined {
    if (this.isFirstEmpty()) return undefined;
    const item = this.stack1[--this.size1];
    this.stack1[this.size1] = undefined!;
    return item;
  }

  // Stack 2 operations
  public pushSecond(item: number): void {
    if (this.isSecondFull()) throw new Error("Second stack is full");
    this.stack2[this.size2++] = item;
  }

  public popSecond(): number | undefined {
    if (this.isSecondEmpty()) return undefined;
    const item = this.stack2[--this.size2];
    this.stack2[this.size2] = undefined!;
    return item;
  }

  // Common methods
  public isFirstEmpty(): boolean {
    return this.size1 === 0;
  }
  public isSecondEmpty(): boolean {
    return this.size2 === 0;
  }
  public isFirstFull(): boolean {
    return this.size1 === this.capacity;
  }
  public isSecondFull(): boolean {
    return this.size2 === this.capacity;
  }

  // Getters
  public get firstStackContents(): number[] {
    return this.stack1.slice(0, this.size1);
  }
  public get secondStackContents(): number[] {
    return this.stack2.slice(0, this.size2);
  }
  public get firstStackSize(): number {
    return this.size1;
  }
  public get secondStackSize(): number {
    return this.size2;
  }
}
