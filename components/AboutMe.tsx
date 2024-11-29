import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-auto overflow-hidden pt-[90px]'>
            <section className='flex items-center justify-center w-full md:w-2/5 p-6'>
                <Image
                    src="/assets/programacion.jpg"
                    alt="DotDager"
                    width={450} height={0}
                    className='border-solid border-2 border-orange-500 rounded-lg shadow-2xl w-full max-w-sm mx-auto' />
            </section>
            <section className='flex flex-col items-center justify-center w-full md:w-3/5 p-6'>
                <h1 className="heading text-center text-3xl md:text-4xl font-bold">¡Hola! Soy Dot Dager.</h1>
                <p className="sub-heading text-base md:text-lg text-left">
                    Soy un creador de contenido que se divierte tanto escribiendo código como disfrutando de una buena conversación sobre filosofía. Pero, si hay algo que realmente me apasiona (más que todo lo demás), son los pepinos. ¡Sí, esos crujientes y frescos vegetales que le dan un toque único a cualquier plato! Mis amigos dicen que tengo una relación especial con ellos… y no podría estar más de acuerdo.
                    <br /><br />
                    Aparte de mi amor por los pepinos, me encanta pasar tiempo con mis gatos, tocar la guitarra, y explorar las profundidades del pensamiento. Este espacio es una pequeña ventana a mi mundo, donde la creatividad, la reflexión y, por supuesto, los pepinos, se dan la mano para mostrar lo que soy.
                    <br /><br />
                    Así que, si te gustan las ideas frescas y algo fuera de lo común, ¡te invito a quedarte y descubrir más de mí!
                </p>
            </section>
        </div>
    )
}

export default AboutMe