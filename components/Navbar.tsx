import React from 'react'

const Navbar = () => {
    return (
      <header className='sticky top-0 flex px-5 py-3 h-[70px] w-full bg-black shadow-2xl font-work-sans z-50'>
        <a className="flex justify-start items-center h-full w-1/3 sub-heading" href="#projects">Projects</a>
        <a className="flex items-center justify-center content-center h-full w-1/3  text-30-semibold" href="#home">Gabriel Tambare</a>
        <a className="flex justify-end items-center h-full w-1/3  sub-heading" href="#contact">Contact Me</a>
      </header>
    );
  }

export default Navbar