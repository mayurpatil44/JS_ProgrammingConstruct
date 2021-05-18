function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
var readline = require("readline-sync");
let num = readline.question("Enter the number");
fact = factorial(parseInt(num));
console.log("The factorial of " + num + " is " + fact);
