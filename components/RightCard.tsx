import React from 'react';
import Image from 'next/image'
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

type RProjectsProps = {
  title: string;
  image: string;
  description: string;
  site: string;
  code: string;
};

const RightCard = ({ title, image, description, site, code }: RProjectsProps) => {
  return (
    <div className="flex max-w-screen-xl mx-auto mt-8">
      {/* Imagen del proyecto */}
      <a
        className="flex flex-col items-center w-2/3 ml-0"
        href={site}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative border-4 border-orange-500 transition-transform transform hover:scale-105 hover:border-orange-500">
          <Image
            src={image}
            alt={title}
            width={800}
            height={800}
            className="object-center w-full h-full"
          />
        </div>
      </a>

      {/* Descripción del proyecto */}
      <div className="flex flex-col items-center justify-center gap-8 w-1/3 ml-5">
        <h3 className="text-yellow-400 text-4xl font-bold text-center">{title}</h3>
        <p className="text-white text-xl text-center w-3/4">{description}</p>

        {/* Logos de GitHub y Sitio Web */}
        <div className="flex justify-center items-center gap-8 text-white">
          <a href={code} target="_blank" rel="noopener noreferrer">
            <RiCodeSSlashLine size="2rem" />
          </a>
          <a href={site} target="_blank" rel="noopener noreferrer">
            <BiWorld size="2rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
