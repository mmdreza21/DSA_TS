export class MathExample {
  public static FactorialLoop(num: number) {
    let factorial = 1;

    for (let i = num; i > 1; i--) {
      factorial *= i;
    }
    return factorial;
  }

  /**
   * static  name
   */
  public static factorial(n: number): number {
    // base condition
    if (n === 0) return 1;
    console.log("mmd");

    return n * this.factorial(n - 1);
  }
}
