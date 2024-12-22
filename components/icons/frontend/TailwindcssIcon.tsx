import React from 'react';

type TailwindcssIconProps = {
  width: string;
  name: string,
};

const TailwindcssIcon = ({ width, name}: TailwindcssIconProps) => {
  return (
    <div className="flex flex-col items-center group group-hover:transition-all duration-300">
      <svg
        width={width}
        height={width}
        xmlns="http://www.w3.org/2000/svg"
        viewBox=".15 .13 799.7 479.69"
        className="transition-colors duration-300"
      >
        <path
          d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
          fill="#fff"
          className="group-hover:fill-[#06b6d4] transition-colors duration-300"
        />
      </svg>
      <div className="text-[11px] font-work-sans text-white group-hover:text-[#000] transition-colors duration-300">
        {name}
      </div>
    </div>
  );
};

export default TailwindcssIcon;
