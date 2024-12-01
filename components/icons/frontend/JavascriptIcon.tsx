import React from 'react';

type JavascriptIconProps = {
  width: string;
};

const JavascriptIcon = ({ width }: JavascriptIconProps) => {
  return (
    <div className="flex flex-col items-center group group-hover:transition-all duration-300 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124 141.53199999999998"
        height={width}
        className="transition-colors duration-300"
      >
        <path
          d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
          fill="#fff"
          className="group-hover:fill-[#e9ca32] transition-colors duration-300"
        />
        <path
          d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
          fill="#fff"
          className="group-hover:fill-[#ffde25] transition-colors duration-300"
        />
        <g fill="#190025">
          <path
            d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"
            className="group-hover:fill-[#000] transition-colors duration-300"
          />
        </g>
      </svg>
      <div className="text-xs font-work-sans text-white group-hover:text-[#000] transition-colors duration-300">
        JavaScript
      </div>
    </div>
  );
};

export default JavascriptIcon;



