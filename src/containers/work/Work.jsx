import React from 'react';
import './work.css';
import { images } from '../../constants';
import Rprojects from '../../components/rprojects/Rprojects';
import Lprojects from '../../components/lprojects/Lprojects';

const Work = () => {
  return (
    <div className="app__works" >
      <div className="app__work__title">Projects</div>
      <div className="app__work__line" />
      <Rprojects title={"Atelier"} image={images.atelier}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elite"}
        site={"https://atelier-phi.vercel.app/"} />
      <Lprojects title={"Atelier"} image={images.golosa}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elite"} 
        site={"https://golosa.vercel.app/"}/>
    </div>
  );
};

export default Work;
