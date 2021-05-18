function printHarmonicSeries(num) {
  var sum = 0;
  console.log(" Harmonic Series :");
  for (let i = 1; i <= num; i++) {
    console.log("1/" + i + "+");
    sum = sum + 1 / i; //computes the  sum of harmonic series upto given number
  }
  console.log("=" + sum.toFixed(2));
}

var readline = require("readline-sync");
num = readline.question("Enter the number to get harmonic: ");
printHarmonicSeries(parseInt(num));
