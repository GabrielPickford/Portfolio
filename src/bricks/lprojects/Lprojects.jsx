import React from 'react';
import { images } from '../../constants';
import './lprojects.css';

const Lprojects= () => {
  return (
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
  );
};

export default Lprojects;