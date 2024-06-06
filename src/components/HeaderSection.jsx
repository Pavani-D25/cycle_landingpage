
import React from 'react';
import '../style/HeaderSection.css';

const HeaderSection = () => {
  return (
    <div className="header">
      <div className='container'>
        <div className='first'>
          <h2>Dream trip</h2>
          <p className="typewriter" >Experience cycling bliss. Ride beyond expectations every day."</p>
          <span>999.98$</span>
        </div>
        <a href="">Pay for <i className='fa fa-angle-right'></i></a>
        <div className='left'>
          <i className='fa fa-facebook'></i>
          <i className='fa fa-twitter'></i>
          <i className='fa fa-google'></i>

        </div>
        <ul className='right'>
          <li>20 Inches</li>
          <li>60 Knife</li>
          <li>30 Speed</li>
        </ul>
      </div>
      {/* <h1 className="typewriter">Hello World!!!</h1> */}
    </div>
  );
};

export default HeaderSection;
