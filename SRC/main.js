import home from './pages/home/home.js';
import movies from './pages/movie/movie.js';
import series from './pages/serie/serie.js';

const main = document.querySelector('#root');

const routes = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#home':
        main.appendChild(home());
        break;
      case '#movies':
        main.appendChild(movies());
        break;
      case '#series':
        main.appendChild(series());
        break;
      default:
        main.appendChild(home());
    }
  });
};

window.addEventListener('load', () => {
  window.location.hash = '#home';
  routes();
});
