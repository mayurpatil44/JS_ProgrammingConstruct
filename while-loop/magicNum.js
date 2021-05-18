//magic number

var readline = require("readline-sync");
let minNum = 1;
let maxNum = 100;
let midNum = 0;
while (minNum <= maxNum) {
  midNum = parseInt((minNum + maxNum) / 2);
  console.log(
    "Is number : lessThan(l) / greaterThan(g) / equalTo(e): " + midNum
  );
  input = readline.question("Enter your option: ");
  if (input === "l") maxNum = midNum;
  else if (input === "g") minNum = midNum;
  else if (input === "e") {
    console.log("Magic number is: " + midNum);
    break;
  } else console.log("please enter out of l,e,g only");
}
