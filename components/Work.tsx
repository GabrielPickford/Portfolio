import React from 'react'
import Card from '../components/Card'
import RightCard from '@/components/RightCard'

const Interests = () => {
  return (
    <div className='pt-10 '>
      <section className='flex'>
        <h1 className='text-center uppercase px-6 py-3 font-work-sans font-extrabold text-white sm:text-[36px] sm:leading-[64px] text-[24px] leading-[46px] w-full my-5'>Lo que puedo hacer por tí</h1>
      </section>
      <section className='flex'>
        <RightCard
          title="Atelier"
          image="/assets/guitarra.jpg"
          description="Website designed from scratch with Figma and created with React for a handmade jewelry store"
          site="https://atelier-phi.vercel.app/"
          code="https://github.com/GabrielPickford/Atelier"/>
      </section>
      <section className='w-full overflow-hidden p-5 pb-10 grid md:grid-cols-3 sm:grid-cols-2 gap-3'>
        <Card
          image="/assets/programacion.jpg"
          title="Programador"
          text="Transformando ideas en código, con pasión y precisión."
        />
        <Card
          image="/assets/guitarra.jpg"
          title="Músico"
          text="Sí, me sé la de lamento boliviano."
        />
        <Card
          image="/assets/pepinos.jpg"
          title="Comedor de pepinos"
          text="Servicios a domicilio, sólo interesados serios."
        />
        <Card
          image="/assets/filosofia.jpg"
          title="Filósofo"
          text="Te doy crisis existenciales y más."
        />
        <Card
          image="/assets/streaming.jpg"
          title="Streamer"
          text="De vez en cuando."
        />
        <Card
          image="/assets/gatos.jpg"
          title="Cuidador de gatos"
          text="Soy el especialista en acariciar gatos, aunque ellos decidan cuándo."
        />
      </section>
    </div>
  )
}

export default Interests