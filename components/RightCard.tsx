import React from 'react'
import Image from 'next/image'
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

// Asegurarse de que la prop Icon reciba un componente con las props correctas
type RProjectsProps = {
    title: string;
    image: string;
    description: string;
    site: string;
    code: string;
    Icon: React.ComponentType<{ width: string; name: string }>;
    Icon2: React.ComponentType<{ width: string; name: string }>;
    Icon3: React.ComponentType<{ width: string; name: string }>;
};

const RightCard = ({ title, image, description, site, code, Icon, Icon2, Icon3 }: RProjectsProps) => {
    return (
        <div className="flex flex-col md:flex-row mt-8 pb-11 md:pb-0 w-full">
            {/* Imagen del proyecto */}
            <a
                className="flex flex-col items-center w-full md:w-3/5"
                href={site}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="relative border-4 border-orange transition-transform transform hover:scale-none md:hover:scale-105 ">
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={800}
                        className="object-center w-full md:w-[70vw]"
                    />
                </div>
            </a>

            {/* Descripción del proyecto */}
            <div className="flex flex-col items-center justify-center gap-6 w-full md:w-2/5 mt-8 md:mt-0">
                <h3 className="text-yellow-400 font-work-sans text-4xl font-bold text-center">{title}</h3>

                <div className='flex justify-center items-center gap-6 '>
                    <Icon width="25px" name="" />
                    <Icon2 width="25px" name="" />
                    <Icon3 width="25px" name="" />
                </div>

                <p className="font-work-sans text-md text-center px-10">{description}</p>

                <div className="flex justify-center items-center gap-8 text-white ">
                    <a href={code} target="_blank" rel="noopener noreferrer">
                        <RiCodeSSlashLine size="2.3rem" className=' hover:text-gray' />
                    </a>
                    <a href={site} target="_blank" rel="noopener noreferrer">
                        <BiWorld size="2.3rem" className=' hover:text-gray' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RightCard;
