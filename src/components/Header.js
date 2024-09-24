
import React from 'react';
import './Header.css';
import Logo from '../assets/icons/dphi logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="DPhi Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
