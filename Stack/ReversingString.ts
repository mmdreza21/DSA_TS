const str: string = "mamadreza";

const arr = new Array<string>(str.length);
let reversedStr: string = "";
let reversedArr: string[] = [];

for (let index = str.length; index >= 0; index--) {
  const element = str[index];
  arr.push(element);
  console.log(element);

  //   reversedArr.push(arr.pop()!);
}

reversedStr = arr.join("");

console.log(reversedStr);
