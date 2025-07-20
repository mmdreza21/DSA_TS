class TrieNode {
  value: string;
  children: Array<TrieNode> = new Array(26);
  isEndOfWord: boolean = false;
  constructor(val: string) {
    this.value = val;
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

  public traverse(node: TrieNode = this.root) {
    for (const child of object) {
    }
  }
}
