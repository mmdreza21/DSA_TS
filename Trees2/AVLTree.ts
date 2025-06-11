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
    const insert = (value: number, root: AVLNode | null): AVLNode => {
      if (root === null) return new AVLNode(value);
      if (value < root?.value) insert(value, root.leftChild);
      else insert(value, root.rightChild);

      this.setHeight(root);
      return root;
    };

    this.root = insert(value, this.root);
  }

  private setHeight(root: AVLNode): void {
    root.height = Math.max(
      this.height(root.leftChild),
      this.height(root.rightChild)
    );
  }

  private height(node: AVLNode | null): number {
    return node?.height ?? -1;
  }

  private balance(root: AVLNode): AVLNode {
    if (this.isLeftHeavy(root)) {
    } else {
    }
  }

  private LeftRotate(root: AVLNode | null) {
    if (!root || !root.rightChild) throw new Error("give me the root!");

    const newRoot: AVLNode | null = root.leftChild;

    newRoot.rightChild = root;
  }

  //   private rightRotate(root: AVLNode | null) {

  //   }

  private balanceFactor(node: AVLNode): number {
    return this.height(node.leftChild) - this.height(node.rightChild);
  }

  private isLeftHeavy(node: AVLNode): boolean {
    return this.balanceFactor(node) > 1;
  }

  private isRightHeavy(node: AVLNode): boolean {
    return this.balanceFactor(node) < 1;
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
