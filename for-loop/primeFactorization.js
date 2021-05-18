var readline = require("readline-sync");
let n = readline.question("enter a number");
var num = parseInt(n);
console.log("Prime factors are:");
for (var i = 2; i <= num * num; i++) {
  //As prime factors starts from 2

  while (num % i === 0) {
    console.log(i); //Prints the prime number
    num = num / i;
  }
}
