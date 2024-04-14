const element = document.querySelector('#target');

function addList(text) {
  const list = document.createElement('li');
  list.innerText = text;
  return list;
}

element.appendChild(addList('First item'));
const list = addList('Second item');
list.className = 'my-item';
element.appendChild(list);
element.appendChild(addList('Third item'));