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
    // this.counter++;
  }

  public find(value: number): boolean {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (current.value < value) {
        current = current.rightChild;
      } else {
        return true;
      }
    }
    return false;
  }

  public traversePreOrder(root?: TreeNode | null): void {
    const startNode = root ?? this.root;
    if (root === null) return;

    console.log(startNode!.value);
    this.traversePreOrder(startNode!.leftChild);
    this.traversePreOrder(startNode!.rightChild);
  }

  public traverseInOrder(root?: TreeNode | null): void {
    const startNode = root ?? this.root;
    if (root === null) return;

    this.traverseInOrder(startNode!.leftChild);
    console.log(startNode!.value);
    this.traverseInOrder(startNode!.rightChild);
  }

  public traversePostOrder(root?: TreeNode | null): void {
    const startNode = root ?? this.root;
    if (root === null) return;

    this.traversePostOrder(startNode!.leftChild);
    this.traversePostOrder(startNode!.rightChild);
    console.log(startNode!.value);
  }

  public height(root?: TreeNode): number {
    const startNode = root ?? this.root;

    if (startNode === null) return -1;

    if (root === null) return -1;

    return (
      1 +
      Math.max(
        this.height(startNode!.leftChild!),
        this.height(startNode!.rightChild!)
      )
    );
  }

  // O(Log n)
  public minForBinarySearchTree(): number {
    let current = this.root;
    if (!current) throw new Error("the tree is empty");
    let last = current;

    while (current) {
      last = current;
      current = current.leftChild;
    }
    return last.value;
  }

  // for just a binary tree O(N)
  public min(root?: TreeNode): number {
    const startNode = root ?? this.root;
    if (!startNode) return Infinity;
    if (this.isLeaf(startNode)) return startNode.value;

    let left = startNode.leftChild ? this.min(startNode.leftChild) : Infinity;
    let right = startNode.rightChild
      ? this.min(startNode.rightChild)
      : Infinity;

    return Math.min(Math.min(left, right), startNode.value);
  }

  public equals(otherTree?: BinaryTree): boolean {
    if (!otherTree) return false;
    return this.equals2(this.root, otherTree.root);
  }
  //pre order traversal
  private equals2(first: TreeNode | null, second: TreeNode | null): boolean {
    if (first === null && second === null) return true;

    // if (first === null || second === null) return false;

    // Check if current nodes have same value and same structure
    if (first !== null && second !== null)
      return (
        first.value === second.value &&
        this.equals2(first.leftChild, second.leftChild) &&
        this.equals2(first.rightChild, second.rightChild)
      );
    else return false;
  }

  public isBST(): boolean {
    if (!this.root) return false;

    return this.validateBstR(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
  }

  private validateBstR(root: TreeNode, min: number, max: number): boolean {
    if (root === null) return true;

    if (root.value < min || root.value > max) return false;

    return (
      this.validateBstR(root.leftChild!, min, root.value - 1) &&
      this.validateBstR(root.rightChild!, root.value + 1, max)
    );
  }

  public swapRoot() {
    if (this.root) {
      const tmp = this.root.leftChild;
      this.root.leftChild = this.root.rightChild;
      this.root.rightChild = tmp;
    }
  }

  private isLeaf(node: TreeNode): boolean {
    return node !== null && node.leftChild === null && node.rightChild === null;
  }

  public getNodesAtKDist(distance: number) {
    const arr: Array<number> = [];
    if (!this.root) return;
    return this.nodeAtKDistance(this.root, distance, arr);
  }

  private nodeAtKDistance(
    root: TreeNode | null,
    distance: number,
    arr: Array<number>
  ) {
    if (root === null) return;
    if (distance === 0) {
      arr.push(root!.value);
      return arr;
    }

    this.nodeAtKDistance(root!.leftChild, distance - 1, arr);
    this.nodeAtKDistance(root!.rightChild, distance - 1, arr);
    return arr;
  }

  public traverseLevelOrder() {
    for (let i = 0; i <= this.height(); i++) {
      for (const element of this.getNodesAtKDist(i)!) {
        console.log(element);
      }
    }
  }

  public size(root?: TreeNode): number {
    const startNode = root ?? this.root;
    if (!startNode) return 0;

    if (root === null) return 0;

    return (
      1 + this.size(startNode?.leftChild!) + this.size(startNode?.rightChild!)
    );
  }

  public countLeaves(root?: TreeNode): number {
    const node = root ?? this.root;
    if (!node) return 0;

    if (root === null) return 0;

    if (this.isLeaf(node!)) return 1;

    return (
      this.countLeaves(node?.leftChild!) + this.countLeaves(node?.rightChild!)
    );
  }

  public max(root?: TreeNode | null): number {
    const node = root ?? this.root;

    if (!node) throw new Error("tree is empty");

    if (node?.rightChild === null) return node.value;

    return this.max(node?.rightChild);
  }

  public contain(value: number, root?: TreeNode | null): boolean {
    const node = root === undefined ? this.root : root;

    if (node?.value === value) return true;
    if (node === null) return false;

    return (
      this.contain(value, node?.leftChild) ||
      this.contain(value, node?.rightChild)
    );
  }

  private findParent(value: number, root?: TreeNode): TreeNode | null {
    const node = root === undefined ? this.root : root;

    if (root === null) return null;

    if (value < node?.value!) {
      if (node?.leftChild?.value === value) return node;
      return this.findParent(value, node!.leftChild!);
    } else {
      if (node?.rightChild?.value === value) return node;
      return this.findParent(value, node!.rightChild!);
    }
  }

  public areSibling(value1: number, value2: number, root?: TreeNode): boolean {
    const node = root === undefined ? this.root : root;
    return this.findParent(value1)?.value === this.findParent(value2)?.value;
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
