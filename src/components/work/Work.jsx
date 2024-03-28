import React from 'react';
import './work.css';
import Rprojects from '../../bricks/rprojects/Rprojects';
import Lprojects from '../../bricks/lprojects/Lprojects';

const Work = () => {
  return (
    <div className="app__work__div">
      <div className="app__work__div-2">Projects</div>
      <div className="app__work__div-3" />
      <Rprojects />
      <Lprojects />
    </div>
  );
};

export default Work;
