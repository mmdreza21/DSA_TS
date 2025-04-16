class Expression {
  // private isLeftBracket(ch: string): boolean {
  //   return ch === "(" || ch === "<" || ch === "[" || ch === "{";
  // }
  // private isRightBracket(ch: string): boolean {
  //   return ch === ")" || ch === ">" || ch === "]" || ch === "}";
  // }

  // private bracketMatch(left: string | undefined, right: string): boolean {
  //   return (
  //     (left === "(" && right === ")") ||
  //     (left === "<" && right === ">") ||
  //     (left === "[" && right === "]") ||
  //     (left === "{" && right === "}")
  //   );
  // }

  // /**
  //  * checkBalanceMosh
  //  */
  // public checkBalanceMosh(str: string) {
  //   const stack = [];
  //   for (const e of str) {
  //     if (this.isLeftBracket(e)) {
  //       stack.push(e);
  //     }
  //     if (this.isRightBracket(e)) {
  //       if (!stack.length) return false;
  //       const pair = stack.pop();
  //       if (!this.bracketMatch(pair!, e)) return false;
  //     }
  //   }
  //   return !stack.length;
  // }

  //   public checkBalance(str: string) {
  //     const stack = [];

  //     for (const e of str) {
  //       if (this.pairs.has(e)) {
  //         stack.push(e);
  //       }
  //       if ([...this.pairs.values()].includes(e)) {
  //         const pair = stack.pop();
  //         if (this.pairs.get(pair!) !== e) return false;
  //       }
  //     }
  //     return !stack.length;
  //   }

  /*
  - Replace Array.includes() with Map.has()/Set.has()
  - Precompute closing brackets Set during initialization
  - Maintain same functionality with improved time complexity
  */

  private pairs = new Map<string, string>([
    ["[", "]"],
    ["(", ")"],
    ["<", ">"],
    ["{", "}"],
  ]);

  private closeSet = new Set(this.pairs.values());

  /**
   * checkBalance
   */
  public checkBalance(str: string) {
    const stack = [];

    for (const e of str) {
      if (this.pairs.has(e)) {
        stack.push(e);
      }
      if (this.closeSet.has(e)) {
        const pair = stack.pop();
        if (this.pairs.get(pair!) !== e) return false;
      }
    }
    return !stack.length;
  }
}
const exp = new Expression();
console.log(exp.checkBalance("{1+2}{"));
