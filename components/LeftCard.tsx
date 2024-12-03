import React from 'react'
import Image from 'next/image'
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

type LProjectsProps = {
    title: string;
    image: string;
    description: string;
    site: string;
    code: string;
};
 
const LeftCard = ({ title, image, description, site, code }: LProjectsProps) => {
    return (
        <div className="flex max-w-screen-xl mx-auto mt-8">
            {/* Descripción del proyecto */}
            <div className="flex flex-col items-center justify-center gap-8 w-2/5">
                <h3 className="text-yellow-400 font-work-sans text-4xl font-bold text-center">{title}</h3>
                <p className="font-work-sans text-xl text-center">{description}</p>

                {/* Logos de GitHub y Sitio Web */}
                <div className="flex justify-center items-center gap-8 text-white">
                    <a href={code} target="_blank" rel="noopener noreferrer">
                        <RiCodeSSlashLine size="2rem" className=' hover:text-gray' />
                    </a>
                    <a href={site} target="_blank" rel="noopener noreferrer">
                        <BiWorld size="2rem" className=' hover:text-gray' />
                    </a>
                </div>
            </div>
            {/* Imagen del proyecto */}
            <a
                className="flex flex-col items-center w-2/3 ml-0"
                href={site}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="relative border-4 border-orange transition-transform transform hover:scale-105 hover:border-orange-500">
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={800}
                        className="object-center w-[55vw]"
                    />
                </div>
            </a>
        </div>
    );
}

export default LeftCard