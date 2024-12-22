import React from 'react';

const Navbar = () => {
  return (
    <>
      <div id="home"></div>
      <header className='sticky top-0 flex px-5 py-3 h-[70px] w-full bg-black shadow-2xl font-work-sans z-50'>
        {/* Sección de Projects */}
        <div className="hidden sm:flex justify-start items-center h-full w-1/3 text-white ">
          <a className=' hover:text-gray' href="#projects">Projects</a>
        </div>

        {/* Logo centrado */}
        <div className="flex items-center justify-center content-center h-full w-1/3 text-white text-[30px] font-semibold flex-grow sm:justify-center">
          <a href="#home" className="hover:text-gray">Gabriel Tambare</a>
        </div>

        {/* Sección de About Me (Contact) */}
        <div className="hidden sm:flex justify-end items-center h-full w-1/3 text-white">
          <a className=' hover:text-gray' href="#contact">About Me</a>
        </div>
      </header>
    </>
  );
}

export default Navbar;

