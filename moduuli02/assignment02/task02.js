const num = parseInt(prompt('Number of participants?'));
const names = [];

for (let i = 0; i < num; i++) {
  names.push(prompt('Name of participant: ' + (i + 1)));
}

names.sort();

const listItems = names.map(name => `<li>${name}</li>`);

document.getElementById('num').innerHTML = listItems.join('');