import React from 'react'

const Navbar = () => {
  return (
    <>
      <div id="home"></div>
      <header className='sticky top-0 flex px-5 py-3 h-[70px] w-full bg-black shadow-2xl font-work-sans z-50'>
        <div className="flex justify-start items-center h-full w-1/3 sub-heading" ><a className=' hover:text-gray' href="#projects">Projects</a></div>
        <div className="flex items-center justify-center content-center h-full w-1/3  text-30-semibold"><a className=' hover:text-gray' href="#home">Gabriel Tambare</a></div>
        <div className="flex justify-end items-center h-full w-1/3  sub-heading "><a className=' hover:text-gray' href="#contact">About Me</a></div>
      </header>
    </>
  );
}

export default Navbar