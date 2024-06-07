import React from 'react';
import { LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { images } from '../../constants';
import './header.css';

const Header = () => {
  return (
    <div className="app__header" id='home'>
      {/* <img className="app__header__dots" src={images.dots1} alt="." /> */}
      <div className="app__header__title-column">
        <div className="app__header__title-box">
          <div className="app__header__title">Front-End React Developer</div>
          <div className="app__header__line" />
          <div className="app__header__paragraph p__opensans">
            Hi, I'm Gabriel Tambare. A passionate Front-end React
            Developer based in Santa Cruz, Bolivia.
          </div>
          <div className="app__header__logos">
            <a className="app__header__github-logo" href="https://github.com/GabrielPickford" target='_blank' rel="noreferrer">
              <LuGithub size='2rem' /></a>
            <a className="app__header__linkedin-logo" href="https://www.linkedin.com/in/gabriel-tambare-a38778273/" target='_blank' rel="noreferrer">
              <LiaLinkedin size='2.5rem' /></a>
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

