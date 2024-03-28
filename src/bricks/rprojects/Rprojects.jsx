import React from 'react';
import { images } from '../../constants';
import './rprojects.css';

const Rprojects= () => {
  return (
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
  );
};

export default Rprojects;