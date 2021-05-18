var readline = require("readline-sync");
console.log("date between March 20 and June 20");
var date1 = readline.question("Enter date in (numbers): ");
var month = readline.question("Enter month in words: ");
if (month == "march" && date1 >= 20 && date1 < 31) console.log("True");
else if (month == "april" && date1 < 30) console.log("True");
else if (month == "may" && date1 < 31) console.log("True");
else if (month == "june" && date1 < 20) console.log("True");
else {
  console.log("False");
}
