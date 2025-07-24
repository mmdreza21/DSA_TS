class TrieNode {
  private AlphabetSize: number = 26;
  value: string;
  children = new Map<string, TrieNode>();
  isEndOfWord: boolean = false;
  constructor(val: string) {
    this.value = val;
  }

  public hasChild(ch: string): boolean {
    return this.children.has(ch);
  }

  putChild(ch: string): void {
    this.children.set(ch, new TrieNode(ch));
  }

  findChild(ch: string): TrieNode {
    return this.children.get(ch)!;
  }

  public getChildren(): TrieNode[] {
    return Array.from(this.children.values());
  }

  public hasChildren(): boolean {
    return !!this.children.values.length;
  }

  public removeChild(ch: string): void {
    this.children.clear();
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode("");
  }

  // private findIndex(ch: string) {
  //   return "a".charCodeAt(0) - ch.charCodeAt(0);
  // }

  public insert(word: string) {
    let current = this.root;
    for (const ch of word) {
      if (!current.hasChild(ch)) current.putChild(ch);
      current = current.findChild(ch);
    }
    current.isEndOfWord = true;
  }

  public contain(word: string) {
    let current = this.root;
    for (const ch of word) {
      if (!current.hasChild(ch)) return false;
      current = current.findChild(ch);
    }
    return current.isEndOfWord;
  }

  public remove(
    word: string,
    root: TrieNode = this.root,
    index: number = 0
  ): void {
    if (index === word.length) {
      root.isEndOfWord = false;
      return;
    }

    let ch = word.charAt(index);
    let child = root.findChild(ch);
    if (!child) return;

    this.remove(word, child, index + 1);

    if (!child.hasChildren() && !child.isEndOfWord) root.removeChild(ch);
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

  // private getChildIndex(ch: string) {
  //   return ch.charCodeAt(0) - "a".charCodeAt(0);
  // }
  // for array
  // public insert(word: string) {
  //   let current = this.root;

  //   for (const ch of word) {
  //     if (!current.children[this.getChildIndex(ch)])
  //       current.children[this.getChildIndex(ch)] = new TrieNode(ch);
  //     current = current.children[this.getChildIndex(ch)];
  //   }

  //   current.isEndOfWord = true;

  // }

  public countWord(root: TrieNode = this.root): number {
    let total: number = 0;

    if (root.isEndOfWord) total++;

    for (const child of root.getChildren()) {
      total += this.countWord(child);
    }
    return total;
  }

  public longestCommonPrefix(word: string, root: TrieNode = this.root) {}

  *[Symbol.iterator](): IterableIterator<string> {
    function* traverse(node: TrieNode, prefix: string): Generator<string> {
      if (node.isEndOfWord) {
        // Skip root's dummy value
        yield prefix;
      }

      for (const [char, childNode] of node.children) {
        yield* traverse(childNode, prefix + char);
      }
    }

    yield* traverse(this.root, "");
  }
}
