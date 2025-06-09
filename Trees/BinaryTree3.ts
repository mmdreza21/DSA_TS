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
    const insert = (value: number, node: TreeNode | null): TreeNode => {
      if (node === null) return new TreeNode(value);

      if (value < node.value) {
        node.leftChild = insert(value, node.leftChild);
      } else {
        node.rightChild = insert(value, node.rightChild);
      }

      return node;
    };

    this.root = insert(value, this.root);
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

  public equals(otherTree: BinaryTree): boolean {
    const equals = (
      first: TreeNode | null,
      second: TreeNode | null
    ): boolean => {
      if (first === null || second === null) return true;
      if (first === null && second !== null) return false;
      if (first !== null && second === null) return false;

      if (second !== null && first !== null)
        return (
          first.value === second.value &&
          equals(first.leftChild, second.leftChild) &&
          equals(first.rightChild, second.rightChild)
        );
      else return false;
    };
    console.log([...otherTree]);

    return equals(this.root, otherTree.root);
  }

  public isBST(): boolean {
    const checkValidity = (
      root: TreeNode | null,
      min: number,
      max: number
    ): boolean => {
      if (root === null) return true;

      if (min > root.value || max < root.value) return false;
      return (
        checkValidity(root.leftChild, min, root.value + 1) &&
        checkValidity(root.rightChild, root.value + 1, max)
      );
    };

    return checkValidity(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
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
    for (let i = 0; i <= this.height(); i++) {
      for (const node of this.getNodesAtKDist(i)) {
        list.push(node);
      }
    }
    console.log(list);
  }

  public size(): number {
    const count = (root: TreeNode | null): number => {
      if (root === null) return 0;

      return 1 + count(root.leftChild) + count(root.rightChild);
    };

    return count(this.root);
  }

  public countLeaves(): number {
    const count = (root: TreeNode | null): number => {
      if (root === null) return 0;
      if (this.isLeaf(root)) return 1;

      return count(root.leftChild) + count(root.rightChild);
    };
    return count(this.root);
  }

  // public maxInBST(root?: TreeNode | null): number {}

  public max(root: TreeNode | null = this.root): number {
    if (root === null) return -Infinity;

    const left = this.max(root.leftChild);
    const right = this.max(root.rightChild);

    return Math.max(Math.max(left, right), root.value);
  }

  public areSibling(
    first: number,
    second: number,
    root: TreeNode | null = this.root
  ): boolean {
    if (root === null) return false;

    let areSibling: boolean = false;
    if (root?.leftChild || root?.rightChild)
      areSibling =
        (root.leftChild?.value === first &&
          root.rightChild?.value === second) ||
        (root.rightChild?.value === first && root.leftChild?.value === second);

    return (
      areSibling ||
      this.areSibling(first, second, root.leftChild) ||
      this.areSibling(first, second, root.rightChild)
    );
  }

  public getAncestors(value: number) {
    const getAncestors = (
      value: number,
      root: TreeNode | null,
      ancestors: Array<number>
    ): boolean => {
      if (root === null) return false;

      if (root.value === value) return true;

      if (
        getAncestors(value, root.leftChild, ancestors) ||
        getAncestors(value, root.rightChild, ancestors)
      ) {
        ancestors.push(root.value);
        return true;
      }
      return false;
    };

    const list: number[] = [];
    getAncestors(value, this.root, list);

    return list;
  }
  public isBalanced(tree: BinaryTree): boolean {
    const isBalanced = (root: TreeNode | null): boolean => {
      if (root === null) return false;

      const balanceFactor =
        this.height(root.leftChild) - this.height(root.rightChild);

      return (
        Math.abs(balanceFactor) >= 1 &&
        isBalanced(root.leftChild) &&
        isBalanced(root.rightChild)
      );
    };
    return isBalanced(tree.root);
  }

  public isPerfect(): boolean {
    const height = this.height();
    const size = this.size();

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
