// Work.tsx

import React from 'react'
import RightCard from '@/components/RightCard'
import LeftCard from './LeftCard'

// Importar los íconos
import ReactIcon from './icons/frontend/ReactIcon'
import NextjsIcon from './icons/backend/NextjsIcon'
import TypescriptIcon from './icons/frontend/TypescriptIcon'
import TailwindcssIcon from './icons/frontend/TailwindcssIcon'
import JavaScriptIcon from './icons/backend/JavaScriptIcon'
import CssIcon from './icons/frontend/CssIcon'

const Interests = () => {
  return (
    <div className='p-5' id="projects">
      <section className='flex flex-col justify-center items-center'>
        <h1 className='font-work-sans font-bold text-secondary text-4xl sm:leading-[64px] leading-[46px] text-center'>
          My work
        </h1>
      </section>

      <section className='flex'>
        <RightCard
          title="DotDager"
          image="/assets/atelier.png"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier"
          Icon={ReactIcon} 
          Icon2={TypescriptIcon} 
          Icon3={TailwindcssIcon} 
        />
      </section>

      <section className='flex'>
        <LeftCard
          Заголовок="Atelier"
          image="/assets/golosa.png"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier"
          Icon={NextjsIcon} 
          Icon2={TypescriptIcon} 
          Icon3={TailwindcssIcon} 
        />
      </section>

      <section className='flex'>
        <RightCard
          title="Atelier"
          image="/assets/atelier.png"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier"
          Icon={ReactIcon} 
          Icon2={JavaScriptIcon} 
          Icon3={CssIcon} 
        />
      </section>
    </div>
  )
}

export default Interests;
