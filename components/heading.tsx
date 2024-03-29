import React from 'react';

type HeadingProps = {
  title: string;
  sub_title: string;
  color?: string;
};

const Heading = ({ title, sub_title, color }: HeadingProps) => {
  return (
    <>
      {' '}
      <h3 className="uppercase text-xs font-extrabold  text-primary text-center">
        {title}
      </h3>
      <h2
        className={`text-2xl text-secondary font-bold mt-4 uppercase w-[85%] mx-auto text-center text-${color}`}
      >
        {sub_title}
      </h2>
    </>
  );
};

export default Heading;
