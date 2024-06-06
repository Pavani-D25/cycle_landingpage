import { useState } from 'react'
import React, { useEffect } from 'react';
import Aos from 'aos';
import './App.css'
import Header from './components/NavBar';
import HeaderSection from './components/HeaderSection';
import ShoppingCart from './components/ShoppingCart';

import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <Header/>
      <HeaderSection />
      <ShoppingCart />
    </div>
  )
}

export default App
