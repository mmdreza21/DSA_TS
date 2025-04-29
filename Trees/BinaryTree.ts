class TreeNode {
  public value: number;
  public leftChild: TreeNode | null = null;
  public rightChild: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class BinaryTree {
  private root: TreeNode | null = null;

  // constructor(rootVal: number) {
  //   this.root = new TreeNode(rootVal);
  // }

  private FindNode(value: number) {
    let current = this.root;
    while (current) {
      if (current.value > value) {
        if (!current.leftChild) {
          return current;
        }
        current = current.leftChild;
      } else {
        if (!current.rightChild) {
          return current;
        }
        current = current.rightChild;
      }
    }
  }

  public insert(value: number): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      let left = current.leftChild;
      let right = current.rightChild;

      if (current.value > value) {
        if (!left) {
          current.leftChild = newNode;
          break;
        }
        current = left;
      } else {
        if (!right) {
          current.rightChild = newNode;
          break;
        }
        current = right;
      }
    }
  }

  public find(value: number): boolean {
    let current = this.root;
    while (current) {
      if (current.value > value) {
        if (current.leftChild?.value === value) {
          return true;
        }
        current = current.leftChild;
      } else {
        if (current.rightChild?.value === value) {
          return true;
        }
        current = current.rightChild;
      }
    }
    return false;
  }

  *[Symbol.iterator](): IterableIterator<{
    value: number;
    left: number | null;
    right: number | null;
  }> {
    const queue: Array<TreeNode | null> = [this.root];

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
