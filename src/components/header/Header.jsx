import React from 'react';
import Navbar from '../navbar/Navbar';
import { images } from '../../constants';
import './header.css';

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header__2">
        <div className="app__header__title-column">
          <div className="app__header__title-box">
            <div className="app__header__dots">
              <img src={images.dots1} alt="." />
            </div>
            <div className="app__header__title-box2">
              <div className="app__header__title">Front-End React Developer</div>
              <div className="app__header__line" />
              <div className="app__header__paragraph">
                Hi, I'm Gabriel Tambare. A passionate Front-end React
                Developer based in Santa Cruz, Bolivia.
              </div>
              <div className="app__header__logos">
                <div className="app__header__github-logo">
                  <a href="#github"><img src={images.github} alt="github" /></a>
                </div>
                <div className="app__header__linkedin-logo">
                  <a href="#linkedin"><img src={images.linkedin} alt="linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__header__photo-column">
          <div className="app__header__portrait">
            <img src={images.portrait} alt="portrait" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

