import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import Chefpages from './components/Chefpages/Chefpages';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className='contentdiv'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chefs' element={<Chefpages />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
