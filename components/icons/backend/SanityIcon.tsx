import React from 'react';

type SanityIconProps = {
  width: string;
};

const SanityIcon = ({ width }: SanityIconProps) => {
  return (
    <div className="flex flex-col items-center group group-hover:transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="1.2 .4 352.2 70.9"
        height={width}
        width={width}
        className="transition-colors duration-300"
      >
        <path
          d="m264 25.5v44.7h-14.4v-51.7z"
          fill="#fff"
          className="group-hover:fill-[#f37368] transition-colors duration-300"
        />
        <path
          d="m60.2 61.9 10.8 9.4 45.5-23.7-4.7-11.3zm189.4-28.8 36.6-19-6.2-10.7-30.4 15.1z"
          fill="#fff"
          className="group-hover:fill-[#f7a199] transition-colors duration-300"
        />
        <path
          d="m146.6 22v48.2h-13.8v-68.7zm-86.4 39.9 10.8 9.4 20.8-52-6.7-17.8z"
          fill="#fff"
          className="group-hover:fill-[#f37368] transition-colors duration-300"
        />
        <path
          d="m85.1 1.5h14.2l26.3 68.7h-14.6zm63.6 0 30.3 46.9v21.8l-46.2-68.7zm56.3 0h14.3v68.7h-14.3zm44.6 12.6h-22v-12.6h51.3l7.3 12.6h-22.2z"
          fill="#fff"
          className="group-hover:fill-[#f04939] transition-colors duration-300"
        />
        <path
          d="m328.5 44.1v26.1h-14.2v-26.1"
          fill="#fff"
          className="group-hover:fill-[#f7a199] transition-colors duration-300"
        />
        <path
          d="m338.3 1.5-24 42.6h14.2l24.9-42.6z"
          fill="#fff"
          className="group-hover:fill-[#f04939] transition-colors duration-300"
        />
        <path
          d="m314.3 44.1-24.8-42.6h15.6l16.7 29.2z"
          fill="#fff"
          className="group-hover:fill-[#f37368] transition-colors duration-300"
        />
        <path
          d="m6.9 9.5c0 9.5 5.9 15.2 17.7 18.2l12.5 2.9c11.2 2.6 18 9 18 19.4.1 4.5-1.4 8.9-4.1 12.5 0-10.4-5.4-16-18.3-19.4l-12.3-2.8c-9.9-2.2-17.5-7.5-17.5-18.8 0-4.3 1.4-8.6 4-12"
          fill="#fff"
          className="group-hover:fill-[#f04939] transition-colors duration-300"
        />
        <g fill="#fff">
          <path
            d="m179 44.9v-43.4h13.8v68.7h-13.8z"
            className="group-hover:fill-[#f37368] transition-colors duration-300"
          />
          <path
            d="m43.3 47.4c5.3 3.4 7.7 8.2 7.7 15.1-4.5 5.7-12.2 8.8-21.3 8.8-15.3 0-26.2-7.6-28.5-20.7h14.7c1.9 6 6.9 8.8 13.7 8.8 8.1.1 13.6-4.3 13.7-12m-28.7-23.8c-5-3-7.9-8.4-7.7-14.2 4.3-5.6 11.7-9 20.7-9 15.7 0 24.7 8.3 27 19.9h-14.2c-1.6-4.6-5.5-8.2-12.6-8.2-7.7.1-12.9 4.5-13.2 11.5"
            className="group-hover:fill-[#f37368] transition-colors duration-300"
          />
        </g>
      </svg>
      <div className="text-xs font-work-sans text-white group-hover:text-[#000] transition-colors duration-300">
        Sanity
      </div>
    </div>
  );
};

export default SanityIcon;
