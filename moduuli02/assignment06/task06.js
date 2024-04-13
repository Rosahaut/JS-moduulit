function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

let roll = 0;
while (roll !== 6) {
  roll = diceRoll();
  document.getElementById('roll').innerHTML += `<li>${roll}</li>`;
}