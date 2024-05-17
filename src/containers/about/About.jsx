import React from 'react';
import { images } from '../../constants';
import './about.css';
import Moreinfo from '../../components/moreinfo/Moreinfo';

const About = () => {
  return (
    <div className="app__about" id='contact'>
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
              <p className="app__about__resume">
                Hey, my name is Gabriel, and I'm a Frontend Developer. My
                passion is to create and develop a clean UI/UX for my
                users.  
              </p>
              <p className="app__about__resume">My main stack currently is React in
                combination with CSS and JavaScript, But I am in constant development learning new useful skills</p>
              <div className="app__about__buttons-box">
              <button type="button" className="app__about__button">More</button>
              <button type="button" className="app__about__button">CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Moreinfo/>
      <div className="app__about__email-section">
        <div className="app__about__email-box">
          <div className="app__about__email">josegabriel.jgtc42@gmail.com</div>
          <button type="button" className="app__about__button" id='projects'>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default About;
