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
    // this.counter++;
  }

  public find(value: number) {}

  public traversePreOrder(root?: TreeNode | null): void {}

  public traverseInOrder(root?: TreeNode | null): void {}

  public traversePostOrder(root?: TreeNode | null): void {}

  public height(root?: TreeNode) {}

  // O(Log n)
  public minForBinarySearchTree() {}

  // for just a binary tree O(N)
  public min(root?: TreeNode) {}

  public equals(otherTree?: BinaryTree) {}
  //pre order traversal
  private equals2(first: TreeNode | null, second: TreeNode | null) {}

  public isBST() {}

  private validateBstR(root: TreeNode, min: number, max: number) {}

  public swapRoot() {}

  private isLeaf(node: TreeNode) {}

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
