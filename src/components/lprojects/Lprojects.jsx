import React from 'react';
import './lprojects.css';

const Lprojects= ({ title, image, description, site }) => {
  return (
    <div className="app__work__div-9">
      <div className="app__work__div-10">
        <div className="app__work__column-3">
          <div className="app__work__div-11">
            <div className="app__work__title">{title}</div>
            <div className="app__work__description">{description}</div>
          </div>
        </div>
        <a className="app__work__column-4" href={site} target='blank'>
          <img src={image} className='app__work__img' alt='franchesco bergolini' />
        </a>
      </div>
    </div>
  );
};

export default Lprojects; 