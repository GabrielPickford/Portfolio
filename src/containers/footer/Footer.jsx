import React from 'react';
import { LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { images } from '../../constants';
import './footer.css';

const Footer = () => {
  return (
    <div className="app__footer">
        <div className="app__footer__logos">
          <a className="app__header__github-logo" href="https://github.com/GabrielPickford" target='_blank' rel="noreferrer">
          <LuGithub size='2rem' /></a>
          <a href="https://www.linkedin.com/in/gabriel-tambare-a38778273/" target='_blank' rel="noreferrer">
          <LiaLinkedin size='2.5rem'/></a>
        </div>
        <div className="app__footer__copyright-box">
          <div className="app__footer__copyright">Copyright © 2024. All rights are reserved</div>
        </div>
      <img className="app__footer__dots" src={images.dots2} alt="." />
    </div>
  );
};

export default Footer;