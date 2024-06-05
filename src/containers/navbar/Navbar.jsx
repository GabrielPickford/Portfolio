import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar__projects p__opensans"><a href="#projects">Projects</a></div>
      <div className="app__navbar__logo"><a href="#home">Gabriel Tambare</a></div>
      <div className="app__navbar__contact p__opensans"><a href="#contact">Contact Me</a> </div>
    </div>
  );
};

export default Navbar; 
