const dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt('Give dog name:'));
}

dogs.sort();
dogs.reverse();

for (let dog of dogs) {
  document.getElementById('dogs').innerHTML += `<li>${dog}</li>`;
}

