import React from 'react';
import './lprojects.css';

const Lprojects = ({ title, image, description, site }) => {
  return (
    <div className="app__project">
      <div className="app__project__column-desc rigth_description">
        <div className="app__project__title h__opensans">{title}</div>
        <div className="app__project__description p__opensans">{description}</div>
      </div>
      <a className="app__project__column-photo" href={site} target='blank'>
        <img src={image} className='app__project__img' alt='franchesco bergolini' />
      </a>
    </div>
  );
};

export default Lprojects; 