import React from 'react';
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';
import './work.css';

const Work = () => {
  return (
    <div >
      Work
      <div className='pro__a' >
        <div className='pro__img'>
          <a target='blank'  href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <img src={f1} className='img' alt='franchesco bergolini' />
          </a>
        </div>
        <div className='pro__text'>
          <h2>Nombre del sitio web</h2>
          <p>Descripcion de la pagina</p>
          <div className='pro__links'>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Code</a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Web Demo</a>
          </div>
        </div>
      </div>
      <div className='pro__a' >
        <div className='pro__img'>
          <a target='blank'  href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <img src={f2} className='img' alt='franchesco bergolini' />
          </a>
        </div>
        <div className='pro__text'>
          <h2>Nombre del sitio web</h2>
          <p>Descripcion de la pagina</p>
          <div className='pro__links'>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Code</a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Web Demo</a>
          </div>
        </div>
      </div>
      <div className='pro__a' >
        <div className='pro__img'>
          <a target='blank'  href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <img src={f3} className='img' alt='franchesco bergolini' />
          </a>
        </div>
        <div className='pro__text'>
          <h2>Nombre del sitio web</h2>
          <p>Descripcion de la pagina</p>
          <div className='pro__links'>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Code</a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Web Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;