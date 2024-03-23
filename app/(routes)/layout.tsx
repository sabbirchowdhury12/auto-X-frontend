import Footer from '@/components/footer';
import NavBar from '@/components/navbar';

import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
