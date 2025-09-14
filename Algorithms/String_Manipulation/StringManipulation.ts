export class StringManipulation {
  findNumberOfVowels(str: string): number {
    const vowelsSet = new Set<string>(["A", "E", "O", "U", "I"]);
    let numberOfVowels = 0;
    for (const ch of str) {
      if (vowelsSet.has(ch.toUpperCase())) numberOfVowels++;
    }
    return numberOfVowels;
  }

  StrReverser(str: string): string {
    let reversed = "";

    // Whit stack
    // const strArr = str.split("");
    // while (strArr.length) {
    //   reversed += strArr.pop();
    // }

    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }

    return reversed;
  }

  public wordReverser(str: string): string {
    const wordsArray = str.trim().split(" ").reverse().join(" ");
    return wordsArray;
  }

  public checkRotation(str1: string, str2: string): boolean {
    return str1.length === str2.length && str1.concat(str1).includes(str2);
  }

  public checkRotation2(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;
    const n = str1.length;

    // Try each possible rotation starting point
    for (let shift = 0; shift < n; shift++) {
      let i = 0; // pointer for str1
      let j = 0; // pointer for str2

      // Compare str1 rotated by `shift` with str2
      while (i < n && str1[(i + shift) % n] === str2[j]) {
        i++;
        j++;
      }

      if (i === n) return true; // full match
    }

    return false;
  }

  duplicateRemover(str: string) {
    let output = "";
    const seen = new Set<string>();

    for (let i = 0; i < str.length; i++)
      if (!seen.has(str[i])) {
        seen.add(str[i]);
        output += str[i];
      }
    return output;
  }

  mostRepeatedCharacter(str: string) {
    // const seen = new Map<string, number>();

    // for (const ch of str) {
    //   !seen.has(ch) ? seen.set(ch, 1) : seen.set(ch, seen.get(ch)! + 1);
    // }

    // let max: [string, number] = ["", 1];
    // for (const ch of seen) {
    //   if (ch[1] > max[1]) max = ch;
    // }
    // return max[0];

    const ASCII_SIZE = 256;
    let frequencies = new Array<number>(ASCII_SIZE).fill(0);

    for (const ch of str) {
      frequencies[+ch.charCodeAt(0)]++;
    }

    let maxFreq = 0;
    let maxChar = "";

    for (let i = 0; i < ASCII_SIZE; i++) {
      if (frequencies[i] > maxFreq) {
        maxFreq = frequencies[i];
        maxChar = String.fromCharCode(i);
      }
    }
    return maxChar;
  }

  public capitalize(str: string) {
    const words = str.trim().split(" ");
    // let caped = "";
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].substring(0, 1).toUpperCase() +
        words[i].substring(1).toLocaleLowerCase();
    }

    return words.join(" ");
  }

  //A string is an anagram of another string if it has the exact same characters in any order.
  public detectAnagramMine(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;
    //O(N^2)
    for (const ch of str1) {
      if (!str2.includes(ch)) return false; //o(n)
    }

    return true;
  }

  public detectAnagramSort(str1: string, str2: string): boolean {
    if (str1 === null || str2 === null || str1.length !== str2.length)
      return false;
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }

  // O(N)
  public detectAnagramHistogram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const ALPHABET_SIZE = 26;
    const frequencies: number[] = new Array(ALPHABET_SIZE).fill(0);

    // Convert to lowercase to handle case-insensitive comparison
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Count characters in str1
    for (let i = 0; i < str1.length; i++) {
      frequencies[str1.charCodeAt(i) - 97]++;
    }

    // Subtract counts based on str2
    for (let i = 0; i < str2.length; i++) {
      let index = str2.charCodeAt(i) - 97;
      if (frequencies[index] === 0) return false;
      frequencies[index]--;
    }

    // If all frequencies are zero, they are anagrams
    // return frequencies.every((count) => count === 0);
    return true;
  }

  public isPalindrome(str: string) {
    // reverse works but its small
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str.charAt(left) !== str.charAt(right)) return false;
      left++;
      right--;
    }

    return true;
  }
}
