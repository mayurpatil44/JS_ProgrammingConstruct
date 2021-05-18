function isPrimeNumber(num) {
  let temp;
  var isPrime = true;
  for (let i = 2; i <= num / 2; i++) {
    temp = num % i;
    if (temp == 0) {
      isPrime = false;
      break;
    }
  }
  //If isPrime is true then the number is prime else not
  if (isPrime) console.log(num + " is a Prime Number");
  else console.log(num + " is not a Prime Number");
}

var readline = require("readline-sync");
let num = readline.question("Enter the number: ");
isPrimeNumber(parseInt(num));
