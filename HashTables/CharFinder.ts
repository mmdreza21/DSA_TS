export class CharFinder {
  constructor() {}

  public firstNoneRepeatingChar(str: string) {
    if (str.length < 1) throw new Error("the string cant be empty");

    const map = new Map<string, number>();

    for (const el of str) {
      let count = map.has(el) ? map.get(el) : 0;
      map.set(el, count! + 1);
    }

    let mmd = "<<<All the words repeated in the string>>>";
    for (const [key, val] of map) {
      if (val === 1) {
        mmd = key;
        break;
      }
    }

    return mmd;
  }
  public myFirstNoneRepeatingChar(str: string) {
    if (str.length < 1) throw new Error("the string cant be empty");

    const map = new Map<string, boolean>();
    for (let el of str) {
      map.set(el, !map.has(el));
    }
    let mmd = "<<<All the words repeated in the string>>>";

    for (const [key, val] of map) {
      if (val) {
        mmd = key;
        break;
      }
    }
    return mmd;
  }

  FirstRepeatedChar(str: string) {
    const set = new Set<string>();

    for (const el of str) {
      if (set.has(el)) return el;

      set.add(el);
    }
    return "<<<no repeated char>>>";
  }
}
