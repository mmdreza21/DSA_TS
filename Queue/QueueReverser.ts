import { Stack } from "../Stack/Stack.ts";
import { Queue } from "./Queue.ts";

export class QueueReverser {
  public static reverse(queue: Queue): void {
    queue.print();
    if (queue.isEmpty()) throw new Error("queue is mt");

    const stack = new Stack(3);
    while (!queue.isEmpty()) stack.push(queue.dequeue() as number);

    while (!stack.isEmpty()) queue.enqueue(stack.pop()!);
  }
}
