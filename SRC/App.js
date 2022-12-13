import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import Movie from './pages/movie/movie.js';
import Serie from './pages/serie/serie.js';

const App = () => {
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
export default App;