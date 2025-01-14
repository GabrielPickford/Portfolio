'use client'
import React, { useState, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdOutlineContentCopy } from "react-icons/md";
import Moreinfo from './Moreinfo';
import Card from './Card';

const About = () => {
  const [showLess, setShowLess] = useState(false);
  const lessInfoRef = useRef<HTMLDivElement | null>(null);
  const moreInfoRef = useRef<HTMLAnchorElement | null>(null);

  const click = () => {
    setShowLess(!showLess);
    if (showLess) {
      lessInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      moreInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-work-sans w-full flex flex-col items-center justify-center text-yellow-200" id="contact" >
      <div className="flex flex-col md:flex-row justify-center mt-20 w-full">
        <div className="  flex justify-center items-center w-full md:w-1/2 ">
          <Card />
          {/* <Image
            className=" border-4 border-orange-500 h-84 w-96 object-cover"
            src="/assets/about.png"
            width={2000}
            height={2000}
            alt="portrait" /> */}
        </div>

        {/* text */}
        <div className="flex w-full md:w-1/2 p-12 items-center justify-center" ref={lessInfoRef}>
          <div className='flex flex-col w-[450px] '>
            <h2 className="text-2xl font-bold text-yellow-300">About me</h2>
            <div className="h-0.5 bg-yellow-300 mt-3 w-20" />
            <p className="mt-5 text-md">
              Hey there! I'm Gabriel, a frontend developer who's obsessed with creating smooth, user-friendly experiences. I love building fast, accessible, and stylish interfaces that make users go, "Wow, this is nice!"
              <br /><br />
              Right now, my main stack is Next.js, JavaScript, TypeScript, and Tailwind CSS, but I'm constantly leveling up my skills to stay ahead of the curve and keep things fresh.
              <br /><br />
              I'm also pretty good at rolling with the punches, adapting to new challenges, and finding clever solutions on the fly—because hey, flexibility is key!
            </p>
            <div className="flex gap-5 mt-7">
              {/* <button
                type="button"
                className="button"
                onClick={click}
              >
                {showLess ? 'Less' : 'More'}
              </button> */}

              <a
                href="./Gabriel_Tambare_Resume_Front_end_Developer.pdf"
                download
                className="button text-30-semibold"
                ref={moreInfoRef}
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Moreinfo showMore={showLess} click={click} />
      </div>

      {/* Email */}
      <div className="flex justify-center items-center bg-primary-200 text-white p-14 gap-5 w-full ">
        <div className="text-[5vw] sm:text-[30px] text-30-semibold">josegabriel.jgtc42@gmail.com</div>
        <CopyToClipboard text="josegabriel.jgtc42@gmail.com">
          <button
            type="button"
            onClick={() => toast('Copied', {
              className: 'p-2 font-medium',
              style: {
                backgroundColor: '#ffd900',
                color: 'black'
              }
            })}
          >
            <MdOutlineContentCopy size="2.2rem" className='text-secondary hover:text-gray' />
          </button>
        </CopyToClipboard>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
};
export default About;