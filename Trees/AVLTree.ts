class AVLNode {
  public value: number;
  public leftChild: AVLNode | null = null;
  public rightChild: AVLNode | null = null;
  public height: number = 0;

  constructor(value: number) {
    this.value = value;
  }
}

export class AVLTree {
  private root: AVLNode | null = null;

  public insert(value: number) {
    this.root = this.add(value, this.root);
  }

  private add(value: number, root: AVLNode | null): AVLNode {
    if (root === null) return new AVLNode(value);

    if (value < root!.value) root.leftChild = this.add(value, root!.leftChild);
    else root.rightChild = this.add(value, root!.rightChild);

    root.height =
      Math.max(root.leftChild?.height ?? 0, root.rightChild?.height ?? 0) + 1;

    return root;
  }

  *[Symbol.iterator](): IterableIterator<{
    value: number;
    left: number | null;
    right: number | null;
    height: number | 0;
  }> {
    const queue: Array<AVLNode | null> = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node) {
        yield {
          value: node.value,
          left: node.leftChild?.value ?? null,
          right: node.rightChild?.value ?? null,
          height: node.height ?? 0,
        };

        queue.push(node.leftChild);
        queue.push(node.rightChild);
      }
    }
  }
}
