import React from 'react';

type NpmIconProps = {
  width: string;
};

const NpmIcon = ({ width }: NpmIconProps) => {
  return (
    <div className="flex flex-col items-center group group-hover:transition-all duration-300 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 100"
        height={width}
        width={width}
        className="transition-colors duration-300"
      >
        <path
          d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z"
          fill="#fff"
          className="group-hover:fill-[#CB3837] transition-colors duration-300"
        />
        <path
          d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"
          fill="#190025"
          className="group-hover:fill-[#fff] transition-colors duration-300"
        />
      </svg>
      <div className="text-xs font-work-sans text-white group-hover:text-[#000] transition-colors duration-300">
        npm
      </div>
    </div>
  );
};

export default NpmIcon;
