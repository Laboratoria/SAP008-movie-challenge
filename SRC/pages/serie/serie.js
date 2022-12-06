/* eslint-disable no-console */
/* eslint-disable no-alert */
export default () => {
  const container = document.createElement('div');
  const template = `
          <header >
            <nav class='navbar'>
              <ul class='ulNav'>
                <li><butoon id='home' class='btnMenu'><img src='img/inicio.png' alt='Inicio'>INICIO</butoon></li>
                <li><butoon id='movies' class='btnMenu'><img src='img/filmes.png' alt='filmes'>FILMES</butoon></li>
                <li><button id='series' class='btnMenu'><img src='img/série.png'>SÉRIES</button></li>
              </ul>
            </nav>
          </header>
          <main class='contentPage'>
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

  const btnHome = container.querySelector('#home');
  btnHome.addEventListener('click', () => {
    window.location.hash = '#home';
  });

  return container;
};
