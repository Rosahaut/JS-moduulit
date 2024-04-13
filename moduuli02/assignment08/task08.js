function concat(strings) {
  return strings.reduce((a, b) => a + b);
}

const strings = ['This', 'Causes', 'Me', 'Headache'];

document.getElementById('contact').innerHTML = concat(strings);