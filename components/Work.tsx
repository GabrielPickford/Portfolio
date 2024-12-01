import React from 'react'
import RightCard from '@/components/RightCard'
import LeftCard from './LeftCard'

const Interests = () => {
  return (
    <div className='p-10' id="projects">
      <section className='flex flex-col justify-center items-center'>
        <h1 className='font-work-sans font-bold text-secondary sm:text-[48px] sm:leading-[64px] text-[24px] leading-[46px] text-center'>
          My work
        </h1>
        {/* <div className='h-1 w-[200px] bg-secondary'></div> */}
      </section>
      <section className='flex'>
        <RightCard
          title="Atelier"
          image="/assets/atelier.png"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier" />
      </section>
      <section className='flex'>
        <LeftCard
          title="Atelier"
          image="/assets/golosa.png"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier" />
      </section>
    </div>
  )
}

export default Interests
