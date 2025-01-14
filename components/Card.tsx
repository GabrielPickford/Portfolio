import React, { useState, useEffect } from 'react';
import JavascriptIcon from './icons/frontend/JavascriptIcon';
import HtmlIcon from './icons/frontend/HtmlIcon';
import CssIcon from './icons/frontend/CssIcon';
import FigmaIcon from './icons/tools/FigmaIcon';
import ReactIcon from './icons/frontend/ReactIcon';
import NextjsIcon from './icons/backend/NextjsIcon';
import TailwindcssIcon from './icons/frontend/TailwindcssIcon';
import TypescriptIcon from './icons/frontend/TypescriptIcon';
import JavaScriptIcon from './icons/backend/JavaScriptIcon';
import PythonIcon from './icons/backend/PythonIcon';
import GitIcon from './icons/tools/GitIcon';
import GithubIcon from './icons/tools/GithubIcon';
import NpmIcon from './icons/tools/NpmIcon';
import PostgresqlIcon from './icons/learning/PostgresqlIcon';
import SanityIcon from './icons/backend/SanityIcon';

const Card = () => {
    const [WidthIcon, setWidthIcon] = useState('40px');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setWidthIcon('25px');
            } else {
                setWidthIcon('40px');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='flex flex-col '>
            <h2 className="sm:text-left text-center text-4xl font-bold text-yellow-300">Tech Stack</h2>
            <div className="h-0.5 bg-transparent sm:bg-yellow-300 mt-3 w-20" />
            <div className='py-10 grid grid-cols-2 gap-5'>
                <section className='flex flex-col startup-card group items-center'>
                    <h1 className='card_h1'>FrontEnd</h1>
                    <section className='card_grid '>
                        <HtmlIcon width={WidthIcon} />
                        <CssIcon width={WidthIcon} name={"CSS"} />
                        <JavascriptIcon width={WidthIcon} />
                        <ReactIcon width={WidthIcon} name={'ReactJs'} />
                        <TailwindcssIcon width={WidthIcon} name={'TailwindCSS'} />
                        <TypescriptIcon width={WidthIcon} name={'TypeScript'} />
                    </section>
                </section>
                <section className='flex flex-col startup-card group items-center'>
                    <h1 className='card_h1'>BackEnd</h1>
                    <section className='card_grid '>
                        <JavaScriptIcon width={WidthIcon} name={"JavaScript"} />
                        <NextjsIcon width={WidthIcon} name={"NextJS"} />
                        <PythonIcon width={WidthIcon} />
                        <SanityIcon width={WidthIcon} />
                    </section>
                </section><section className='flex flex-col startup-card group items-center'>
                    <h1 className='card_h1'>Learning</h1>
                    <section className='card_grid '>
                        <PostgresqlIcon width={WidthIcon} />
                    </section>
                </section><section className='flex flex-col startup-card group items-center'>
                    <h1 className='card_h1'>Tools</h1>
                    <section className='card_grid '>
                        <FigmaIcon width={WidthIcon} />
                        <GitIcon width={WidthIcon} />
                        <GithubIcon width={WidthIcon} />
                        <NpmIcon width={WidthIcon} />
                    </section>
                </section>
            </div>
        </div>
    )
}
//href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
export default Card
