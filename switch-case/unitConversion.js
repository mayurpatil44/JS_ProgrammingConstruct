function unitConversion(input, value) {
  switch (input) {
    case 1:
      let inch = value * 12;
      console.log(value + " Feet = " + inch + " Inch");
      break;
    case 2:
      let meter = value * 0.3048;
      console.log(value + " Feet = " + meter.toFixed(2) + " Meter");
      break;
    case 3:
      let feet = value / 12;
      console.log(value + " Inch = " + feet.toFixed(2) + " Feet");
      break;
    case 4:
      let feetMeter = value * 3.28084;
      console.log(value + " Meter = " + feetMeter.toFixed(2) + " Feet");
      break;
    default:
      console.log("Check your input");
  }
}
console.log("Enter 1 for Feet to Inch");
console.log("Enter 2 for Feet to Meter");
console.log("Enter 3 for Inch to Feet");
console.log("Enter 4 for Meter to Feet");

var readine = require("readline-sync");
let input = readine.question("Choose the option between 1-4: ");
let value = readine.question(
  "Enter the value to get converted into desired unit: "
);
unitConversion(parseInt(input), parseInt(value));
