import React from 'react'

const Navbar = () => {
    return (
      <header className='sticky top-0 flex px-5 py-3 h-[70px] bg-black shadow-2xl font-work-sans justify-between z-50'>
        <a className="content-center h-full sub-heading" href="#projects">Projects</a>
        <a className="content-center h-full text-30-semibold" href="#home">Gabriel Tambare</a>
        <a className="content-center h-full sub-heading" href="#contact">Contact Me</a>
      </header>
    );
  }

export default Navbar