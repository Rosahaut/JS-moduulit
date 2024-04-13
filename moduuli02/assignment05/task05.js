const numbers = [];

while (true) {
  let number = parseFloat(
      prompt('Give number: (Stops when a repeat number is given)'));
  if (!numbers.includes(number)) {
    numbers.push(number);
  } else {
    break;
  }
}
numbers.sort((a, b) => a - b);
console.log(numbers);