'use strict';
const num1= parseInt(prompt('Enter the first integer:'));
const num2 = parseInt(prompt('Enter the second integer:'));
const num3 = parseInt(prompt('Enter the third integer:'));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

const outputText = `Sum: ${sum}, Product: ${product}, Average: ${average}`;
document.querySelector('#target').innerHTML = outputText;
