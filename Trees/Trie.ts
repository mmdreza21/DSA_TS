class TrieNode {
  value: string;
  children: Array<TrieNode> = new Array(26);
  isEndOfWord: boolean = false;
  constructor(val: string) {
    this.value = val;
  }

  public getChildren(): TrieNode[] {
    return Array.from(this.children.values());
  }
}

export class Tire {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode("");
    console.log(this.root);
  }

  private findIndex(ch: string) {
    return "a".charCodeAt(0) - ch.charCodeAt(0);
  }

  public insert(word: string) {
    for (const ch of word) {
      if (this.root.children.find((e) => e.value === ch)) {
      } else {
        this.root.children[this.findIndex(ch)] = new TrieNode(ch);
      }
    }
  }

  public traverse(root: TrieNode = this.root) {
    // pre-order traverse
    console.log(root.value);

    for (const child of root.getChildren()) {
      this.traverse(child);
    }
    // post-order traverse
    // console.log(root.value);
  }
}
