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
        document.querySelector('#target').innerHTML = `${number} is a prime number.`;
    } else {
        document.querySelector('#target').innerHTML = `${number} is not a prime number.`;
    }