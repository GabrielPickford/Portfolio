import React from 'react';
import './rprojects.css';

const Rprojects= ({ title, image, description, site }) => {
  return (
    <div className="app__work__div-4">
      <div className="app__work__div-5">
        <a className="app__work__column" href={site} target='blank'>
          <img src={image} className='app__work__img' alt='franchesco bergolini' />
        </a>
        <div className="app__work__column-2">
          <div className="app__work__div-6">
          <div className="app__work__title">{title}</div>
            <div className="app__work__description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rprojects;