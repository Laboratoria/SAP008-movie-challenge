import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  return (
  <div>
    <header >
      <nav className='navbar'>
        <ul className='ulNav'>
          <li>
            <Link to="/movie" className='btnMenu'><img src='../../assets/filmes.png' alt='Filmes'/></Link>
          </li>
          <li>
            <Link to="/serie" className='btnMenu'><img src='../../assets/série.png' alt="Séries"/></Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className='contentPage'>
      <section className='midiasDigitais'>
        <Link to='' className='redessSociais'><img src='img/insta.png' alt='Instagram'/></Link>
        <Link to='' className='redessSociais'><img src='img/twitter.png' alt='twitter'/></Link>
        <Link to='' className='redessSociais'><img src='img/youtube.png' alt='youtuber'/></Link>
      </section>
      <img src='assets/logo-white.png' className='logoSite' alt='logo'/>
    </main>
    <footer>
      <p className='textFooter'>&copy; Desenvolvido por <Link to='https://www.linkedin.com/in/andresa-vieira/' className='link'>Andresa Vieira</Link></p>
    </footer>
  </div>
  );
};

export default Home;