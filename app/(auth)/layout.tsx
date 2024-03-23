import NavBar from '@/components/navbar';

import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <NavBar />
      {children}
    </main>
  );
};

export default MainLayout;
