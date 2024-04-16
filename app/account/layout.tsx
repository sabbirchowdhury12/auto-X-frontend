'use client';

import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import accountNavItems from '@/constants/accountNavItems';
import { authKey } from '@/constants/authKey';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
type User = {
  role: string;
};

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  // const role = USER_ROLE.CUSTOMER;

  const [user, setUser] = useState<User | null>(null); // Initialize user state to null
  const router = useRouter();

  useEffect(() => {
    const userString = localStorage.getItem(authKey);
    if (!userString) {
      router.push('/login');
    } else {
      try {
        const userData = JSON.parse(userString);
        setUser(userData as User); // Set user state with parsed user data, casting it to User
      } catch (error) {
        router.push('/login');
      }
    }
  }, []);

  if (!user) {
    return null;
  }

  const role = user.role;
  return (
    <div className="">
      <SecondaryNavBar />
      <SideBar sideNavItems={accountNavItems({ role })}>{children}</SideBar>
    </div>
  );
};

export default AccountLayout;
