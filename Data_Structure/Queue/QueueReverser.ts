import { Stack } from "../Stack/Stack.ts";
import { Queue } from "./Queue.ts";

export class QueueReverser {
  public static reverse(queue: Queue<any>): void {
    if (queue.isEmpty()) throw new Error("queue is mt");

    const stack = new Stack(6);
    while (!queue.isEmpty()) stack.push(queue.dequeue() as number);

    while (!stack.isEmpty()) queue.enqueue(stack.pop()!);
  }

  public static reverseTillK(k: number, queue: Queue<any>) {
    if (queue.isEmpty()) throw new Error("queue is mt");
    const stack = new Stack(k);

    while (!stack.isFull()) stack.push(queue.dequeue());
    console.log(stack.stackContent);

    while (!stack.isEmpty()) queue.enqueue(stack.pop());
  }
}
