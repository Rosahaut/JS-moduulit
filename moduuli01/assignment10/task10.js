'use strict';

const diceCount = parseInt(prompt('Enter the number of dice:'));
const targetSum = parseInt(prompt('Enter the target sum:'));

let successRate = 0;
let replays = 10000;
for (let i = 0; i < replays; i++) {
  let sum = 0;
  for (let j = 0; j < diceCount; j++) {
    let rand = Math.floor(Math.random() * 6) + 1;
    sum += rand;
  }
  if (sum === targetSum) successRate++;
}

const odds = successRate / replays * 100;

document.querySelector(
    '#target').innerHTML = `Probability to get sum ${targetSum} with ${diceCount} dice is ${odds.toFixed(
    2)}%.`;