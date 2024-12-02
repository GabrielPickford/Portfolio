import React from 'react'
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

const WidthIcon = '50px'
const Card = () => {
    return (
        <div className='py-10 grid md:grid-cols-2 sm:grid-cols-2 gap-5'>
            <section className='flex flex-col startup-card group items-center'>
                <h1 className='text-30-semibold pb-3'>FrontEnd</h1>
                <section className='card_grid '>
                    <HtmlIcon width={WidthIcon} />
                    <CssIcon width={WidthIcon} />
                    <JavascriptIcon width={WidthIcon} />
                    <ReactIcon width={WidthIcon} />
                    <TailwindcssIcon width={WidthIcon} />
                    <TypescriptIcon width={WidthIcon} />
                </section>
            </section>
            <section className='flex flex-col startup-card group items-center'>
                <h1 className='text-30-semibold pb-3'>BackEnd</h1>
                <section className='card_grid '>
                    <JavaScriptIcon width={WidthIcon} />
                    <NextjsIcon width={WidthIcon} />
                    <PythonIcon width={WidthIcon} />
                    <SanityIcon width={WidthIcon} />
                </section>
            </section><section className='flex flex-col startup-card group items-center'>
                <h1 className='text-30-semibold pb-3'>Learning</h1>
                <section className='card_grid '>
                    <PostgresqlIcon width={WidthIcon} />
                </section>
            </section><section className='flex flex-col startup-card group items-center'>
                <h1 className='text-30-semibold pb-3'>Tools</h1>
                <section className='card_grid '>
                    <FigmaIcon width={WidthIcon} />
                    <GitIcon width={WidthIcon} />
                    <GithubIcon width={WidthIcon} />
                    <NpmIcon width={WidthIcon} />
                </section>
            </section>
        </div>

    )
}
//href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
export default Card
