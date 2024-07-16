import React from 'react';

type HeadingProps = {
  title: string;
  description: string;
  color?: string;
};

const DashboardHeading = ({ title, description }: HeadingProps) => {
  return (
    <div>
      {' '}
      <h3 className="uppercase text-xs font-extrabold  text-primary">
        {title}
      </h3>
      <h2 className={`text-xl text-secondary font-bold  uppercase    `}>
        {description}
      </h2>
    </div>
  );
};

export default DashboardHeading;
