//flip coin to check winner by tossing 11 times
let noOfTails = 0;
let noOfHeads = 0;
while (noOfHeads < 11 && noOfTails < 11) {
  let toss = Math.floor(Math.random() * 10) % 2;
  if (toss === 0) noOfHeads++;
  else noOfTails++;
}
console.log(
  "No of head wins are : " + noOfHeads + " No of tail wins are : " + noOfTails
);
