import React, { useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
import { images } from '../../constants';
import './about.css';
import Moreinfo from '../../components/moreinfo/Moreinfoa';

const About = () => {
  const [showLess, setShowLess] = useState(false);
  const lessInfoRef = useRef(null);
  const moreInfoRef = useRef(null);

  const click = () => {
    setShowLess(!showLess);
    if (showLess === true) {
      lessInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      moreInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app__about" id='contact'ref={lessInfoRef}>
      <div className="app__about__info">
        <div className="app__about__img-column">
          <img className="app__about__portrait" src={images.about} alt="portrait" />
        </div>
        <div className="app__about__words-column">
          <div className="app__about__words-padding">
            <div className="app__about__title" >About me</div>
            <div className="app__about__line" />
            <p className="app__about__resume p__opensans">
              Hey, my name is Gabriel, and I'm a Frontend Developer. My
              passion is to create and develop a clean UI/UX for my
              users.
            </p>
            <p className="app__about__resume p__opensans">
              My main stack currently is React in combination with CSS and JavaScript, But I am in constant development learning new useful skills
            </p>
            <div className="app__about__buttons-box">
              <button type="button" className="app__about__button" onClick={click} >
                {showLess ? 'Less' : 'More'}
              </button>
              <a href='./Profile.pdf' download type="button" className="app__about__button" ref={moreInfoRef}
                onClick={() => {}}>
                CV
              </a>
            </div>
          </div>
        </div>
      </div>


      <div>
        <Moreinfo showMore={showLess} click={click} />
      </div>

      <div className="app__about__email-section">
        <div className="app__about__email" id='projects'>josegabriel.jgtc42@gmail.com</div>
        <CopyToClipboard text='josegabriel.jgtc42@gmail.com'>
          <button type="button" className="app__about__button copy"
            onClick={() => toast('Copied',{
              className: 'p__opensans ',
              style: {
                backgroundColor: " #ffd900",
                color: 'black'
              }
            })}>
            Copy
          </button>
        </CopyToClipboard>
        <Toaster position="bottom-center"/>
      </div>
    </div>
  );
};

export default About;

