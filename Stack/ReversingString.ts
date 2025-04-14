class StringReverer {
  /**
   * reverse
   */
  public reverse(str: string) {
    let stack = [...str];

    let reversedStr = "";

    // while (stack.length > 0) reversedStr += stack.pop();

    stack.reverse();
    reversedStr = stack.join("");

    return reversedStr;
  }
}
