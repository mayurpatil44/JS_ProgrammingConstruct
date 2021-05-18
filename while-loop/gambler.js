// Gambler problem

let money = 100;
const GOAL = 200; //Goal for gambling
const BET_MONEY = 1;
let bets = 0; // for bet recording
let wins = 0; // for wins
while (money === 0 || money < GOAL) {
  bets++;
  if (Math.floor(Math.random() * 10) % 2 === 1) {
    money += BET_MONEY;
    wins++;
  } else money -= BET_MONEY;
}
console.log(
  "Out of " + bets + " gambler bets, number of gambler wins are :" + wins
);
