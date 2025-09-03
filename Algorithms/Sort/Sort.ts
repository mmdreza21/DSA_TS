export class Sort {
  public static BobbleSort(array: Array<number>) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        let current = array[i];
        let next = array[i + 1];
        if (current > next) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          console.log("array", array);
        }
      }
    }

    return array;
  }
}
