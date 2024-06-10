import React from 'react';
import './work.css';
import { images } from '../../constants';
import Rprojects from '../../components/rprojects/Rprojects';
import Lprojects from '../../components/lprojects/Lprojects';

const Work = () => {
  return (
    <div className="app__works" >
      <div className="app__work__main-title h__opensans">Projects</div>
      <div className="app__work__line" />
      <Rprojects title={"Atelier"} image={images.atelier}
        description={"Online store of handmade jewelry"}
        site={"https://atelier-phi.vercel.app/"} />
      <Lprojects title={"Golosa"} image={images.golosa}
        description={"Ice cream shop website"}
        site={"https://golosa.vercel.app/"} />
    </div>
  );
};

export default Work;
