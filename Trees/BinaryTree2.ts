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

  private isLeaf(node: TreeNode | null): boolean {
    return node !== null && node.leftChild === null && node.rightChild === null;
  }

  public insert(value: number): void {
    const node = new TreeNode(value);

    if (this.root === null) {
      this.root = node;
      return;
    }
    let current: TreeNode | null = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {
        if (!current.rightChild) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  public find(value: number): boolean {
    let current: TreeNode | null = this.root;
    while (current) {
      if (current.value === value) return true;
      if (value < current.value) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }
    return false;
  }

  public contain(value: number, root?: TreeNode | null): boolean {
    const current = root === undefined ? this.root : root;

    if (current === null) return false;

    if (current?.value === value) return true;

    return (
      this.contain(value, current?.leftChild) ||
      this.contain(value, current?.rightChild)
    );
  }

  public traversePreOrder(root?: TreeNode | null): void {
    const current = root === undefined ? this.root : root;

    if (current === null) return;

    console.log(current.value);

    this.traversePreOrder(current.leftChild);
    this.traversePreOrder(current.rightChild);
  }

  public traverseInOrder(root?: TreeNode | null): void {
    const current = root === undefined ? this.root : root;

    if (current === null) return;

    this.traverseInOrder(current.leftChild);
    console.log(current.value);
    this.traverseInOrder(current.rightChild);
  }

  public traversePostOrder(root?: TreeNode | null): void {
    const current = root === undefined ? this.root : root;

    if (current === null) return;

    this.traversePostOrder(current.leftChild);
    this.traversePostOrder(current.rightChild);
    console.log(current.value);
  }

  public height(root?: TreeNode | null): number {
    const current = root === undefined ? this.root : root;

    if (current === null) return 0;

    if (this.isLeaf(current)) return 0;

    return (
      1 +
      Math.max(
        this.height(current!.leftChild),
        this.height(current?.rightChild)
      )
    );
  }

  // O(Log n)
  public minForBinarySearchTree() {
    let current = this.root;

    if (this.root === null) return;

    const currentVal = current?.value;

    while (current?.leftChild) {
      current = current.leftChild;
    }
    return current?.value;
  }

  // for just a binary tree O(N)
  public min(root?: TreeNode | null): number {
    const current: TreeNode | null = root === undefined ? this.root : root;

    if (current === null) return Infinity;
    if (this.isLeaf(current)) return current.value;

    return Math.min(this.min(current.leftChild), this.min(current.rightChild));
  }

  public equals(otherTree?: BinaryTree): boolean {
    if (!otherTree) return false;
    return this.equals2(this.root, otherTree.root);
  }
  //pre order traversal
  private equals2(first: TreeNode | null, second: TreeNode | null): boolean {
    return false;
  }

  public isBST() {}

  private validateBstR(root: TreeNode, min: number, max: number) {}

  public swapRoot() {}

  public getNodesAtKDist(distance: number) {}

  private nodeAtKDistance(
    root: TreeNode | null,
    distance: number,
    arr: Array<number>
  ) {}

  public traverseLevelOrder() {}

  public size(root?: TreeNode) {}

  public countLeaves(root?: TreeNode) {}

  public max(root?: TreeNode | null) {}

  private findParent(value: number, root?: TreeNode) {}

  public areSibling(value1: number, value2: number, root?: TreeNode) {}

  //this works for BST

  // public getAncestors(value: number) {
  //
  // }

  // private getAncestorsPr(
  //
  // }
  public getAncestors(value: number) {}

  private getAncestorsPr(
    value: number,
    root: TreeNode | null,
    ancestors: Array<number>
  ) {}

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
