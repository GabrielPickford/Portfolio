import React from 'react';
import './rprojects.css';

const Rprojects = ({ title, image, description, site }) => {
  return (
    <div className="app__project">
      <a className="app__project__column-photo" href={site} target='blank'>
        <img src={image} className='app__project__img' alt='franchesco bergolini' />
      </a>
      <div className="app__project__column-desc rigth_description">
        <div className="app__project__title">{title}</div>
        <div className="app__project__description p__opensans">{description}</div>
      </div>
    </div>
  );
};

export default Rprojects;
