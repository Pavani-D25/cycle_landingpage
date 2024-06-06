import React from 'react';
import '../style/NavBar.css';  
import logo from '../assets/logo.png';
import 'boxicons/css/boxicons.min.css';  

const NavBar = () => {
  return (
    <header>
      <div className='navbar' >
        <div className='logo'>
        <img src={logo} alt="Logo" />
          
        </div>
        <ul className='links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Bicycle</a></li>
          <li><a href="#">Equipments</a></li>
          <li><a href="#">Dealer</a></li>
          <li><a href="#">Club</a></li>
        </ul>
        <div className='icons'>
          <i className='fa fa-search'></i>
          <i className='fa fa-bell'></i>
        </div>
      </div>

      </header>

  );
};

export default NavBar;
