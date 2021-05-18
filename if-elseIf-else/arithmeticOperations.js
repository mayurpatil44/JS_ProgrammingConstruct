function arithmaticOperation(a, b, c) {
  let op1 = a + b * c;
  console.log("a + b * c = " + op1);
  let op2 = (a % b) + c;
  console.log("a % b + c = " + op2);
  let op3 = c + a / b;
  console.log("c + a / b = " + op3);
  let op4 = a * b + c;
  console.log("a * b + c = " + op4);

  opArray = [op1, op2, op3, op4];
  min = opArray[0];
  max = opArray[0];

  for (array of opArray) {
    if (array < min) {
      min = array;
    }
  }

  for (array of opArray) {
    if (array > max) {
      max = array;
    }
  }

  console.log("maximum number: " + max);
  console.log("minimum number: " + min);
}

var readline = require("readline-sync");
let a = readline.question("Enter the first number");
let b = readline.question("Enter the second number");
let c = readline.question("Enter the third number");
arithmaticOperation(parseInt(a), parseInt(b), parseInt(c));
