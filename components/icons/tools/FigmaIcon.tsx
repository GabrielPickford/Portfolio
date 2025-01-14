import React from 'react';

type FigmaIconProps = {
  width: string;
};

const FigmaIcon = ({ width }: FigmaIconProps) => {
  return (
    <div className="flex flex-col items-center group group-hover:transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="1.466 2.199 285.068 427.602"
        height={width}
        width={50}
        className="transition-colors duration-300"
        style={{ backgroundColor: 'transparent' }} // Asegura que el fondo del SVG sea transparente
      >
        {/* La línea recta detrás del SVG */}
        <path
          d="M1.466 2.2h285.068V429.8H1.466z"
          strokeWidth="3"
          className="group-hover: transition-colors duration-300"
          style={{ fill: 'none' }} // Evita que se aplique un fondo en el rectángulo
        />
        {/* El primer círculo color azul */}
        <path
          d="M144 216c0-39.359 31.907-71.267 71.267-71.267 39.359 0 71.267 31.908 71.267 71.267 0 39.36-31.908 71.267-71.267 71.267C175.907 287.267 144 255.36 144 216z"
          fill="#fff"
          className="group-hover:fill-[#1abcfe] transition-colors duration-300"
        />
        {/* El segundo círculo color verde */}
        <path
          d="M1.466 358.534c0-39.359 31.907-71.267 71.267-71.267H144v71.267c0 39.36-31.907 71.267-71.267 71.267S1.466 397.894 1.466 358.534z"
          fill="#fff"
          className="group-hover:fill-[#0acf83] transition-colors duration-300"
        />
        {/* El tercer rectángulo color rojo */}
        <path
          d="M144 2.2v142.533h71.267c39.36 0 71.267-31.907 71.267-71.267S254.627 2.2 215.267 2.2z"
          fill="#fff"
          className="group-hover:fill-[#ff7262] transition-colors duration-300"
        />
        {/* El cuarto rectángulo color naranja */}
        <path
          d="M1.466 73.466c0 39.36 31.907 71.267 71.267 71.267H144V2.199H72.733c-39.36 0-71.267 31.908-71.267 71.267z"
          fill="#fff"
          className="group-hover:fill-[#f24e1e] transition-colors duration-300"
        />
        {/* El quinto rectángulo color morado */}
        <path
          d="M1.466 216c0 39.36 31.907 71.267 71.267 71.267H144V144.733H72.733c-39.36 0-71.267 31.908-71.267 71.267z"
          fill="#fff"
          className="group-hover:fill-[#a259ff] transition-colors duration-300"
        />
      </svg>
      <div className="text-xs font-work-sans text-white group-hover:text-[#000] transition-colors duration-300">
        Figma
      </div>
    </div>
  );
};

export default FigmaIcon;
