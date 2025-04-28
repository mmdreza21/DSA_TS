class TreeNode {
  public value: number;
  public leftChild: TreeNode | null = null;
  public rightChild: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class BinaryTree {
  private root: TreeNode | null;

  constructor(rootVal: number) {
    this.root = new TreeNode(rootVal);
  }

  private FindNode(value: number) {
    let current = this.root;
    while (current) {}
  }

  public insert(value: number): void {
    let current = this.root;
    while (current) {
      if (current.value < value) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }
    current = new TreeNode(value);
  }

  public find(value: number): boolean {
    return false;
  }

  //   *[Symbol.iterator](): IterableIterator<TreeNode | null> {
  //     let current = this.root;

  //     while (current) {
  //       yield current.leftChild;
  //       yield current.rightChild;
  //       current = current.leftChild;
  //     }
  //   }
}
