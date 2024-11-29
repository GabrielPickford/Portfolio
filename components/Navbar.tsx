import React from 'react'

const Navbar = () => {
    return (
      <header className='sticky top-0 flex px-5 py-3 h-[70px] bg-black shadow-2xl font-work-sans justify-between index-z'>
        <a className="content-center h-full" href="#projects">Projects</a>
        <a className="content-center h-full" href="#home">Gabriel Tambare</a>
        <a className="content-center h-full" href="#contact">Contact Me</a>
      </header>
    );
  }

export default Navbar