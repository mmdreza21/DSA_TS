// import { AVLTree } from "../Trees/AVLTree.ts";

import { log } from "console";

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
    const insert = (value: number, node: TreeNode | null): TreeNode => {
      if (node === null) return new TreeNode(value);

      if (value < node.value) node.leftChild = insert(value, node.leftChild);
      else node.rightChild = insert(value, node.rightChild);

      return node;
    };

    this.root = insert(value, this.root);
  }

  public find(value: number): boolean {
    let current = this.root;
    while (current === null) {
      if (current!.value < value) {
        if (current!.value === current!.leftChild?.value) return true;
        current = current!.leftChild;
      } else if (current!.value === current!.rightChild?.value) return true;
      current = current!.rightChild;
    }
    return false;
  }

  public contain(value: number, root: TreeNode | null = this.root): boolean {
    if (root === null) return false;
    if (root.value === value) return true;

    return (
      this.contain(value, root.leftChild) ||
      this.contain(value, root.rightChild)
    );
  }

  public traversePreOrder(root: TreeNode | null = this.root): void {
    if (root === null) return;

    console.log(root.value);

    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);

    // ✅ The function goes back to the parent automatically when the child call finishes.\
    // That’s the magic of recursion — you don’t need to explicitly go back. The call stack does it for you.
  }

  public traverseInOrder(root: TreeNode | null = this.root): void {
    if (root === null) return;

    this.traverseInOrder(root.leftChild);
    console.log(root.value);
    this.traverseInOrder(root.rightChild);
  }

  public traversePostOrder(root: TreeNode | null = this.root): void {
    if (root === null) return;

    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.value);
  }

  public height(root: TreeNode | null = this.root): number {
    if (root === null) return 0;
    if (this.isLeaf(root)) return -1;

    return (
      Math.max(this.height(root.leftChild), this.height(root.rightChild)) + 1
    );
  }

  // for just a binary tree O(N)
  public min(root: TreeNode | null = this.root): number {
    if (root === null) return Number.MAX_VALUE;

    const left = this.min(root.leftChild);
    const right = this.min(root.rightChild);

    return Math.min(Math.min(left, right), root.value);
  }

  public equals(otherTree: BinaryTree): boolean {
    const equals = (
      first: TreeNode | null,
      second: TreeNode | null
    ): boolean => {
      if (first === null && second === null) return true;
      if (first !== null && second === null) return false;
      if (first === null && second !== null) return false;

      if (second !== null && first !== null)
        return (
          first.value === second.value &&
          equals(first!.leftChild, second!.leftChild) &&
          equals(first!.rightChild, second!.rightChild)
        );
      else return false;
    };
    console.log([...otherTree]);

    return equals(this.root, otherTree.root);
  }

  public isBST(): boolean {
    const isBST = (
      root: TreeNode | null,
      min: number,
      max: number
    ): boolean => {
      if (root === null) return true;

      if (min > root.value || max < root.value) return false;

      return (
        isBST(root.leftChild, min, root.value + 1) &&
        isBST(root.leftChild, root.value + 1, max)
      );
    };

    return isBST(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
  }

  public swapRoot() {
    const left = this.root!.leftChild;
    this.root!.leftChild = this.root!.rightChild;
    this.root!.rightChild = left;
  }

  public getNodesAtKDist(distance: number) {
    const nodeAtKDistance = (
      root: TreeNode | null,
      distance: number,
      list: Array<number>
    ) => {
      if (root === null) return;
      if (distance === 0) list.push(root.value);

      nodeAtKDistance(root.leftChild, distance - 1, list);
      nodeAtKDistance(root.rightChild, distance - 1, list);
    };
    const list: number[] = [];
    nodeAtKDistance(this.root, distance, list);
    return list;
  }

  public traverseLevelOrder() {
    const list: number[] = [];
    for (let i = 0; i < this.height(); i++) {
      for (const e of this.getNodesAtKDist(i)) {
        list.push(e);
      }

      return list;
    }
  }

    public size(): number {
if


    }

  //   public countLeaves(): number {

  //   }

  // public maxInBST(root?: TreeNode | null): number {}

  //   public max(root: TreeNode | null = this.root): number {

  //   }

  //   public areSibling(
  //     first: number,
  //     second: number,
  //     root: TreeNode | null = this.root
  //   ): boolean {

  //   }

  // public getAncestors(value: number) {
  //   const getAncestors = (
  //     value: number,
  //     root: TreeNode | null,
  //     ancestors: Array<number>
  //   ): boolean => {
  //   }
  //   };

  //     const list: number[] = [];
  //     getAncestors(value, this.root, list);

  //     return list;
  //   }
  //   public isBalanced(tree: BinaryTree): boolean {
  //     const isBalanced = (root: TreeNode | null): boolean => {

  //     };
  //     return isBalanced(tree.root);
  //   }

  //   public isPerfect(): boolean {

  //   }

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
