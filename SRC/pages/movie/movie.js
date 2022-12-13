import React from 'react';
//import { Link } from 'react-router-dom';

const Movie = () =>{
  return (
    <div>
      <header >
        <nav class='navbar'>
          <ul class='ulNav'>
            <li><butoon id='home' class='btnMenu'><img src='img/inicio.png' alt='Inicio'/>INICIO</butoon></li>
            <li><button id='series' class='btnMenu'><img src='img/série.png'/>SÉRIES</button></li>
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
const btnSerie = container.querySelector('#series');
console.log(btnSerie);
btnSerie.addEventListener('click', () => {
  window.location.hash = '#series';
});

const btnHome = container.querySelector('#home');
btnHome.addEventListener('click', () => {
  window.location.hash = '#home';
});
*/