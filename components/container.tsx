import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <section className="mx-auto max-w-7xl px-2">{children}</section>;
};

export default Container;
