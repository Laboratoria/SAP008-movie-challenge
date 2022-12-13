import React from 'react';
import { Link } from 'react-router-dom';
import "./movie.css";

const Movie = () =>{
  return (
    <div>
      <header >
        <nav className='navbar'>
          <ul className='ulNav'>
            <li>
              <Link to="/" className='btnMenu'><img src='assets/inicio.png' alt='Inicio'/></Link>
            </li>
            <li>
              <Link to="/serie" className='btnMenu'><img src='assets/série.png' alt="Séries"/></Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='contentPage'>
      </main>
    </div>
  );
};

export default Movie;