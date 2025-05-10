class AVLNode {
  public value: number;
  public leftChild: AVLNode | null = null;
  public rightChild: AVLNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class AVLTree {
  private root: AVLNode | null = null;

  public insert(value: number, root?: AVLNode | null) {
    const node = new AVLNode(value);
    const current = root === undefined ? this.root : root;

    if (!this.root) {
      this.root = node;
      return;
    }
    if (current === null) return;

    if (value < current.value) {
      if (!current.leftChild) {
        current.leftChild = node;
        return;
      }
      this.insert(value, current.leftChild);
    } else {
      if (!current.rightChild) {
        current.rightChild = node;
        return;
      }
      this.insert(value, current.rightChild);
    }
  }

  *[Symbol.iterator](): IterableIterator<{
    value: number;
    left: number | null;
    right: number | null;
  }> {
    const queue: Array<AVLNode | null> = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node) {
        yield {
          value: node.value,
          left: node.leftChild?.value ?? null,
          right: node.rightChild?.value ?? null,
        };

        queue.push(node.leftChild);
        queue.push(node.rightChild);
      }
    }
  }
}
