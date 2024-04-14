'use strict';
const tvMaze = 'https://api.tvmaze.com/search/shows?q=';
const section = document.getElementById('target');
const dialog = document.querySelector('dialog');
const dialogFrame = document.querySelector('dialog iframe');

async function getter(url, arg) {
  const response = await fetch(url + arg);
  return await response.json();
}

async function maker(arg) {
  const data = await getter(tvMaze, arg);
  for (let show of data) {
    const article = document.createElement('article');

    const heading = document.createElement('h2');
    heading.innerText = show['show']['name'];
    article.appendChild(heading);

    const image = document.createElement('img');
    try {
      image.setAttribute('src', show['show']['image']['medium']);
      image.setAttribute('alt', show['show']['name']);
    } catch (error) {
      image.setAttribute('src',
          'https://via.placeholder.com/210x295?text=img+not+found');
    }
    article.appendChild(image);

    const genres = document.createElement('p');
    genres.setAttribute('id', 'genre');
    for (let i = 0; i < show['show']['genres'].length; i++) {
      genres.innerText += show['show']['genres'][i];
      if (i < show['show']['genres'].length - 1) {
        genres.innerText += ' | ';
      }
    }
    article.appendChild(genres);

    article.insertAdjacentHTML('beforeend', show['show']['summary']);

    const link = document.createElement('a');
    link.setAttribute('href', show['show']['url']);
    link.setAttribute('target', '_blank');
    link.innerText = 'Learn more';
    article.appendChild(link);

    section.appendChild(article);
  }
}

document.querySelector('.container form').
    addEventListener('submit', function(evt) {
      evt.preventDefault();
      section.innerHTML = '';
      const name = document.getElementById('query');
      maker(name.value);
    });

getter(tvMaze, 'high').then((result) => {
  console.log(result);
});
