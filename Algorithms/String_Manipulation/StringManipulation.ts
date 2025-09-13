export class StringManipulation {
  findNumberOfVowels(str: string): number {
    const vowelsSet = new Set<string>(["A", "E", "O", "U", "I"]);
    let numberOfVowels = 0;
    for (const ch of str) {
      if (vowelsSet.has(ch.toUpperCase())) numberOfVowels++;
    }
    return numberOfVowels;
  }

  StrReverser(str: string): number {
    const rvs = "";
    for (const ch of str) {
    }
  }
}
