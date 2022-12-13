
import React from 'react';
//import { Link } from 'react-router-dom';

const Movie = () =>{
  return (
    <div>
      <header >
        <nav class='navbar'>
          <ul class='ulNav'>
            <li><butoon id='home' class='btnMenu'><img src='img/inicio.png' alt='Inicio'/>INICIO</butoon></li>
            <li><butoon id='movies' class='btnMenu'><img src='img/filmes.png' alt='filmes'/>FILMES</butoon></li>
          </ul>
        </nav>
      </header>
      <main class='contentPage'>
      </main>
    </div>
  );
}

export default Movie;

/*
const btnMovie = container.querySelector('#movies');
console.log(btnMovie);
btnMovie.addEventListener('click', () => {
  window.location.hash = '#movies';
});

const btnHome = container.querySelector('#home');
btnHome.addEventListener('click', () => {
  window.location.hash = '#home';
});
*/

