import { AVLTree } from "./AVLTree.ts";

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
    return (
      node !== null && node.rightChild === null && node.rightChild === null
    );
  }

  public insert(value: number): void {
    const addNode = (value: number, node: TreeNode | null): TreeNode => {
      if (node === null) return new TreeNode(value);

      if (value < node.value) {
        node.leftChild = addNode(value, node.leftChild);
      } else {
        node.rightChild = addNode(value, node.rightChild);
      }

      return node;
    };

    this.root = addNode(value, this.root);
  }

  public find(value: number): boolean {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (current.value > value) current = current.leftChild;
      else current = current.rightChild;
    }
    return false;
  }

  public contain(value: number, root: TreeNode | null = this.root): boolean {
    if (root === null) return false;

    if (root.value === value) return true;

    return (
      this.contain(value, root?.leftChild) ||
      this.contain(value, root?.leftChild)
    );
  }

  public traversePreOrder(root: TreeNode | null = this.root): void {
    if (root === null) return;
    console.log(root?.value);
    this.traversePreOrder(root?.leftChild);
    this.traversePreOrder(root?.rightChild);
    // ✅ The function goes back to the parent automatically when the child call finishes.\
    // That’s the magic of recursion — you don’t need to explicitly go back. The call stack does it for you.
  }

  public traverseInOrder(root?: TreeNode | null): void {
    const current = root === undefined ? this.root : root;

    if (current === null) return;
    this.traverseInOrder(current?.leftChild);
    console.log(current?.value);
    this.traverseInOrder(current?.rightChild);
  }

  public traversePostOrder(root: TreeNode | null = this.root): void {
    if (root === null) return;

    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.value);
  }

  public height(root: TreeNode | null = this.root): number {
    //Math.max(height(left),height(left))

    if (root === null) return 0;
    if (this.isLeaf(root)) return -1;

    return (
      Math.max(this.height(root.leftChild), this.height(root.rightChild)) + 1
    );
  }

  // // O(Log n)
  // public minForBinarySearchTree() {}

  // // for just a binary tree O(N)
  public min(root: TreeNode | null = this.root): number {
    if (root === null) return Infinity;

    const left = this.min(root.leftChild);
    const right = this.min(root.rightChild);

    return Math.min(Math.min(left, right), root.value);
  }

  public equals(otherTree?: BinaryTree): boolean {
    const RecursiveEquals = (
      first: TreeNode | null,
      second: TreeNode | null
    ) => {};
  }
  // //pre order traversal
  private RecursiveEquals(
    first: TreeNode | null,
    second: TreeNode | null
  ): boolean {}

  // public isBST() {}

  // private validateBst(
  //   root: TreeNode | null,
  //   min: number,
  //   max: number
  // ): boolean {}

  // public swapRoot() {}

  // public getNodesAtKDist(distance: number) {}

  // private nodeAtKDistance(
  //   root: TreeNode | null,
  //   distance: number,
  //   arr: Array<number>
  // ) {}

  // public size(root?: TreeNode | null): number {}

  // public countLeaves(root?: TreeNode | null): number {}

  // public maxInBST(root?: TreeNode | null): number {}

  // public max(root?: TreeNode | null): number {}

  // public areSibling(
  //   first: number,
  //   second: number,
  //   root?: TreeNode | null
  // ): boolean {}

  // public getAncestors(value: number) {}

  // private getAncestorsPr(
  //   value: number,
  //   root: TreeNode | null,
  //   ancestors: Array<number>
  // ): boolean {}

  // public isBalanced(tree: BinaryTree): boolean {}
  // private checkBalanced(root: TreeNode | null): boolean {}

  // public isPerfect(): boolean {}

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
