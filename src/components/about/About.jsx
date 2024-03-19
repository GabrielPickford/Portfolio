import React from 'react';
import { images } from '../../constants';
import './about.css';

const About = () => {
  return (
    <div className="app__about">
      <div className="app__about__info">
        <div className="app__about__info-box">
          <div className="app__about__img-column">
            <div className="app__about__portrait">
              <img src={images.about} alt="portrait" />
            </div>
          </div>
          <div className="app__about__words-column">
            <div className="app__about__words-padding">
              <div className="app__about__title">About me</div>
              <div className="app__about__line" />
              <div className="app__about__resume">
                Hey, my name is Gabriel, and I'm a Frontend Developer. My
                passion is to create and develop a clean UI/UX for my
                users.My main stack currently is React/Next.js in
                combination with Tailwind CSS and TypeScript.
              </div>
              <div className="app__about__buttons-box">
              <button type="button" className="app__about__button">More</button>
              <button type="button" className="app__about__button">CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__about__email-section">
        <div className="app__about__email-box">
          <div className="app__about__email">josegabriel.jgtc42@gmail.com</div>
          <div className="app__about__button">
          <button type="button" className="app__about__button">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
