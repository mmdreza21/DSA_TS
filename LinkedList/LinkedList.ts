class ListNode {
  public value: number;
  public next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class LinkedList {
  private first: ListNode | null = null;
  private last: ListNode | null = null;
  private size: number = 0;

  private get isEmpty(): boolean {
    return !this.first || !this.last;
  }
  /**
   * addLast
   * @param value
   */
  public addLast(value: number) {
    const node = new ListNode(value);
    if (this.isEmpty) this.last = this.first = node;
    else {
      this.last!.next = node;
      this.last = node;
    }
    this.size++;
  }

  /**
   * addFirst
   * @param value:number
   */
  public addFirst(value: number) {
    const node = new ListNode(value);
    if (this.isEmpty) this.last = this.first = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }

  /**
   * deleteFirst: delete the first item in the linkedList
   */
  public deleteFirst(): void | null {
    if (this.isEmpty) throw new Error("linkedList is empty!");
    if (this.first === this.last) this.first = this.last = null;
    else {
      const second = this.first!.next;
      this.first!.next = null;
      this.first = second;
    }
    this.size--;
  }

  /**
   *  delete the last item in the linkedList
   */
  public deleteLast() {
    if (this.isEmpty) throw new Error("linkedList is empty!");

    if (this.first === this.last) this.first = this.last = null;
    else {
      const prev = this.getPrevious(this.last!);
      this.last = prev;
      prev!.next = null;
    }
    this.size--;
  }

  /**
   * indexOf the givin value
   * @param value:number
   */
  public indexOf(value: number): number {
    if (this.isEmpty) throw new Error("linkedList is empty!");
    let node = this.first;
    let counter = 0;
    while (node) {
      if (node.value === value) return counter;
      node = node?.next;
      counter++;
    }

    return -1;
  }

  private getPrevious(node: ListNode) {
    let current = this.first;
    if (current === node) return null;
    while (current?.next) {
      if (current.next === node) return current;
      current = current.next;
    }
    return null;
  }

  /**
 * contain
  @param value:number
*/
  public contain(value: number): boolean {
    return this.indexOf(value) !== -1;
  }

  get length() {
    return this.size;
  }

  /**
   * convertToArray
   */
  public toArray() {
    let current = this.first;
    const arr = new Array();
    let index = 0;
    while (current !== null) {
      arr[index++] = current.value;
      current = current!.next;
    }
    return arr;
  }
  /**
   * reverse
   */
  public reverse(): void {
    if (this.isEmpty) return;
    let current = this.first;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
    this.last = this.first;
    this.first = prev;
  }
  // mosh' solution --- mine is better
  // let current = this.first?.next;
  // let prev = this.first;

  // while (current) {
  //   const next = current.next;
  //   current.next = prev;

  //   prev = current;
  //   current = next;
  // }
  // this.last = this.first;
  // this.last!.next = null;
  // this.last = this.first;
  // this.first = prev;
  /**
   * findNode
   */
  public getKThFromEnd(n: number) {
    if (n <= 0 || n > this.size) throw new Error("Invalid value for 'n'");
    if (this.isEmpty) throw new Error("IllegalStateException");
    if (n === this.size) return this.first!.value;

    let current = this.first!.next;
    let distance = n - 1;
    while (distance--) current = current!.next;
    // if we don't know the size of our list then in this while
    //  if(!current) throw new Error("Invalid value for 'n'");

    let prev = this.first;
    while (current) {
      prev = prev!.next;
      current = current.next;
    }
    return prev?.value;
  }
  public printMiddle() {
    if (this.isEmpty) throw new Error("IllegalStateException");
    let current = this.first?.next;
    let prev = this.first;
    while (current) {
      if (!current.next) return [prev?.value, prev?.next?.value];
      current = current.next.next;
      prev = prev!.next;
    }
    return prev?.value;
  }

  /**
   * LinkedList.hasLoop()
   */
  public hasLoop(): boolean {
    if (this.isEmpty) throw new Error("IllegalStateException");
    let fast = this.first?.next;
    let slow = this.first;
    while (fast && fast!.next) {
      if (fast === slow) return true;
      fast = fast!.next!.next;
      slow = slow!.next;
    }
    return false;
  }

  /**
   * createLoop
   */
  public createLoop() {
    if (this.isEmpty) throw new Error("IllegalStateException");
    if (!this.first?.next) throw new Error("IllegalStateException");

    this.last!.next = this.first;
  }

  public createLoopToK(k: number): void {
    if (this.isEmpty) throw new Error("List is empty");
    if (k < 0 || k >= this.size) throw new Error("Invalid loop position");

    let loopStart = this.first;
    for (let i = 0; i < k; i++) {
      loopStart = loopStart!.next;
    }

    this.last!.next = loopStart;
  }
}
