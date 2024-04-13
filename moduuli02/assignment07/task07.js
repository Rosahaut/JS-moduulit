function diceRoll(number_of_faces) {
  return Math.floor(Math.random() * number_of_faces) + 1;
}

const faces = parseInt(prompt('How many sides on your dice?'));
let roll = 0;
while (roll !== faces) {
  roll = diceRoll(faces);
  document.getElementById('sides').innerHTML += `<li>${roll}</li>`;
}