import React from 'react'
import Image from 'next/image'
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row w-full md:h-[80vh] bg-secondary'>
            <section className='flex flex-col items-center justify-center w-full md:w-3/5 p-4 text-black'>
                <h1 className="heading text-center ">Gabriel Tambare</h1>
                <p className="sub-heading text-base text-center ">Software Engineer / Frontend Developer</p>
                <div className='flex p-10 gap-8 justify-center'>
                    <a className="app__header__github-logo" href="https://github.com/GabrielPickford" target='_blank' rel="noreferrer">
                        <TbBrandGithub size='2rem' /></a>
                    <a className="app__header__linkedin-logo" href="https://www.linkedin.com/in/gabriel-tambare-a38778273/" target='_blank' rel="noreferrer">
                        <AiOutlineLinkedin size='2.15rem' /></a>
                </div>
            </section>
            <section className='flex items-center justify-center w-full md:w-2/5 sm:pr-12 pr-0 pt-[80px]'>
                <Image
                    src="/assets2/portrait3.png"
                    alt="Portrait"
                    width={20000} height={0}
                    className='w-[420px]  border-solid border-8 border-primary-100 shadow-2xl ' />
            </section>
        </div>
    )
}

export default Header
