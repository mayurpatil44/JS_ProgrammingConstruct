function displayUnit(digitPlace) {
  switch (digitPlace) {
    case 1:
      console.log("Units");
      break;
    case 10:
      console.log("Tens");
      break;
    case 100:
      console.log("Hundreds");
      break;
    case 1000:
      console.log("Thousands");
      break;
    case 10000:
      console.log("Ten Thousands");
      break;
    case 100000:
      console.log("Lakhs");
      break;
    case 1000000:
      console.log("Ten Lakhs");
      break;
    case 10000000:
      console.log("Crores");
      break;
    case 100000000:
      console.log("Ten Crores");
      break;
    default:
      console.log("Invalid unit");
  }
}

var readline = require("readline-sync");
var digitPlace = readline.question("Enter the place ");
displayUnit(parseInt(digitPlace));
