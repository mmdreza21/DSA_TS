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
    // remember that we don't go in left node we go to left sub tree
    this.traversePreOrder(current.leftChild);
    // remember that we don't go in right node we go to right sub tree
    this.traversePreOrder(current.rightChild);
  }

  public traverseInOrder(root?: TreeNode | null): void {
    const current = root === undefined ? this.root : root;

    if (current === null) return;

    // remember that we don't go in left node we go to left sub tree
    this.traversePreOrder(current.leftChild);
    console.log(current.value);
    // remember that we don't go in right node we go to right sub tree
    this.traversePreOrder(current.rightChild);
  }

  public traversePostOrder(root?: TreeNode | null): void {
    const current = root === undefined ? this.root : root;

    if (current === null) return;

    // remember that we don't go in left node we go to left sub tree
    this.traversePreOrder(current.leftChild);
    // remember that we don't go in right node we go to right sub tree
    this.traversePreOrder(current.rightChild);
    console.log(current.value);
  }

  public height(root?: TreeNode | null): number {
    const current = root === undefined ? this.root : root;

    if (current === null) return 0;

    if (this.isLeaf(current)) return 0;

    return (
      1 +
      Math.max(
        this.height(current?.leftChild),
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

    const left = this.min(current.leftChild);
    const right = this.min(current.rightChild);

    return Math.min(Math.min(left, right), current.value);
  }

  public equals(otherTree?: BinaryTree): boolean {
    if (!otherTree) return false;
    return this.equals2(this.root, otherTree.root);
  }
  //pre order traversal
  private equals2(first: TreeNode | null, second: TreeNode | null): boolean {
    // if (first === null && second !== null) return false;
    // if (first !== null && second === null) return false;
    if (first === null || second === null) return true;
    if (first !== null && second !== null)
      return (
        second?.value === first?.value &&
        this.equals2(first?.leftChild, second?.leftChild) &&
        this.equals2(first?.rightChild, second?.rightChild)
      );
    else return false;
  }

  public isBST() {
    if (!this.root) return null;
    return this.validateBst(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
  }

  private validateBst(
    root: TreeNode | null,
    min: number,
    max: number
  ): boolean {
    if (root === null) return true;

    if (min > root.value || max < root.value) return false;

    return (
      this.validateBst(root.leftChild, min, root.value - 1) &&
      this.validateBst(root.rightChild, root.value + 1, max)
    );
  }

  public swapRoot() {
    const left = this.root!!.leftChild;
    this.root!.leftChild = this.root!.rightChild!;
    this.root!.rightChild = left;
  }

  public getNodesAtKDist(distance: number) {
    const arr: Array<number> = [];
    this.nodeAtKDistance(this.root, distance, arr);
    return arr;
  }

  private nodeAtKDistance(
    root: TreeNode | null,
    distance: number,
    arr: Array<number>
  ) {
    if (root === null) return arr;

    if (distance === 0) arr.push(root.value);

    this.nodeAtKDistance(root.leftChild, distance - 1, arr);
    this.nodeAtKDistance(root.rightChild, distance - 1, arr);
  }

  public traverseLevelOrder() {
    const current = this.root;
    for (let i = 0; i <= this.height(); i++) {
      for (const e of this.getNodesAtKDist(i)) {
        console.log(e);
      }
    }
  }

  public size(root?: TreeNode | null): number {
    const current = root === undefined ? this.root : root;

    if (current === null) return 0;

    return 1 + this.size(current!.leftChild) + this.size(current!.rightChild);
  }

  public countLeaves(root?: TreeNode | null): number {
    const current = root === undefined ? this.root : root;

    if (current === null) return 0;

    if (this.isLeaf(current)) return 1;

    return (
      this.countLeaves(current.leftChild) + this.countLeaves(current.rightChild)
    );
  }

  public maxInBST(root?: TreeNode | null): number {
    let current = root === undefined ? this.root : root;
    if (current!.rightChild === null) return current!.value;

    return this.maxInBST(current?.rightChild);
  }

  public max(root?: TreeNode | null): number {
    let current = root === undefined ? this.root : root;
    if (current === null) return 0;
    if (this.isLeaf(current)) return root!.value;

    const left = this.max(current!.leftChild);
    const right = this.max(current!.rightChild);

    return Math.max(Math.max(left, right), current!.value);
  }

  public areSibling(
    first: number,
    second: number,
    root?: TreeNode | null
  ): boolean {
    const current = root === undefined ? this.root : root;

    if (current === null) return false;

    let areSibling: boolean = false;
    if (current?.leftChild || current?.rightChild)
      areSibling =
        (current.leftChild?.value === first &&
          current.rightChild?.value === second) ||
        (current.rightChild?.value === first &&
          current.leftChild?.value === second);

    return (
      areSibling ||
      this.areSibling(first, second, current?.leftChild) ||
      this.areSibling(first, second, current.rightChild)
    );
  }

  //this works for BST

  // public getAncestors(value: number): number[] {
  //   const arr: number[] = [];
  //   this.getAncestorsPr(value, this.root, arr);
  //   return arr;
  // }

  // private getAncestorsPr(
  //   value: number,
  //   root: TreeNode | null,
  //   ancestors: Array<number>
  // ) {
  //   if (root === null) return [];

  //   ancestors.push(root.value);
  //   if (root.value > value) {
  //     this.getAncestorsPr(value, root.leftChild, ancestors);
  //   } else {
  //     this.getAncestorsPr(value, root.rightChild, ancestors);
  //   }
  // }

  public getAncestors(value: number) {
    const arr: number[] = [];
    this.getAncestorsPr(value, this.root, arr);
    return arr;
  }

  private getAncestorsPr(
    value: number,
    root: TreeNode | null,
    ancestors: Array<number>
  ): boolean {
    if (root === null) return false;

    if (root.value === value) return true;

    if (
      this.getAncestorsPr(value, root.leftChild, ancestors) ||
      this.getAncestorsPr(value, root.rightChild, ancestors)
    ) {
      ancestors.push(root.value);
      return true;
    }
    return false;
  }

  public isBalanced(tree: BinaryTree): boolean {
    return this.checkBalanced(tree.root);
  }
  private checkBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;

    const balanceFactor =
      this.height(root.leftChild) - this.height(root.rightChild);

    return (
      Math.abs(balanceFactor) <= 1 &&
      this.checkBalanced(root.leftChild) &&
      this.checkBalanced(root.rightChild)
    );
  }

  public isPerfect(): boolean {
    const height = this.height();
    const size = this.size();
    // if (height % 2 === 0) {
    //   return height * height + height * height - 1 === size;
    // }
    // console.log(height, size);

    // return height * height + height * 2 === size;

    // console.log(Math.pow(5, 2) + Math.pow(5, 2) - 1);

    return Math.pow(2, height + 1) - 1 === size;
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
