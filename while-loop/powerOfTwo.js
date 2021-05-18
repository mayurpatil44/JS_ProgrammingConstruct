//Power of two using while loop

var readline = require("readline-sync");
let num = readline.question("Enter number to get power of 2: ");

let i = 1;
let powerValue = 1;
while (i <= num && powerValue < 256) {
  powerValue = Math.pow(2, i);
  console.log("2 ^ " + i + " =" + powerValue);
  i++;
}
