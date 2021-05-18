let maxValue = 0;
let minValue = 1000;
for (i = 1; i <= 5; i++) {
  num = Math.floor(Math.random() * 900) + 99;
  console.log(num);
  if (maxValue < num) maxValue = num;
  if (minValue > num) minValue = num;
}
console.log("Maximum Value  :" + maxValue);
console.log("Minimum Value  :" + minValue);
