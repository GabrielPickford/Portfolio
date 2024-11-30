import React from 'react'
import RightCard from '@/components/RightCard'
import LeftCard from './LeftCard'

const Interests = () => {
  return (
    <div className='pt-10 pb-10 ' id="projects">
      <section className='flex'>
        <h1 className='text-center uppercase px-6 py-3 font-work-sans font-extrabold text-white sm:text-[36px] sm:leading-[64px] text-[24px] leading-[46px] w-full my-5'>Lo que puedo hacer por tí</h1>
      </section>
      <section className='flex'>
        <RightCard
          title="Atelier"
          image="/assets/atelier.png"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier"/>
      </section>
      <section className='flex'>
      <LeftCard
          title="Atelier"
          image="/assets/golosa.png"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier"/>
          
      </section>
    </div>
  )
}

export default Interests