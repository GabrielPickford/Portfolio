import React from 'react';
import { images } from '../../constants';
import './footer.css';

const Footer = () => {
  return ( 
    <div className="app__footer">
      <div className="app__footer__2">
        <div className="app__footer__logos">
          <div className="app__header__github-logo">
            <a href="https://github.com/GabrielPickford" target='_blank' rel="noreferrer"><img src={images.github} alt="github" /></a>
          </div>
          <div className="app__header__linkedin-logo">
            <a href="https://www.linkedin.com/in/gabriel-tambare-a38778273/" target='_blank' rel="noreferrer"><img src={images.linkedin} alt="linkedin" /></a>
          </div>
        </div>
        <div className="app__footer__copyright-box">
          <div className="app__footer__copyright">Copyright © 2024. All rights are reserved</div>
        </div>
      </div>
      <div className="app__footer__dots">
        <img src={images.dots2} alt="." />
      </div>
    </div>
  );
};

export default Footer;