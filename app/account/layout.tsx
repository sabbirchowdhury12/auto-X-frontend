'use client';

import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import accountNavItems from '@/constants/accountNavItems';
import { getClientUserInfo } from '@/services/auth.service';
import { redirect } from 'next/navigation';
import React from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const role = 'customer';

  const user = getClientUserInfo();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="">
      <SecondaryNavBar />
      <SideBar sideNavItems={accountNavItems({ role })}>{children}</SideBar>
    </div>
  );
};

export default AccountLayout;
