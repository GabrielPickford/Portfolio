import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar__projects">
        <li className="p__opensans"><a href="#projects">Projects</a></li>
      </div>
      <div className="app__navbar__logo">Gabriel Tambare</div>
      <div className="app__navbar__contact">
        <li className="p__opensans"><a href="#projects">Contact Me</a></li>
      </div>
    </div>
  );
};

export default Navbar;
