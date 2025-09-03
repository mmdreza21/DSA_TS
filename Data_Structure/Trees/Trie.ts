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

  getChild(ch: string): TrieNode {
    return this.children.get(ch)!;
  }

  public getChildren(): TrieNode[] {
    return Array.from(this.children.values());
  }

  public hasChildren(): boolean {
    return this.children.size > 0;
    // return !this.children.values().next().done;
  }

  public removeChild(ch: string): void {
    this.children.delete(ch);
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode("");
  }

  public insert(word: string) {
    let current = this.root;
    for (const ch of word) {
      if (!current.hasChild(ch)) current.putChild(ch);
      current = current.getChild(ch);
    }
    current.isEndOfWord = true;
  }

  public contain(word: string) {
    let current = this.root;
    for (const ch of word) {
      if (!current.hasChild(ch)) return false;
      current = current.getChild(ch);
    }
    return current.isEndOfWord;
  }

  public containR(
    word: string,
    root: TrieNode = this.root,
    index: number = 0
  ): boolean {
    if (!word) return false;

    if (index === word.length) return root.isEndOfWord;

    const ch = word.charAt(index);
    const child = root.getChild(ch);
    if (!child) return false;

    return this.containR(word, child, index + 1);
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
    let child = root.getChild(ch);
    if (!child) return;

    this.remove(word, child, index + 1);
    if (!child.hasChildren() && !child.isEndOfWord) root.removeChild(ch);
  }

  public findWords(prefix: string): string[] {
    // 1. Store results here
    const words: string[] = [];

    // 2. Get the last node of the given prefix in the trie
    const lastNode = this.findLastNodeOf(prefix);
    if (!lastNode) return []; // optional: handle prefix not found

    // 3. Define recursive function to collect words
    const findWords = (prefix: string, words: string[], root: TrieNode) => {
      if (!root) return;

      if (root.isEndOfWord) {
        words.push(prefix); // Found a word
      }

      for (const child of root.getChildren()) {
        findWords(prefix + child.value, words, child);
      }
    };
    // 4. Begin recursion from the last node of the prefix
    findWords(prefix, words, lastNode);

    // 5. Return all collected words
    return words;
  }

  private findLastNodeOf(prefix: string): TrieNode | null {
    let current = this.root;
    for (const ch of prefix) {
      const child = current.getChild(ch);
      if (!child) return null;
      current = child;
    }
    return current;
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

  public countWord(root: TrieNode = this.root): number {
    let total: number = 0;

    if (root.isEndOfWord) total++;

    for (const child of root.getChildren()) {
      total += this.countWord(child);
    }
    return total;
  }

  /**
   * Finds the longest common prefix among a list of words using a Trie.
   *
   * @param words - An array of strings to find the common prefix for.
   * @returns The longest common prefix shared by all words.
   */
  public static longestCommonPrefix2(words: string[]) {
    // Create a new Trie structure to store all words
    const trie = new Trie();

    // Insert each word into the Trie
    for (const word of words) {
      trie.insert(word);
    }

    // This will store the final prefix result
    let prefix = "";
    // The longest possible common prefix cannot be longer than the shortest word
    const maxLen = this.findShortest(words).length;
    // Start traversal from the root of the Trie
    let current = trie.root;

    // Traverse down the Trie while:
    // 1. The prefix length is less than the shortest word
    // 2. The current node has exactly one child (meaning no branching so far)
    while (prefix.length < maxLen) {
      const children = current.getChildren();
      // If there are no children or more than one child, stop (prefix ends here)
      if (children.length != 1) break;
      // Move to the only child node
      current = children[0];
      // Append the child's character to the prefix
      prefix += current.value;
    }

    // Return the longest common prefix found
    return prefix;
  }

  private static findShortest(words: string[]) {
    let shortest = words[0];

    for (const word of words) {
      if (word.length < shortest.length) shortest = word;
    }
    return shortest;
  }

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

// 📌 Simple Explanation of remove() Method in Trie
// This remove() function deletes a word from a Trie (prefix tree) recursively, cleaning up unnecessary nodes along the way.

// 🧠 How It Works (Step-by-step):
// ✅ 1. Base Case:
// ts
// Copy
// Edit
// if (index === word.length) {
//   root.isEndOfWord = false;
//   return;
// }
// We've reached the end of the word.

// Mark isEndOfWord = false → the word is no longer valid in the trie.

// Don't delete nodes yet — they may still be needed by other words.

// ✅ 2. Recursive Traversal:
// ts
// Copy
// Edit
// let ch = word.charAt(index);
// let child = root.getChild(ch);
// if (!child) return;
// Get the current character (ch) at this level.

// Find the child node for this character.

// If the path doesn't exist, return (word not in trie).

// ✅ 3. Recursive Call:
// ts
// Copy
// Edit
// this.remove(word, child, index + 1);
// Continue recursively down the trie with the next character.

// ✅ 4. Clean-up Unused Nodes:
// ts
// Copy
// Edit
// if (!child.hasChildren() && !child.isEndOfWord) {
//   root.removeChild(ch);
// }
// After returning from recursion:

// If the child node has no children and is not the end of another word, it’s unnecessary.

// Remove it from the parent.

// 📍 Example Route:
// Let’s say you want to remove "cat" from a trie that contains "cat" and "car".

// Start at root → c → a → t.

// Unmark t as isEndOfWord.

// Check t:

// Has no children and not isEndOfWord → remove it.

// Now at a, check if it should remove t.

// But a still has r (from "car") → don’t remove a.

// Only "t" node is deleted. "c" → "a" → "r" (from "car") still remains.

// ✅ Summary
// Step	Purpose
// index === word.length	End of word → unmark as valid
// getChild(ch)	Traverse deeper
// remove(...)	Recursively remove rest
// removeChild(ch)	Clean unused branches

// Let me know if you want a visual diagram too.
