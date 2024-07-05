import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="app__navbar">
      <a className="app__navbar__projects p__opensans" href="#projects">Projects</a>
      <div className="app__navbar__logo-box"><a className="app__navbar__logo" href="#home">Gabriel Tambare</a></div>
      <a className="app__navbar__contact p__opensans" href="#contact">Contact Me</a>
    </div>
  );
};

export default Navbar;
