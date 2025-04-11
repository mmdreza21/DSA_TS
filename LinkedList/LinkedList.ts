class ListNode {
  public value: number;
  public next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
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
  public reverse() {
    let current = this.first;
    let prev = null;
    while (current) {}
  }
}

const mmd = {
  value: 1,
  next: { value: 2, next: { value: 3, next: { value: 4, next: null } } },
};

const linkedList = new LinkedList();
linkedList.addFirst(2);
linkedList.addFirst(1);
linkedList.addLast(3);

// linkedList.deleteLast();
// linkedList.deleteFirst();

// console.log(linkedList.contain(1));
// console.log(linkedList.indexOf(0));
// linkedList.reverse();
console.log(linkedList);
console.log(linkedList.length);
console.log(linkedList.toArray());
