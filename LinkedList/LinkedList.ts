class ListNode {
  public value: number;
  public next: ListNode | undefined;

  constructor(value: number, next?: ListNode) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  private first: ListNode | null = null;
  private last: ListNode | null = null;

  /**
   * addLast
   * @param value
   */
  public addLast(value: number) {
    const node = new ListNode(value);
    if (!this.first) this.first = node;
    if (this.last) this.last.next = node;
    this.last = node;
  }

  //addFirst

/**
 * addFirst
 * @param value
 */
public addFirst() {
    
}

  //deleteFirst
  //deleteLast
  //contain
  // indexOf
}

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
console.log(linkedList);
