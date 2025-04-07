import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Main {
  public log(numbers: number[]): void {
    //O(1)
    console.log(numbers[0]);
  }

  public log2(numbers: number[]): void {
    //O(n)
    for (let i = 0; i < numbers.length; i++) {
      //   console.log(numbers[i]); // O(1)
      for (let j = 0; j < numbers.length; j++) {
        console.log(numbers[i], numbers[j]); // O(1)
      }
    }
  }
}
const main = new Main();
main.log2([1, 2, 3, 4, 5]);
