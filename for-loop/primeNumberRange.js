var readline = require("readline-sync");
var starting_number = readline.question("Enter starting number of range: ");
var ending_number = readline.question("Enter ending number of range: ");
starting_number = parseInt(starting_number);
ending_number = parseInt(ending_number);
for (var i = starting_number + 1; i <= ending_number - 1; i++) {
  //this for loop is for iterating from starting number  to  ending number(i.e.range)

  var flag = 0;
  // this for loop checks the prime number iteratively with given if condition
  for (var j = 2; j <= i - 1; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) console.log(i);
}
