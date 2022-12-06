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
        <section class='midiasDigitais'>
          <a href='' class='redessSociais'><img src='img/insta.png' alt='Instagram'></a>
          <a href='' class='redessSociais'><img src='img/twitter.png' alt='twitter'></a>
          <a href='' class='redessSociais'><img src='img/youtube.png' alt='youtuber'></a>
        </section>
        <img src='img/logo-white.png' class='logoSite' alt='logo'>
      </main>
      <footer>
        <p class='textFooter'>&copy; Desenvolvido por <a href='https://www.linkedin.com/in/andresa-vieira/' class='link'>Andresa Vieira</a></p>
      </footer>`;
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
