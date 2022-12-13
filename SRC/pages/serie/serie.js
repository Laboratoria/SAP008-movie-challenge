import React from 'react';
import { Link } from 'react-router-dom';
import "./serie.css";

const Serie = () =>{
  return (
    <div>
      <header >
        <nav className='navbar'>
          <ul className='ulNav'>
            <li>
              <Link to="/" className='btnMenu'><img src='./assets/inicio.png' alt='Inicio'/>Home</Link>
            </li>
            <li>
              <Link to="/movie" className='btnMenu'><img src='./assets/filmes.png' alt='Filmes'/>Filmes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='contentPage'>
      </main>
    </div>
  );
};

export default Serie;