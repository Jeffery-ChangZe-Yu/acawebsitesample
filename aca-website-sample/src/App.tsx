import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import Chefpages from './components/Chefpages/Chefpages';
import Home from './components/Home/Home';
import About from './components/About/About';
import Chefpage from './components/Chefpages/Chefpage/Chefpage';


function App() {
  return (
    <div className="App">
      <title>ACF-ACA</title>
      <BrowserRouter>
      <NavBar />
      <div className='contentdiv'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chefs' element={<Chefpages />} />
        <Route path='/chefs/:link' element={<Chefpage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
