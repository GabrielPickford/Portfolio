import React from 'react';
import { images } from '../../constants';
import './header.css';

const Header = () => {
  return (
    <div className="app__header" id='home'>
      <div className="app__header__dots">
        <img src={images.dots1} alt="." />
      </div>
      <div className="app__header__title-column">
        <div className="app__header__title-box">
          <div className="app__header__title">Front-End React Developer</div>
          <div className="app__header__line" />
          <div className="app__header__paragraph">
            Hi, I'm Gabriel Tambare. A passionate Front-end React
            Developer based in Santa Cruz, Bolivia.
          </div>
          <div className="app__header__logos">
            <div className="app__header__github-logo">
              <a href="https://github.com/GabrielPickford" target='_blank' rel="noreferrer"><img src={images.github} alt="github" /></a>
            </div>
            <div className="app__header__linkedin-logo">
              <a href="https://www.linkedin.com/in/gabriel-tambare-a38778273/" target='_blank' rel="noreferrer"><img src={images.linkedin} alt="linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="app__header__photo-column">
          <img className="app__header__portrait" src={images.portrait} alt="portrait" />
      </div>
    </div>
  );
};

export default Header;

