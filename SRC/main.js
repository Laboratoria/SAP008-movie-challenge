
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home.js';
import { Movie } from './pages/movie/movie.js';
import { Serie } from './pages/Serie/Serie.js';

const RouterApplication = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/serie' element={<Serie />} />
      </Routes> 
    </BrowserRouter>
  )
};
export default RouterApplication;

/*
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
*/
