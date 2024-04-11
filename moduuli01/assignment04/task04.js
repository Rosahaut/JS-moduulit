'use strict';
const name = prompt('Enter student name:');

const selector = Math.floor(Math.random() * 4) + 1;

    let house;
    switch (selector) {
        case 1:
            house = 'Gryffindor';
            break;
        case 2:
            house = 'Slytherin';
            break;
        case 3:
            house = 'Hufflepuff';
            break;
        case 4:
            house = 'Ravenclaw';
            break;
        default:
            house = 'Unknown';
    }

    const outputText = `${name}, you are ${house}!`;
    document.querySelector('#target').innerHTML = outputText;