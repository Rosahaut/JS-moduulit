const nums = [];
let number = 0;
do {
  number = parseFloat(prompt('Give number (enter 0 to end)'));
  if (number !== 0) {
    nums.push(number);
  }
} while (number !== 0);

nums.sort((a, b) => b - a);

console.log(nums);