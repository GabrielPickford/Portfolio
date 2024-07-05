import React from 'react';
import { RiCodeSSlashLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import './rprojects.css';

const Rprojects = ({ title, image, description, site, code }) => {
  return (
    <div className="app__project">
      <a className="app__project__column-photo" href={site} target='blank'>
        <img src={image} className='app__project__img' alt='franchesco bergolini' />
      </a>
      <div className="app__project__column-desc rigth_description">
        <div className="app__project__title h__opensans">{title}</div>
        <div className="app__project__description p__opensans">{description}</div>
        <div className="app__project__logos">
          <a className="app__project__github-logo" href={code} target='_blank' rel="noreferrer">
          <RiCodeSSlashLine size='2rem' /></a>
          <a className="app__project__website-logo" href={site} target='_blank' rel="noreferrer">
          <BiWorld size='2rem'/></a>
        </div>
      </div>
    </div>
  );
};

export default Rprojects;
