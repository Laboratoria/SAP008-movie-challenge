/* eslint-disable no-console */
/* eslint-disable no-alert */
export default () => {
  const container = document.createElement('div');
  const template = `
          <header >
            <nav class='navbar'>
              <ul class='ulNav'>
                <li><butoon id='movies' class='btnMenu'><img src='img/filmes.png' alt='filmes'>FILMES</butoon></li>
                <li><button id='series' class='btnMenu'><img src='img/série.png'>SÉRIES</button></li>
              </ul>
            </nav>
          </header>
          <main class='contentPage'>
            <img src='img/logo-white.png' class='logoSite' alt='logo'>
          </main>`;
  container.innerHTML = template;

  const btnMovie = container.querySelector('#movies');
  console.log(btnMovie);
  btnMovie.addEventListener('click', () => {
    window.location.hash = '#movies';
  });

  const btnSerie = container.querySelector('#series');
  console.log(btnSerie);
  btnSerie.addEventListener('click', () => {
    window.location.hash = '#series';
  });

  return container;
};
