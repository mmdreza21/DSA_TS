class ListNode {
  public value: number;
  public next: ListNode | undefined;

  constructor(value: number, next?: ListNode) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  private first: ListNode | undefined = undefined;
  private last: ListNode | undefined;

  private get isEmpty(): boolean {
    return !this.first || !this.last;
  }

  /**
   * addLast
   * @param value
   */
  public addLast(value: number) {
    const node = new ListNode(value);
    if (this.isEmpty) this.first = node;
    if (this.last) this.last.next = node;
    this.last = node;
  }

  /**
   * addFirst
   * @param value:number
   */
  public addFirst(value: number) {
    const node = new ListNode(value);
    if (this.isEmpty) {
      this.last = node;
      this.first = node;
      return;
    }
    node.next = this.first;
    this.first = node;
  }

  /**
   * deleteFirst: delete the first item in the linkedList
   */
  public deleteFirst() {
    if (this.isEmpty) throw new Error("linkedList is empty!");
    if (!this.first!.next) {
      this.first = undefined;
      this.last = undefined;
      return;
    }
    const first = structuredClone(this.first);
    this.first!.next = undefined;
    this.first = first?.next;
  }

  /**
   * indexOf the givin value
   * @param value:number
   */
  public indexOf(value: number): number {
    if (this.isEmpty) throw new Error("linkedList is empty!");
    let listVal = this.first?.value;
    let node = this.first;
    let counter = 0;
    while (listVal !== value && node?.next) {
      node = node?.next;
      listVal = node?.value;

      counter++;
    }

    return listVal !== value ? -1 : counter;
  }

  private getPrevious() {
    let node = this.first;
    while (node?.next?.next) {
      node = node?.next;
      console.log("mmd");
    }
  }

  /**
   *  delete the last item in the linkedList
   */
  public deleteLast() {
    if (this.isEmpty) throw new Error("linkedList is empty!");
    let last = structuredClone(this.last);
    let node = this.first;

    while (node?.next?.next) {
      node = node?.next;
      console.log("mmd");
    }
    this.last = node;
    node!.next = undefined;
  }

  //contain
}

const linkedList = new LinkedList();
linkedList.addFirst(2);
linkedList.addFirst(1);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);

linkedList.deleteLast();

console.log(linkedList);
// console.log(linkedList.indexOf(2));
