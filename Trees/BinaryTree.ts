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
    return node.leftChild === null && node.rightChild === null;
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
