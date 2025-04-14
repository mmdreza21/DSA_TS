class Expression {
  private isLeftBracket(ch: string): boolean {
    return ch === "(" || ch === "<" || ch === "[" || ch === "{";
  }
  private isRightBracket(ch: string): boolean {
    return ch === ")" || ch === ">" || ch === "]" || ch === "}";
  }

  private bracketMatch(left: string | undefined, right: string): boolean {
    return (
      (left === "(" && right === ")") ||
      (left === "<" && right === ">") ||
      (left === "[" && right === "]") ||
      (left === "{" && right === "}")
    );
  }

  /**
   * checkBalanceMosh
   */
  public checkBalanceMosh(str: string) {
    const stack = [];
    for (const e of str) {
      if (this.isLeftBracket(e)) {
        stack.push(e);
      }
      if (this.isRightBracket(e)) {
        if (!stack.length) return false;
        const pair = stack.pop();
        if (!this.bracketMatch(pair!, e)) return false;
      }
    }
    return !stack.length;
  }

  /**
   * checkBalance
   */
  public checkBalance(str: string) {
    const pairs = new Map<string, string>();
    pairs.set("[", "]");
    pairs.set("(", ")");
    pairs.set("<", ">");
    pairs.set("{", "}");

    const stack = [];
    const open = Array.from(pairs.keys());
    const close = Array.from(pairs.values());

    for (const e of str) {
      if (open.includes(e)) {
        stack.push(e);
      }
      if (close.includes(e)) {
        const pair = stack.pop();
        if (pairs.get(pair!) !== e) return false;
      }
    }
    return !stack.length;
  }
}
const exp = new Expression();
console.log(exp.checkBalance("{1+2}"));
console.log(exp.checkBalanceMosh("[12]}"));
