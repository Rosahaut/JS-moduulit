document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('searchForm');
  const jokes = document.getElementById('jokes');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`).
        then(response => response.json()).
        then(data => {
          jokes.innerHTML = '';
          data.result.forEach(joke => {
            const article = document.createElement('article');
            article.innerHTML = `<p>${joke.value}</p>`;
            jokes.appendChild(article);
          });
        }).
        catch(error => console.error('Error fetching Chuck Norris jokes:',
            error));
  });
});
