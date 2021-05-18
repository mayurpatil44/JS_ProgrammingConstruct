function calculatePowerOfTwo(n) {
  var i = 1;
  var powerOfTwo = 1;

  while (i <= n) {
    powerOfTwo = 2 * powerOfTwo; //calculates power of 2 till 2^n
    console.log(i + " " + powerOfTwo);
    i = i + 1;
  }
}
var readline = require("readline-sync");
n = readline.question("Enter the index n: ");
console.log("Power of 2 till given number is: ");
calculatePowerOfTwo(parseInt(n));
