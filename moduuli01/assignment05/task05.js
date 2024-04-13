'use strict';

const year = parseInt(prompt('Enter a year:'));

let LeapYear = false;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      LeapYear = true;
    }
  } else {
    LeapYear = true;
  }
}

let result;
if (LeapYear) {
  result = `${year} is a leap year.`;
} else {
  result = `${year} is not a leap year.`;
}
document.getElementById('result').textContent = `${result}`;