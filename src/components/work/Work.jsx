import React from 'react';
import { images } from '../../constants';
import './work.css';

const Work = () => {
  return (
    <div className="app__work__div">
    <div className="app__work__div-2">Projects</div>
    <div className="app__work__div-3" />
    <div className="app__work__div-4">
      <div className="app__work__div-5">
        <div className="app__work__column">
          <img src={images.golosa} className='app__work__img' alt='franchesco bergolini' />
        </div>
        <div className="app__work__column-2">
          <div className="app__work__div-6">
            <div className="app__work__div-7">Golosa</div>
            <div className="app__work__div-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="app__work__div-9">
      <div className="app__work__div-10">
        <div className="app__work__column-3">
          <div className="app__work__div-11">
            <div className="app__work__div-12">Atelier</div>
            <div className="app__work__div-13">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>
          </div>
        </div>
        <div className="app__work__column-4">
          <img src={images.atelier} className='app__work__img' alt='franchesco bergolini' />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Work;
