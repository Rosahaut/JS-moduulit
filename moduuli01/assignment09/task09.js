'use strict';

const number = parseInt(prompt('Enter an integer:'));

let isPrimeNumber = true;
if (number <= 1) {
  isPrimeNumber = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }
}

if (isPrimeNumber) {
  document.getElementById(
      'result').innerText = `${number} is a prime number.`;
} else {
  document.getElementById(
      'result').innerText = `${number} is not a prime number.`;
}