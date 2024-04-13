'use strict';

const rollCount = parseInt(prompt('Enter the number of dice rolls:'));

let sum = 0;

for (let i = 0; i < rollCount; i++) {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  sum += rollResult;
}

document.getElementById(
    'result').textContent = `Sum of all rolls: ${sum}`;